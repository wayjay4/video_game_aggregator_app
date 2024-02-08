import VideoGameLayout from "@/Layouts/VideoGameLayout.jsx";
import GameCard from "@/Pages/VideoGames/Components/GameCard.jsx";
import GamePresentation from "@/Pages/VideoGames/Components/GamePresentation.jsx";

export default function show({game}) {
    return (
        <VideoGameLayout>
            <div className="container mx-auto px-4">
                <GamePresentation game={game}/>

                {(game['similar_games'].length > 0) &&
                    <div className="similar-games-container mt-8">
                        <h2 className="text-blue-500 uppercase tracking-wide font-semibold">Similar Games</h2>
                        <div
                            className="similar-games text-sm sm:flex sm:flex-col sm:items-center md:grid md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-6 grid-cols-6 gap-12 md:items-stretch">
                            {game['similar_games'] && game['similar_games'].map((game) => (
                                <GameCard
                                    key={game['id']}
                                    game={game}
                                    unique_category_type="_similar_games"
                                />
                            ))}
                        </div>
                    </div>
                }
            </div>
        </VideoGameLayout>
    )
}
