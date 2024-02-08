import VideoGameLayout from "@/Layouts/VideoGameLayout.jsx";
import GameCard from "@/Pages/VideoGames/Components/GameCard.jsx";
import ReviewedGame from "@/Pages/VideoGames/Components/ReviewedGame.jsx";
import SmallGameCard from "@/Pages/VideoGames/Components/SmallGameCard.jsx";

export default function Index({popular_games, recently_reviewed, most_anticipated, coming_soon}) {
    return (
        <VideoGameLayout>
            <div className="container mx-auto px-4">
                <h2 className="text-blue-500 uppercase tracking-wide font-semibold">Popular Games</h2>
                <div
                    className="popular-games text-sm sm:flex sm:flex-col sm:items-center md:grid md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-6 grid-cols-6 gap-12 border-b border-gray-800 pb-16 md:items-stretch">
                    {popular_games.map((game) =>
                        <GameCard
                            key={game['id']}
                            game={game}
                            unique_category_type="_popular_games"
                        />)}
                </div>
                <div className="flex flex-col lg:flex-row my-10 space-y-12 lg:space-y-0">
                    <div className="recently-reviewed w-full lg:w-3/4 mr-0 lg:mr-32" id="reviews">
                        <h2 className="text-blue-500 uppercase tracking-wide font-semibold">Recently Reviewed</h2>
                        <div className="recently-reviewed-container space-y-12 mt-8">
                            {recently_reviewed.map((game) =>
                                <ReviewedGame
                                    key={game['id']}
                                    game={game} unique_category_type="_reviewed_games"
                                />)}
                        </div>
                    </div>
                    <div
                        className="most-anticipated lg:w-1/4 flex sm:flex-row sm:justify-between lg:flex-col lg:space-y-12">
                        <div>
                            <h2 className="text-blue-500 uppercase tracking-wide font-semibold">Most Anticipated</h2>
                            <div className="most-anticipated-container space-y-10 mt-8">
                                {most_anticipated && most_anticipated.map((game) =>
                                    <SmallGameCard key={game['id']} game={game}/>
                                )}
                            </div>
                        </div>

                        <div>
                            <h2 className="text-blue-500 uppercase tracking-wide font-semibold">Coming Soon</h2>
                            <div className="coming-soon-container space-y-10 mt-8" id="coming_soon">
                                {coming_soon && coming_soon.map((game) =>
                                    <SmallGameCard key={game['id']} game={game}/>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*end container*/}
        </VideoGameLayout>
    );
}
