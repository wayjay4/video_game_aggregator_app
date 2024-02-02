import VideoGameLayout from "@/Layouts/VideoGameLayout.jsx";

export default function show() {
    return (
        <VideoGameLayout>
            <div className="container mx-auto px-4">
                <div className="game-details border-b border-gray-800 pb-12 flex">
                    <div className="flex-non">
                        <img src="/assets/images/ff7.jpg" alt="cover" />
                    </div>
                    <div className="ml-12 mr-64">
                        <h2 className="font-semibold text-4xl">Final Fantasy VII Remake</h2>
                        <div className="text-gray-400">
                            <span>Adventure, RPG</span>
                            &middot;
                            <span>Square Enix</span>
                            &middot;
                            <span>Playstation 4</span>
                        </div>
                        <div className="flex flex-wrap items-center mt-8">
                            <div className="flex items-center mr-12">
                                <div className="w-16 h-16 bg-gray-800 rounded-full">
                                    <div className="font-semibold text-xs flex justify-center items-center h-full">90%</div>
                                </div>
                                <div className="ml-4 text-xs">Member <br/> Score</div>
                            </div>
                            <div className="flex items-center mr-12">
                                <div className="w-16 h-16 bg-gray-800 rounded-full">
                                    <div className="font-semibold text-xs flex justify-center items-center h-full">90%</div>
                                </div>
                                <div className="ml-4 text-xs">Critics <br/> Score</div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="w-8 h-8 bg-gray-800 rounded-full flex justify-center items-center">
                                    <a href="" className="hover:text-gray-400">
                                        <svg className="w-5 h-5 fill-current" viewBox="0 0 16 17" fill="none"><path d="M8 .266C3.582.266 0 3.952 0 8.5s3.582 8.234 8 8.234 8-3.686 8-8.234S12.418.266 8 .266zm2.655 11.873l-.365.375a.8.8 0 00-.2.355c-.048.188-.087.378-.153.56l-.561 1.556c-.444.1-.903.156-1.376.156v-.91c.055-.418-.246-1.203-.73-1.701-.194-.2-.302-.47-.302-.752v-1.062c0-.387-.203-.742-.531-.93a52.733 52.733 0 00-1.575-.866 4.648 4.648 0 01-1.02-.722l-.027-.024a3.781 3.781 0 01-.582-.689c-.303-.457-.796-1.209-1.116-1.698a6.581 6.581 0 013.33-3.383l.774.399c.343.177.747-.08.747-.475v-.375c.257-.043.52-.07.787-.08l.912.939a.542.542 0 010 .751l-.15.156-.334.343c-.101.104-.101.272 0 .376l.15.155c.102.104.102.272 0 .376l-.257.265a.255.255 0 01-.183.078h-.29a.254.254 0 00-.18.076l-.32.32a.269.269 0 00-.05.31l.502 1.035c.086.176-.039.384-.23.384h-.182a.253.253 0 01-.17-.065l-.299-.268a.51.51 0 00-.501-.102l-1.006.345a.386.386 0 00-.19.144.405.405 0 00.14.587l.357.184c.304.156.639.238.978.238.34 0 .729.906 1.032 1.062h2.153c.274 0 .537.112.73.311l.442.455c.184.19.288.447.288.716a1.584 1.584 0 01-.442 1.095zm2.797-3.033a.775.775 0 01-.457-.331l-.58-.896a.812.812 0 010-.883l.632-.976a.78.78 0 01.298-.27l.419-.216c.436.894.688 1.9.688 2.966 0 .288-.024.57-.06.848l-.94-.242z" /></svg>
                                    </a>
                                </div>
                                <div className="w-8 h-8 bg-gray-800 rounded-full flex justify-center items-center">
                                    <a href="" className="hover:text-gray-400">
                                        <svg className="w-5 h-5 fill-current" viewBox="0 0 16 18" fill="none"><g clipPath="url(#clip0)"><path d="M8.004 4.957c-2.272 0-4.104 1.804-4.104 4.04 0 2.235 1.832 4.039 4.104 4.039 2.271 0 4.103-1.804 4.103-4.04 0-2.235-1.832-4.039-4.103-4.039zm0 6.666c-1.468 0-2.668-1.178-2.668-2.627 0-1.448 1.196-2.626 2.668-2.626 1.471 0 2.667 1.178 2.667 2.626 0 1.449-1.2 2.627-2.667 2.627zm5.228-6.831a.948.948 0 01-.957.942.948.948 0 01-.957-.942.95.95 0 01.957-.942.95.95 0 01.957.942zm2.718.956c-.06-1.262-.354-2.38-1.293-3.301-.936-.921-2.071-1.21-3.353-1.273C9.982 1.1 6.02 1.1 4.7 1.174c-1.279.06-2.414.348-3.354 1.27-.939.92-1.228 2.038-1.292 3.3-.075 1.301-.075 5.2 0 6.5.06 1.263.353 2.381 1.292 3.302.94.921 2.072 1.21 3.354 1.273 1.321.074 5.282.074 6.604 0 1.282-.06 2.417-.348 3.353-1.273.936-.921 1.229-2.039 1.293-3.301.075-1.3.075-5.196 0-6.497zm-1.707 7.893a2.68 2.68 0 01-1.522 1.497c-1.053.412-3.553.317-4.717.317-1.165 0-3.668.091-4.718-.317a2.68 2.68 0 01-1.522-1.497c-.418-1.037-.321-3.498-.321-4.645 0-1.146-.093-3.61.321-4.644a2.68 2.68 0 011.522-1.497c1.053-.412 3.553-.317 4.718-.317 1.164 0 3.667-.091 4.717.317.7.274 1.24.805 1.522 1.497.418 1.037.321 3.498.321 4.644 0 1.147.097 3.611-.321 4.645z" /></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h16v18H0z"/></clipPath></defs></svg>
                                    </a>
                                </div>
                                <div className="w-8 h-8 bg-gray-800 rounded-full flex justify-center items-center">
                                    <a href="" className="hover:text-gray-400">
                                        <svg className="w-5 h-5 fill-current" viewBox="0 0 18 18" fill="none"><path d="M6.382 15h-.06a8.152 8.152 0 01-3.487-.818 1.035 1.035 0 01-.585-1.08 1.057 1.057 0 01.87-.885 4.972 4.972 0 001.905-.667 7.117 7.117 0 01-2.633-6.803 1.058 1.058 0 01.75-.862 1.012 1.012 0 011.073.308 5.317 5.317 0 003.66 2.062A3.375 3.375 0 018.932 3.93a3.352 3.352 0 014.778.142.525.525 0 00.585.075 1.043 1.043 0 011.455 1.2 4.993 4.993 0 01-.96 1.95A8.093 8.093 0 016.382 15zm0-1.5h.06a6.592 6.592 0 006.818-6.442.99.99 0 01.277-.638c.183-.232.34-.483.465-.75a1.92 1.92 0 01-1.432-.638 1.836 1.836 0 00-1.32-.532 1.875 1.875 0 00-1.343.518 1.897 1.897 0 00-.54 1.814l.195.856-.877.06a6.225 6.225 0 01-4.905-1.8 5.34 5.34 0 002.797 4.845l.713.405-.473.675a4.216 4.216 0 01-2.01 1.44 6.25 6.25 0 001.568.187h.007z" /></svg>
                                    </a>
                                </div>
                                <div className="w-8 h-8 bg-gray-800 rounded-full flex justify-center items-center">
                                    <a href="" className="hover:text-gray-400">
                                        <svg className="w-5 h-5 fill-current" viewBox="0 0 14 16" fill="none"><path d="M14 2.5v11a1.5 1.5 0 01-1.5 1.5H9.834V9.463h1.894L12 7.35H9.834V6c0-.612.17-1.028 1.047-1.028H12V3.084A15.044 15.044 0 0010.369 3C8.756 3 7.65 3.984 7.65 5.794v1.56h-1.9v2.112h1.903V15H1.5A1.5 1.5 0 010 13.5v-11A1.5 1.5 0 011.5 1h11A1.5 1.5 0 0114 2.5z" /></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <p className="mt-12">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio excepturi id perspiciatis praesentium repellendus voluptatem.
                        </p>
                        <div className="mt-12">
                            <button className="flex bg-blue-500 text-white font-semibold px-4 py-4 hover:bg-blue-600 rounded transition ease-in-out duration-150">
                                <svg className="w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
                                </svg>
                                <span className="ml-2">Play Trailer</span>
                            </button>
                        </div>
                    </div>
                </div> {/*end game details*/}
                <div className="images-container border-b border-gray-800 pb-12 mt-8">
                    <h2 className="text-blue-500 uppercase tracking-wide font-semibold">Screenshots</h2>
                    <div className="grid grid-cols-3 gap-12 mt-8">
                        <div>
                            <a href="#">
                                <img src="/assets/images/screenshot1.jpg" className="hover:opacity-75 transition ease-in-out duration-150" />
                            </a>
                        </div>
                        <div>
                            <a href="#">
                                <img src="/assets/images/screenshot2.jpg" className="hover:opacity-75 transition ease-in-out duration-150" />
                            </a>
                        </div>
                        <div>
                            <a href="#">
                                <img src="/assets/images/screenshot3.jpg" className="hover:opacity-75 transition ease-in-out duration-150" />
                            </a>
                        </div>
                        <div>
                            <a href="#">
                                <img src="/assets/images/screenshot4.jpg" className="hover:opacity-75 transition ease-in-out duration-150" />
                            </a>
                        </div>
                        <div>
                            <a href="#">
                                <img src="/assets/images/screenshot5.jpg" className="hover:opacity-75 transition ease-in-out duration-150" />
                            </a>
                        </div>
                        <div>
                            <a href="#">
                                <img src="/assets/images/screenshot6.jpg" className="hover:opacity-75 transition ease-in-out duration-150" />
                            </a>
                        </div>
                    </div>
                </div> {/*end images container*/}
                <div className="similar-games-container mt-8">
                    <h2 className="text-blue-500 uppercase tracking-wide font-semibold">Similar Games</h2>
                    <div className="similar-games text-sm sm:flex sm:flex-col sm:items-center md:grid md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-6 grid-cols-6 gap-12">
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
                    </div> {/*end of similar games*/}
                </div> {/*end similar-games container*/}
            </div>
        </VideoGameLayout>
    )
}
