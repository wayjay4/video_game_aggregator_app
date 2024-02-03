import VideoGameLayout from "@/Layouts/VideoGameLayout.jsx";

export default function Index({popular_games, recently_reviewed, most_anticipated, coming_soon}) {
    return (
        <VideoGameLayout>
            <div className="container mx-auto px-4">
                <h2 className="text-blue-500 uppercase tracking-wide font-semibold">Popular Games</h2>
                <div className="popular-games text-sm sm:flex sm:flex-col sm:items-center md:grid md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-6 grid-cols-6 gap-12 border-b border-gray-800 pb-16">
                    {popular_games.map((game)=>{
                        return (
                            <div key={game.id} className="game mt-8">
                                <div className="relative inline-block">
                                    <a href="#">
                                        <img src={ game.cover.url.replace("t_thumb","t_cover_big") } alt="game cover" className="w-15 hover:opacity-75 transition ease-in-out duration-150" />
                                    </a>
                                    {game.rating && (
                                        <div className="absolute bottom-0 right-0 w-16 h-16 bg-gray-800 rounded-full" style={{right: '-20px', bottom: '-20px'}}>
                                            <div className="font-semibold text-xs flex justify-center items-center h-full">{Math.round(game.rating)}%</div>
                                        </div>
                                    )}
                                </div>
                                <a href="#" className="block text-base font-semibold leading-tight hover:text-gray-400 mt-8 break-words overflow-hidden">
                                    {game.name}
                                </a>
                                <div className="text-gray-400 mt-1">
                                    {game.platforms && game.platforms.map((platform, i, arr)=>{
                                        if (arr.length - 1 === i) {
                                            return (platform.abbreviation)
                                        }
                                        else {
                                            return (platform.abbreviation + ', ')
                                        }
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div> {/*end of popular games*/}
                <div className="flex flex-col lg:flex-row my-10 space-y-12 lg:space-y-0">
                    <div className="recently-reviewed w-full lg:w-3/4 mr-0 lg:mr-32">
                        <h2 className="text-blue-500 uppercase tracking-wide font-semibold">Recently Reviewed</h2>
                        <div className="recently-reviewed-container space-y-12 mt-8">
                            {recently_reviewed.map((game)=>{
                                return (
                                    <div key={game.id} className="game bg-gray-800 rounded-lg shadow-md flex px-6 py-6">
                                        <div className="relative flex-none">
                                            <a href="#">
                                                <img src={ game.cover.url.replace("t_thumb","t_cover_big") } alt="game cover" className="w-48 hover:opacity-75 transition ease-in-out duration-150" />
                                            </a>
                                            {game.rating && (
                                                <div className="absolute top-0 right-0 w-16 h-16 bg-gray-900 rounded-full" style={{right: '-20px', top: '210px'}}>
                                                    <div className="font-semibold text-xs flex justify-center items-center h-full">{Math.round(game.rating)}%</div>
                                                </div>
                                            )}
                                        </div>
                                        <div className="ml-12">
                                            <a href="#" className="block text-lg font-semibold leading-tight hover:text-gray-400 mt-4">
                                                {game.name}
                                            </a>
                                            <div className="text-gray-400 mt-1">
                                                {game.platforms && game.platforms.map((platform, i, arr)=>{
                                                    if (arr.length - 1 === i) {
                                                        return (platform.abbreviation)
                                                    }
                                                    else {
                                                        return (platform.abbreviation + ', ')
                                                    }
                                                })}
                                            </div>
                                            <div className="text-gray-400 mt-6 hidden md:block">
                                                {game.summary}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="most-anticipated lg:w-1/4 flex sm:flex-row sm:justify-between lg:flex-col lg:space-y-12">
                        <div>
                            <h2 className="text-blue-500 uppercase tracking-wide font-semibold">Most Anticipated</h2>
                            <div className="most-anticipated-container space-y-10 mt-8">
                                {popular_games && most_anticipated.map((game)=> (
                                        <div key={game.id} className="game flex">
                                            <a href="#">
                                                <img src={game.cover ? game.cover.url.replace("t_thumb","t_cover_big") : 'image_not_found.jpg' } alt={game.cover ? 'game cover' : 'no image' } className="bg-gray-800 border border-gray-200 w-16 hover:opacity-75 transition ease-in-out duration-150" style={{width: '64px', height: '85px'}}  />
                                            </a>
                                            <div className="ml-4">
                                                <a className="hover:text-gray-300">{game.name}</a>
                                                <div className="text-gray-400 text-sm mt-1">{game.first_release_date}</div>
                                            </div>
                                        </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h2 className="text-blue-500 uppercase tracking-wide font-semibold">Coming Soon</h2>
                            <div className="coming-soon-container space-y-10 mt-8">
                                {coming_soon && coming_soon.map((game)=> {
                                    return (
                                        <div key={game.id} className="game flex">
                                            <a href="#">
                                                <img src={game.cover ? game.cover.url.replace("t_thumb","t_cover_big") : 'image_not_found.jpg' }  alt={game.cover ? 'game cover' : 'no image' } className="bg-gray-800 border border-gray-200 w-16 hover:opacity-75 transition ease-in-out duration-150" style={{width: '64px', height: '85px'}}  />
                                            </a>
                                            <div className="ml-4">
                                                <a className="hover:text-gray-300">{game.name}</a>
                                                <div className="text-gray-400 text-sm mt-1">{game.first_release_date}</div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div> {/*end container*/}
        </VideoGameLayout>
    );
}
