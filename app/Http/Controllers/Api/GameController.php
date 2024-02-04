<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Foundation\Application;
use Illuminate\Contracts\Foundation\Application as ContractsApplication;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Str;

class GameController extends Controller
{
    public function filter(Request $request): Application|Response|ContractsApplication|ResponseFactory
    {
        $query = Http::withHeaders(config('services.igdb'))->withBody("
            search \"{$request->get('filter')}\";
            fields id, name, slug, cover.url, platforms.abbreviation;
            where platforms = (48,49,130,6) & cover != null;
            limit 8;
        ", 'text/plain')
            ->post('https://api.igdb.com/v4/games')
            ->json();

        return response([
            'filter' => $request->get('filter'),
            'result' => $this->formatSingleGame($query),
            'message' => 'your search was successful.',
        ], 200);
    }

    private function formatSingleGame($game_data): array
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
}
