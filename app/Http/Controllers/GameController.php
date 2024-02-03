<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
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

        $popular_games = Http::withHeaders(config('services.igdb'))->withBody("
            fields name, cover.*, first_release_date, total_rating_count, platforms.abbreviation, rating, slug;
            where platforms = (48,49,130,6)
                & (first_release_date >= {$before} & first_release_date < {$after} & total_rating_count > 5);
            sort total_rating_count desc;
            limit 12;
        ", 'text/plain')
            ->post('https://api.igdb.com/v4/games')
            ->json();

        $recently_reviewed = Http::withHeaders(config('services.igdb'))->withBody("
            fields name, cover.*, first_release_date, total_rating_count, platforms.abbreviation, rating, rating_count, slug, summary;
            where platforms = (48,49,130,6)
                & (first_release_date >= {$before} & first_release_date < {$current} & total_rating_count > 5);
            sort total_rating_count desc;
            limit 3;
        ", 'text/plain')
            ->post('https://api.igdb.com/v4/games')
            ->json();

        $most_anticipated = Http::withHeaders(config('services.igdb'))->withBody("
            fields name, cover.*, first_release_date, total_rating_count, platforms.abbreviation, rating, rating_count, slug, summary;
            where platforms = (48,49,130,6)
                & (first_release_date >= {$current} & first_release_date < {$after_four_months});
            sort total_rating_count desc;
            limit 4;
        ", 'text/plain')
            ->post('https://api.igdb.com/v4/games')
            ->json();

        $coming_soon = Http::withHeaders(config('services.igdb'))->withBody("
            fields name, cover.*, first_release_date, total_rating_count, platforms.abbreviation, rating, rating_count, slug, summary;
            where platforms = (48,49,130,6)
                & (first_release_date >= {$current});
            sort first_release_date asc;
            limit 4;
        ", 'text/plain')
            ->post('https://api.igdb.com/v4/games')
            ->json();

        return Inertia::render('VideoGames/Index')->with([
            'popular_games' => $popular_games,
            'recently_reviewed' => $recently_reviewed,
            'most_anticipated' => $most_anticipated,
            'coming_soon' => $coming_soon,
        ]);
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
}
