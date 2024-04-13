<?php

namespace App\Services;

use App\Models\ThirdPartyApi;
use Carbon\Carbon;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Str;

class IgdbApiService
{
    function getApiHeaders(): array
    {
        try {
            $token = ThirdPartyApi::where('name', 'LIKE', 'igdb')->firstOrFail();

            if ($this->checkTokenExpired($token)) {
                $token = $this->getAuthorizationToken();
            }
        } catch (\Exception $exception) {
            $token = $this->getAuthorizationToken(true);
        }

        return [...config('services.igdb'), 'Authorization' => $token["authorization_token"]];
    }

    public function checkTokenExpired($token): bool
    {
        // Check if the current time is after the expiration timestamp
        return Carbon::now()->gt($token['expires_in']);
    }

    public function getAuthorizationToken(bool $create = false)
    {
        $uri = 'https://id.twitch.tv/oauth2/token?client_id=' . config('services.igdb')['Client-ID'] . '&client_secret=' . config('services.igdb')['Client-Secret'] . '&grant_type=client_credentials';

        $response = Http::post($uri)->json();

        $access_token = ucfirst(strtolower($response['token_type'])) . ' ' . $response['access_token'];
        $expirationDateTime = Carbon::now()->addSeconds($response['expires_in']);

        if ($create) {
            $token = ThirdPartyApi::create(['name' => 'igdb', 'authorization_token' => $access_token, 'expires_in' => $expirationDateTime]);
        } else {
            $token = ThirdPartyApi::where('name', 'LIKE', 'igdb')->first()->update(['authorization_token' => $access_token, 'expires_in' => $expirationDateTime]);
        }

        return $token;
    }

    public function formatSearchedGames($game_data): array
    {
        $result = [];

        foreach ($game_data as $game) {
            $result[] = [
                'id' => $game['id'] ?? null,
                'name' => $game['name'] ?? null,
                'cover_image_url' => $game['cover'] ? Str::replaceFirst('t_thumb', 't_cover_big', $game['cover']['url']) : 'https://via.placeholder.com/264x352',
                'platforms' => $game['platforms'] ? collect($game['platforms'])->pluck('abbreviation')->implode(', ') : null,
                'slug' => $game['slug'] ?? null,
            ];
        }

        return $result;
    }

    public function formatGameData($game_data): array
    {
        $result = [];

        foreach ($game_data as $game) {
            $result[] = [
                'id' => $game['id'] ?? null,
                'name' => $game['name'] ?? null,
                'cover_image_url' => $game['cover'] ? Str::replaceFirst('t_thumb', 't_cover_big', $game['cover']['url']) : 'https://via.placeholder.com/264x352',
                'release_date' => $game['first_release_date'] ? Carbon::parse($game['first_release_date'])->format('M d, Y') : null,
                'platforms' => $game['platforms'] ? collect($game['platforms'])->pluck('abbreviation')->implode(', ') : null,
                'rating' => isset($game['rating']) ? round($game['rating']) : '0',
                'rating_count' => $game['rating_count'] ?? null,
                'slug' => $game['slug'] ?? null,
                'summary' => $game['summary'] ?? null,
            ];
        }

        return $result;
    }

    public function formatSingleGame($game_data): array
    {
        $result = [];

        foreach ($game_data as $game) {
            $result[] = [
                'id' => $game['id'] ?? null,
                'name' => $game['name'] ?? null,
                'cover_image_url' => $game['cover'] ? Str::replaceFirst('t_thumb', 't_cover_big', $game['cover']['url']) : 'https://via.placeholder.com/264x352',
                'release_date' => isset($game['first_release_date']) ? Carbon::parse($game['first_release_date'])->format('M d, Y') : null,
                'platforms' => $game['platforms'] ? collect($game['platforms'])->pluck('abbreviation')->implode(', ') : null,
                'rating' => isset($game['rating']) ? round($game['rating']) : '0',
                'rating_count' => $game['rating_count'] ?? null,
                'slug' => $game['slug'] ?? null,
                'summary' => $game['summary'] ?? null,
                'genres' => isset($game['genres']) ? collect($game['genres'])->pluck('name')->implode(', ') : null,
                'involved_companies' => isset($game['involved_companies']) ? collect($game['involved_companies'])->pluck('company.name')->implode(', ') : null,
                'aggregated_rating' => isset($game['aggregated_rating']) ? round($game['aggregated_rating']) : '0',
                'url' => $game['url'] ?? null,
                'videos' => $game['videos'] ?? null,
                'trailer' => isset($game['videos'][0]['video_id']) ? 'https://youtube.com/embed/' . $game['videos'][0]['video_id'] : null,
                'screenshots' => isset($game['screenshots']) ? collect($game['screenshots'])->map(function ($screenshot) {
                    return [
                        'id' => $screenshot['id'],
                        'big' => Str::replaceFirst('t_thumb', 't_screenshot_big', $screenshot['url']),
                        'huge' => Str::replaceFirst('t_thumb', 't_screenshot_huge', $screenshot['url']),
                    ];
                })->take(6) : collect(),
                'similar_games' => isset($game['similar_games']) ? collect($game['similar_games'])->map(function ($game) {
                    return collect($game)->merge([
                        'cover_image_url' => array_key_exists('cover', $game)
                            ? Str::replaceFirst('t_thumb', 't_cover_big', $game['cover']['url'])
                            : 'https://via.placeholder.com/264x352',
                        'rating' => isset($game['rating']) ? round($game['rating']) : null,
                        'platforms' => array_key_exists('platforms', $game)
                            ? collect($game['platforms'])->pluck('abbreviation')->implode(', ')
                            : null,
                        'slug' => $game['slug'],
                    ]);
                })->take(6) : collect(),
                'social' => isset($game['websites']) ? [
                    'website' => collect($game['websites'])->first(),
                    'steam' => collect($game['websites'])->filter(function ($website) {
                        return Str::contains($website['url'], 'steam');
                    })->first(),
                    'facebook' => collect($game['websites'])->filter(function ($website) {
                        return Str::contains($website['url'], 'facebook');
                    })->first(),
                    'twitter' => collect($game['websites'])->filter(function ($website) {
                        return Str::contains($website['url'], 'twitter');
                    })->first(),
                    'instagram' => collect($game['websites'])->filter(function ($website) {
                        return Str::contains($website['url'], 'instagram');
                    })->first(),
                ] : [],
            ];
        }

        return $result;
    }
}
