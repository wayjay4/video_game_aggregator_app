<?php

namespace App\Services;

use App\Models\ThirdPartyApi;
use Carbon\Carbon;
use Illuminate\Support\Facades\Http;

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
        $expirationDurationInSeconds = $token['expires_in'];
        $updatedAt = $token->updated_at;
        $currentDateTime = Carbon::now();

        // Calculate the expiration timestamp by adding the expiration duration to the token's updated_at timestamp
        $expirationTimestamp = $updatedAt->addSeconds($expirationDurationInSeconds);

        // Check if the current time is after the expiration timestamp
        return $currentDateTime->gt($expirationTimestamp);
    }

    public function getAuthorizationToken(bool $create = false)
    {
        $uri = 'https://id.twitch.tv/oauth2/token?client_id=' . config('services.igdb')['Client-ID'] . '&client_secret=' . config('services.igdb')['Client-Secret'] . '&grant_type=client_credentials';

        $response = Http::post($uri)->json();

        $access_token = ucfirst(strtolower($response['token_type'])) . ' ' . $response['access_token'];

        if ($create) {
            $token = ThirdPartyApi::create(['name' => 'igdb', 'authorization_token' => $access_token, 'expires_in' => $response['expires_in']]);
        } else {
            $token = ThirdPartyApi::where('name', 'LIKE', 'igdb')->first()->update(['authorization_token' => $access_token, 'expires_in' => $response['expires_in']]);
        }

        return $token;
    }
}
