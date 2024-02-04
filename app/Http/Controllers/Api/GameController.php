<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Str;

class GameController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

    public function query(Request $request): \Illuminate\Foundation\Application|Response|\Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\Routing\ResponseFactory
    {
        $query = Http::withHeaders(config('services.igdb'))->withBody("
            search \"{$request->get('filter')}\";
            fields id, name, slug, cover.url, platforms.abbreviation;
            where platforms = (48,49,130,6) & cover != null;
            limit 6;
        ", 'text/plain')
            ->post('https://api.igdb.com/v4/games')
            ->json();

        return response([
            'filter' => $request->get('filter'),
            'query' => $this->formatSingleGame($query),
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
                'cover_image_url' => $game['cover'] ? Str::replaceFirst('t_thumb', 't_cover_big', $game['cover']['url']) : null,
                'platforms' => $game['platforms'] ? collect($game['platforms'])->pluck('abbreviation')->implode(', ') : null,
                'slug' => $game['slug'] ?? null,
            ];
        }

        return $result;
    }
}
