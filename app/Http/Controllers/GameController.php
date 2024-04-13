<?php

namespace App\Http\Controllers;

use App\Services\IgdbApiService;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class GameController extends Controller
{
    public IgdbApiService $igdbApiService;
    public array $headers;

    public function __construct(IgdbApiService $igdbApiService)
    {
        $this->igdbApiService = $igdbApiService;
        $this->headers = $this->igdbApiService->getApiHeaders();
    }

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
//            fields name, cover.*, first_release_date, platforms.abbreviation, total_rating_count, rating, rating_count, slug;
//            where platforms = (48,49,130,6) & cover != null
//                & (first_release_date >= {$before} & first_release_date < {$after} & rating_count > 5);
//            sort total_rating_count desc;
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

        $headers = $this->headers;

        try {
            $response = Cache::remember('popular-games', 0, function () use ($headers, $before, $after, $current, $after_four_months) {
                return Http::withHeaders($headers)->withBody("
                query games \"popular_games\" {
                    fields name, cover.*, first_release_date, platforms.abbreviation, total_rating_count, rating, rating_count, slug;
                    where platforms = (48,49,130,6) & cover != null
                        & (first_release_date >= {$before} & first_release_date < {$after} & total_rating_count > 5);
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
                    ->post('https://api.igdb.com/v4/multiquery');
            });
        } catch (\Exception $e) {
            return $e->getMessage();
        }

        $statusCode = $response->status();
        $jsonResponse = $response->json();

        if ($statusCode === 200) {
            $result = [];
            foreach ($jsonResponse as $query) {
                $result[$query['name']] = $this->igdbApiService->formatGameData($query['result']);
            }
        } else {
            $this->igdbApiService->getAuthorizationToken();
            return redirect()->route('games.index');
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
    public function show(string $slug): \Inertia\Response
    {
        $headers = $this->headers;

        $game = Cache::remember('show-game' . $slug, 60, function () use ($headers, $slug) {
            return Http::withHeaders($headers)->withBody("
                fields *, cover.*, platforms.abbreviation, screenshots.*, genres.name, involved_companies.company.name, url, videos.video_id, websites.url, similar_games.cover.url, similar_games.name, similar_games.rating,similar_games.platforms.abbreviation, similar_games.slug;
                where slug=\"{$slug}\";
                limit 1;
            ", 'text/plain')
                ->post('https://api.igdb.com/v4/games')
                ->json();
        });

        return Inertia::render('VideoGames/Show')->with([
            'game' => ($this->igdbApiService->formatSingleGame($game))[0],
        ]);
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
