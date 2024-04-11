<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class IgdbApiService
{

    public function getAuthorizationToken(): void
    {
        $client_id = 'wc8xas4x270vts1y04pgzpyld2uiyy';
        $client_secret = 'zghzapskj9ggjopngandrt4avxxjcb';

        $response = Http::post('https://id.twitch.tv/oauth2/token?client_id=' . $client_id . '&client_secret=' . $client_secret . '&grant_type=client_credentials')
            ->json();

        $key = 'IGDB_AUTHORIZATION';
        $value = ucfirst(strtolower($response['token_type'])) . ' ' . $response['access_token'];

        $this->setEnv($key, $value);
    }

    private function setEnv($key, $value): void
    {
        $search = $key . "='" . env($key) . "'";
        $replace = $key . "='" . $value . "'";

        file_put_contents(app()->environmentFilePath(), str_replace(
            $search,
            $replace,
            file_get_contents(app()->environmentFilePath())
        ));
    }
}
