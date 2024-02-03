<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Str;
use Inertia\Inertia;

class GameController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $before = Carbon::now()->subMonths(2)->timestamp;
        $after = Carbon::now()->addMonths(2)->timestamp;
        $after_four_months = Carbon::now()->addMonths(4)->timestamp;
        $current = Carbon::now()->timestamp;

//        $popular_games = Http::withHeaders(config('services.igdb'))->withBody("
//            fields name, cover.*, first_release_date, platforms.abbreviation, rating, rating_count, slug;
//            where platforms = (48,49,130,6) & cover != null
//                & (first_release_date >= {$before} & first_release_date < {$after} & rating_count > 5);
//            sort rating_count desc;
//            limit 12;
//        ", 'text/plain')
//            ->post('https://api.igdb.com/v4/games')
//            ->json();

//        $recently_reviewed = Http::withHeaders(config('services.igdb'))->withBody("
//            fields name, cover.*, first_release_date, platforms.abbreviation, rating, rating_count, slug, summary;
//            where platforms = (48,49,130,6) & cover != null
//                & (first_release_date >= {$before} & first_release_date < {$current} & rating_count > 5);
//            sort rating_count desc;
//            limit 3;
//        ", 'text/plain')
//            ->post('https://api.igdb.com/v4/games')
//            ->json();

//        $most_anticipated = Http::withHeaders(config('services.igdb'))->withBody("
//            fields name, cover.*, first_release_date, platforms.abbreviation, rating, rating_count, slug;
//            where platforms = (48,49,130,6) & cover != null
//                & (first_release_date >= {$current} & first_release_date < {$after_four_months});
//            sort rating_count desc;
//            limit 4;
//        ", 'text/plain')
//            ->post('https://api.igdb.com/v4/games')
//            ->json();
        
//        $coming_soon = Http::withHeaders(config('services.igdb'))->withBody("
//            fields name, cover.*, first_release_date, platforms.abbreviation, rating, rating_count, slug;
//            where platforms = (48,49,130,6) & cover != null & first_release_date > {$current};
//            sort first_release_date asc;
//            limit 4;
//        ", 'text/plain')
//            ->post('https://api.igdb.com/v4/games')
//            ->json();

        $queries = Http::withHeaders(config('services.igdb'))->withBody("
            query games \"popular_games\" {
                fields name, cover.*, first_release_date, platforms.abbreviation, rating, rating_count, slug;
                where platforms = (48,49,130,6) & cover != null
                    & (first_release_date >= {$before} & first_release_date < {$after} & rating_count > 5);
                sort rating_count desc;
                limit 12;
            };

            query games \"recently_reviewed\" {
                fields name, cover.*, first_release_date, platforms.abbreviation, rating, rating_count, slug, summary;
                where platforms = (48,49,130,6) & cover != null
                    & (first_release_date >= {$before} & first_release_date < {$current} & rating_count > 5);
                sort rating_count desc;
                limit 3;
            };

            query games \"most_anticipated\" {
                fields name, cover.*, first_release_date, platforms.abbreviation, rating, rating_count, slug;
                where platforms = (48,49,130,6) & cover != null
                    & (first_release_date >= {$current} & first_release_date < {$after_four_months});
                sort rating_count desc;
                limit 4;
            };

            query games \"coming_soon\" {
                fields name, cover.*, first_release_date, platforms.abbreviation, rating, rating_count, slug;
                where platforms = (48,49,130,6) & cover != null & first_release_date > {$current};
                sort first_release_date asc;
                limit 4;
            };
        ", 'text/plain')
            ->post('https://api.igdb.com/v4/multiquery')
            ->json();

        $result = [];
        foreach($queries as $query) {
            $result[$query['name']] = $this->formatGameData($query['result']);
        }

        return Inertia::render('VideoGames/Index')->with($result);
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
        return Inertia::render('VideoGames/Show');
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

    private function formatGameData($game_data): array
    {
        $result = [];

        foreach ($game_data as $game) {
            $result[] = [
                'id' => $game['id'] ?? null,
                'name' => $game['name'] ?? null,
                'cover_image_url' => $game['cover'] ? Str::replaceFirst('t_thumb', 't_cover_big', $game['cover']['url']) : null,
                'release_date' => $game['first_release_date'] ? Carbon::parse($game['first_release_date'])->format('M d, Y') : null,
                'platforms' => $game['platforms'] ? collect($game['platforms'])->pluck('abbreviation')->implode(', ') : null,
                'rating' => isset($game['rating']) ? round($game['rating']).'%': null,
                'rating_count' => $game['rating_count'] ?? null,
                'slug' => $game['slug'] ?? null,
                'summary' => $game['summary'] ?? null,
            ];
        }

        return $result;
    }
}
