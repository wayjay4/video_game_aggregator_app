import VideoGameInfoLayout from "@/Layouts/VideoGameInfoLayout.jsx";

export default function VideoGames() {
    return (
        <VideoGameInfoLayout>
            <div className="container mx-auto px-4">
                <h2 className="text-blue-500 uppercase tracking-wide font-semibold">Popular Games</h2>
                <div className="popular-games text-sm sm:flex sm:flex-col sm:items-center md:grid md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-6 grid-cols-6 gap-12 border-b border-gray-800 pb-16">
                    <div className="game mt-8">
                        <div className="relative inline-block">
                            <a href="#">
                                <img src="/assets/images/ff7.jpg" alt="game cover" className="hover:opacity-75 transition ease-in-out duration-150" />
                            </a>
                            <div className="absolute bottom-0 right-0 w-16 h-16 bg-gray-800 rounded-full" style={{right: '-20px', bottom: '-20px'}}>
                                <div className="font-semibold text-xs flex justify-center items-center h-full">80%</div>
                            </div>
                        </div>
                        <a href="#" className="block text-base font-semibold leading-tight hover:text-gray-400 mt-8">
                            Final Fantasy 7 Remake
                        </a>
                        <div className="text-gray-400 mt-1">Playstation 4</div>
                    </div>
                    <div className="game mt-8">
                        <div className="relative inline-block">
                            <a href="#">
                                <img src="/assets/images/animalcrossing.jpg" alt="game cover" className="hover:opacity-75 transition ease-in-out duration-150" />
                            </a>
                            <div className="absolute bottom-0 right-0 w-16 h-16 bg-gray-800 rounded-full" style={{right: '-20px', bottom: '-20px'}}>
                                <div className="font-semibold text-xs flex justify-center items-center h-full">80%</div>
                            </div>
                        </div>
                        <a href="#" className="block text-base font-semibold leading-tight hover:text-gray-400 mt-8">
                            Animal Crossing: New Horizons
                        </a>
                        <div className="text-gray-400 mt-1">Nintendo Switch</div>
                    </div>
                    <div className="game mt-8">
                        <div className="relative inline-block">
                            <a href="#">
                                <img src="/assets/images/doom.jpg" alt="game cover" className="hover:opacity-75 transition ease-in-out duration-150" />
                            </a>
                            <div className="absolute bottom-0 right-0 w-16 h-16 bg-gray-800 rounded-full" style={{right: '-20px', bottom: '-20px'}}>
                                <div className="font-semibold text-xs flex justify-center items-center h-full">80%</div>
                            </div>
                        </div>
                        <a href="#" className="block text-base font-semibold leading-tight hover:text-gray-400 mt-8">
                            Doom Eternal
                        </a>
                        <div className="text-gray-400 mt-1">Playstation 4, PC</div>
                    </div>
                    <div className="game mt-8">
                        <div className="relative inline-block">
                            <a href="#">
                                <img src="/assets/images/alyx.jpg" alt="game cover" className="hover:opacity-75 transition ease-in-out duration-150" />
                            </a>
                            <div className="absolute bottom-0 right-0 w-16 h-16 bg-gray-800 rounded-full" style={{right: '-20px', bottom: '-20px'}}>
                                <div className="font-semibold text-xs flex justify-center items-center h-full">80%</div>
                            </div>
                        </div>
                        <a href="#" className="block text-base font-semibold leading-tight hover:text-gray-400 mt-8">
                            Half Life: Alyx
                        </a>
                        <div className="text-gray-400 mt-1">PC</div>
                    </div>
                    <div className="game mt-8">
                        <div className="relative inline-block">
                            <a href="#">
                                <img src="/assets/images/luigi.jpg" alt="game cover" className="hover:opacity-75 transition ease-in-out duration-150" />
                            </a>
                            <div className="absolute bottom-0 right-0 w-16 h-16 bg-gray-800 rounded-full" style={{right: '-20px', bottom: '-20px'}}>
                                <div className="font-semibold text-xs flex justify-center items-center h-full">80%</div>
                            </div>
                        </div>
                        <a href="#" className="block text-base font-semibold leading-tight hover:text-gray-400 mt-8">
                            Luigi's Mansion 3
                        </a>
                        <div className="text-gray-400 mt-1">Nintendo Switch</div>
                    </div>
                    <div className="game mt-8">
                        <div className="relative inline-block">
                            <a href="#">
                                <img src="/assets/images/resident.jpg" alt="game cover" className="hover:opacity-75 transition ease-in-out duration-150" />
                            </a>
                            <div className="absolute bottom-0 right-0 w-16 h-16 bg-gray-800 rounded-full" style={{right: '-20px', bottom: '-20px'}}>
                                <div className="font-semibold text-xs flex justify-center items-center h-full">80%</div>
                            </div>
                        </div>
                        <a href="#" className="block text-base font-semibold leading-tight hover:text-gray-400 mt-8">
                            Resident Evil 3
                        </a>
                        <div className="text-gray-400 mt-1">PC, Playstation 4, XBox, One X</div>
                    </div>
                    <div className="game mt-8">
                        <div className="relative inline-block">
                            <a href="#">
                                <img src="/assets/images/resident.jpg" alt="game cover" className="hover:opacity-75 transition ease-in-out duration-150" />
                            </a>
                            <div className="absolute bottom-0 right-0 w-16 h-16 bg-gray-800 rounded-full" style={{right: '-20px', bottom: '-20px'}}>
                                <div className="font-semibold text-xs flex justify-center items-center h-full">80%</div>
                            </div>
                        </div>
                        <a href="#" className="block text-base font-semibold leading-tight hover:text-gray-400 mt-8">
                            Resident Evil 3
                        </a>
                        <div className="text-gray-400 mt-1">PC, Playstation 4, XBox, One X</div>
                    </div>
                    <div className="game mt-8">
                        <div className="relative inline-block">
                            <a href="#">
                                <img src="/assets/images/luigi.jpg" alt="game cover" className="hover:opacity-75 transition ease-in-out duration-150" />
                            </a>
                            <div className="absolute bottom-0 right-0 w-16 h-16 bg-gray-800 rounded-full" style={{right: '-20px', bottom: '-20px'}}>
                                <div className="font-semibold text-xs flex justify-center items-center h-full">80%</div>
                            </div>
                        </div>
                        <a href="#" className="block text-base font-semibold leading-tight hover:text-gray-400 mt-8">
                            Luigi's Mansion 3
                        </a>
                        <div className="text-gray-400 mt-1">Nintendo Switch</div>
                    </div>
                    <div className="game mt-8">
                        <div className="relative inline-block">
                            <a href="#">
                                <img src="/assets/images/alyx.jpg" alt="game cover" className="hover:opacity-75 transition ease-in-out duration-150" />
                            </a>
                            <div className="absolute bottom-0 right-0 w-16 h-16 bg-gray-800 rounded-full" style={{right: '-20px', bottom: '-20px'}}>
                                <div className="font-semibold text-xs flex justify-center items-center h-full">80%</div>
                            </div>
                        </div>
                        <a href="#" className="block text-base font-semibold leading-tight hover:text-gray-400 mt-8">
                            Half Life: Alyx
                        </a>
                        <div className="text-gray-400 mt-1">PC</div>
                    </div>
                    <div className="game mt-8">
                        <div className="relative inline-block">
                            <a href="#">
                                <img src="/assets/images/doom.jpg" alt="game cover" className="hover:opacity-75 transition ease-in-out duration-150" />
                            </a>
                            <div className="absolute bottom-0 right-0 w-16 h-16 bg-gray-800 rounded-full" style={{right: '-20px', bottom: '-20px'}}>
                                <div className="font-semibold text-xs flex justify-center items-center h-full">80%</div>
                            </div>
                        </div>
                        <a href="#" className="block text-base font-semibold leading-tight hover:text-gray-400 mt-8">
                            Doom Eternal
                        </a>
                        <div className="text-gray-400 mt-1">Playstation 4, PC</div>
                    </div>
                    <div className="game mt-8">
                        <div className="relative inline-block">
                            <a href="#">
                                <img src="/assets/images/animalcrossing.jpg" alt="game cover" className="hover:opacity-75 transition ease-in-out duration-150" />
                            </a>
                            <div className="absolute bottom-0 right-0 w-16 h-16 bg-gray-800 rounded-full" style={{right: '-20px', bottom: '-20px'}}>
                                <div className="font-semibold text-xs flex justify-center items-center h-full">80%</div>
                            </div>
                        </div>
                        <a href="#" className="block text-base font-semibold leading-tight hover:text-gray-400 mt-8">
                            Animal Crossing: New Horizons
                        </a>
                        <div className="text-gray-400 mt-1">Nintendo Switch</div>
                    </div>
                    <div className="game mt-8">
                        <div className="relative inline-block">
                            <a href="#">
                                <img src="/assets/images/ff7.jpg" alt="game cover" className="hover:opacity-75 transition ease-in-out duration-150" />
                            </a>
                            <div className="absolute bottom-0 right-0 w-16 h-16 bg-gray-800 rounded-full" style={{right: '-20px', bottom: '-20px'}}>
                                <div className="font-semibold text-xs flex justify-center items-center h-full">80%</div>
                            </div>
                        </div>
                        <a href="#" className="block text-base font-semibold leading-tight hover:text-gray-400 mt-8">
                            Final Fantasy 7 Remake
                        </a>
                        <div className="text-gray-400 mt-1">Playstation 4</div>
                    </div>
                </div> {/*end of popular games*/}
                <div className="flex flex-col lg:flex-row my-10 space-y-12 lg:space-y-0">
                    <div className="recently-reviewed w-full lg:w-3/4 mr-0 lg:mr-32">
                        <h2 className="text-blue-500 uppercase tracking-wide font-semibold">Recently Reviewed</h2>
                        <div className="recently-reviewed-container space-y-12 mt-8">
                            <div className="game bg-gray-800 rounded-lg shadow-md flex px-6 py-6">
                                <div className="relative flex-none">
                                    <a href="#">
                                        <img src="/assets/images/ff7.jpg" alt="game cover" className="w-48 hover:opacity-75 transition ease-in-out duration-150" />
                                    </a>
                                    <div className="absolute top-0 right-0 w-16 h-16 bg-gray-900 rounded-full" style={{right: '-20px', top: '210px'}}>
                                        <div className="font-semibold text-xs flex justify-center items-center h-full">80%</div>
                                    </div>
                                </div>
                                <div className="ml-12">
                                    <a href="#" className="block text-lg font-semibold leading-tight hover:text-gray-400 mt-4">
                                        Final Fantasy 7 Remake
                                    </a>
                                    <div className="text-gray-400 mt-1">Playstation 4</div>
                                    <div className="text-gray-400 mt-6">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consequatur deserunt dignissimos dolor dolorem exercitationem fuga inventore laborum, molestiae nobis possimus quae quam tempora ut velit veritatis vitae voluptatum! Adipisci aperiam consequatur consequuntur enim eos excepturi facere harum nisi, non omnis optio, provident quae repellendus saepe suscipit ut voluptatibus. Accusamus, animi aperiam excepturi fugiat in labore molestias quae repellat sunt.
                                    </div>
                                </div>
                            </div>
                            <div className="game bg-gray-800 rounded-lg shadow-md flex px-6 py-6">
                                <div className="relative flex-none">
                                    <a href="#">
                                        <img src="/assets/images/animalcrossing.jpg" alt="game cover" className="w-48 hover:opacity-75 transition ease-in-out duration-150" />
                                    </a>
                                    <div className="absolute bottom-0 right-0 w-16 h-16 bg-gray-900 rounded-full" style={{right: '-20px', bottom: '-20px'}}>
                                        <div className="font-semibold text-xs flex justify-center items-center h-full">80%</div>
                                    </div>
                                </div>
                                <div className="ml-12">
                                    <a href="#" className="block text-lg font-semibold leading-tight hover:text-gray-400 mt-4">
                                        Animal Crossing: New Horizon
                                    </a>
                                    <div className="text-gray-400 mt-1">Nintendo Switch</div>
                                    <div className="text-gray-400 mt-6">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse inventore perferendis placeat quasi tenetur. Accusantium eligendi officiis omnis quod tempore?
                                    </div>
                                </div>
                            </div>
                            <div className="game bg-gray-800 rounded-lg shadow-md flex px-6 py-6">
                                <div className="relative flex-none">
                                    <a href="#">
                                        <img src="/assets/images/doom.jpg" alt="game cover" className="w-48 hover:opacity-75 transition ease-in-out duration-150" />
                                    </a>
                                    <div className="absolute bottom-0 right-0 w-16 h-16 bg-gray-900 rounded-full" style={{right: '-20px', bottom: '-20px'}}>
                                        <div className="font-semibold text-xs flex justify-center items-center h-full">80%</div>
                                    </div>
                                </div>
                                <div className="ml-12">
                                    <a href="#" className="block text-lg font-semibold leading-tight hover:text-gray-400 mt-4">
                                        Doom Eternal
                                    </a>
                                    <div className="text-gray-400 mt-1">Playstation 4, PC</div>
                                    <div className="text-gray-400 mt-6">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi eligendi excepturi ipsa perferendis reiciendis, suscipit tempore? Aut impedit laboriosam nemo optio quam repellendus. Aliquam asperiores, consequatur consequuntur earum, error fuga hic illum impedit iure, maxime nam nisi placeat sapiente vel!
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="most-anticipated lg:w-1/4 flex sm:flex-row sm:justify-between lg:flex-col lg:space-y-12">
                        <div>
                            <h2 className="text-blue-500 uppercase tracking-wide font-semibold">Most Anticipated</h2>
                            <div className="most-anticipated-container space-y-10 mt-8">
                                <div className="game flex">
                                    <a href="#">
                                        <img src="/assets/images/cyberpunk.jpg" alt="game cover" className="w-16 hover:opacity-75 transition ease-in-out duration-150" />
                                    </a>
                                    <div className="ml-4">
                                        <a className="hover:text-gray-300">Cyberpunk 2077</a>
                                        <div className="text-gray-400 text-sm mt-1">Sept. 16, 2020</div>
                                    </div>
                                </div>
                                <div className="game flex">
                                    <a href="#">
                                        <img src="/assets/images/avengers.jpg" alt="game cover" className="w-16 hover:opacity-75 transition ease-in-out duration-150" />
                                    </a>
                                    <div className="ml-4">
                                        <a className="hover:text-gray-300">Marvel's Avengers</a>
                                        <div className="text-gray-400 text-sm mt-1">Sept. 3, 2020</div>
                                    </div>
                                </div>
                                <div className="game flex">
                                    <a href="#">
                                        <img src="/assets/images/ghost.jpg" alt="game cover" className="w-16 hover:opacity-75 transition ease-in-out duration-150" />
                                    </a>
                                    <div className="ml-4">
                                        <a className="hover:text-gray-300">Ghost of Tsushima</a>
                                        <div className="text-gray-400 text-sm mt-1">July 17, 2020</div>
                                    </div>
                                </div>
                                <div className="game flex">
                                    <a href="#">
                                        <img src="/assets/images/tlou2.jpg" alt="game cover" className="w-16 hover:opacity-75 transition ease-in-out duration-150" />
                                    </a>
                                    <div className="ml-4">
                                        <a className="hover:text-gray-300">The Last of Us Part II</a>
                                        <div className="text-gray-400 text-sm mt-1">June 19, 2020</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-blue-500 uppercase tracking-wide font-semibold">Coming Soon</h2>
                            <div className="coming-soon-container space-y-10 mt-8">
                                <div className="game flex">
                                    <a href="#">
                                        <img src="/assets/images/ghost.jpg" alt="game cover" className="w-16 hover:opacity-75 transition ease-in-out duration-150" />
                                    </a>
                                    <div className="ml-4">
                                        <a className="hover:text-gray-300">Ghost of Tsushima</a>
                                        <div className="text-gray-400 text-sm mt-1">July 17, 2020</div>
                                    </div>
                                </div>
                                <div className="game flex">
                                    <a href="#">
                                        <img src="/assets/images/tlou2.jpg" alt="game cover" className="w-16 hover:opacity-75 transition ease-in-out duration-150" />
                                    </a>
                                    <div className="ml-4">
                                        <a className="hover:text-gray-300">The Last of Us Part II</a>
                                        <div className="text-gray-400 text-sm mt-1">June 19, 2020</div>
                                    </div>
                                </div>
                                <div className="game flex">
                                    <a href="#">
                                        <img src="/assets/images/cyberpunk.jpg" alt="game cover" className="w-16 hover:opacity-75 transition ease-in-out duration-150" />
                                    </a>
                                    <div className="ml-4">
                                        <a className="hover:text-gray-300">Cyberpunk 2077</a>
                                        <div className="text-gray-400 text-sm mt-1">Sept. 16, 2020</div>
                                    </div>
                                </div>
                                <div className="game flex">
                                    <a href="#">
                                        <img src="/assets/images/avengers.jpg" alt="game cover" className="w-16 hover:opacity-75 transition ease-in-out duration-150" />
                                    </a>
                                    <div className="ml-4">
                                        <a className="hover:text-gray-300">Marvel's Avengers</a>
                                        <div className="text-gray-400 text-sm mt-1">Sept. 3, 2020</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> {/*end container*/}
        </VideoGameInfoLayout>
    );
}
