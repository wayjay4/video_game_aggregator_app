import VideoGameLayout from "@/Layouts/VideoGameLayout.jsx";

export default function show({game}) {
    return (
        <VideoGameLayout>
            <div className="container mx-auto px-4">
                <div className="game-details border-b border-gray-800 pb-12 flex flex-col lg:flex-row">
                    <div className="flex-none">
                        <img src={game['cover_image_url']} alt="game cover" />
                    </div>
                    <div className="lg:ml-12 lg:mr-64 mt-8 lg:mt-0">
                        <h2 className="font-semibold text-4xl leading-tight mt-1">{game['name']}</h2>
                        <div className="text-gray-400">
                            {game['genres'] && (
                                <>
                                    <span>{game['genres']}</span>
                                    <span className="px-2">&middot;</span>
                                </>
                            )}
                            {game['involved_companies'] && (
                                <>
                                    <span>{game['involved_companies']}</span>
                                    <span className="px-2">&middot;</span>
                                </>
                            )}
                            {game['platforms'] && (
                                <>
                                    <span>{game['platforms']}</span>
                                </>
                            )}
                        </div>
                        <div className="flex flex-wrap items-center mt-8">
                            <div className="flex items-center mr-12">
                                <div className="w-16 h-16 bg-gray-800 rounded-full">
                                    <div className="font-semibold text-xs flex justify-center items-center h-full">{game['rating']}</div>
                                </div>
                                <div className="ml-4 text-xs">Member <br/> Score</div>
                            </div>
                            <div className="flex items-center mr-12">
                                <div className="w-16 h-16 bg-gray-800 rounded-full">
                                    <div className="font-semibold text-xs flex justify-center items-center h-full">{game['aggregated_rating']}</div>
                                </div>
                                <div className="ml-4 text-xs">Critics <br/> Score</div>
                            </div>
                            <div className="flex items-center space-x-4 mt-4 lg:mt-0">
                                {game['url'] && (
                                    <div className="w-8 h-8 bg-gray-800 rounded-full flex justify-center items-center">
                                        <a href={game['url']} className="hover:text-gray-400">
                                            <svg className="w-5 h-5 fill-current" viewBox="0 0 16 17" fill="none"><path d="M8 .266C3.582.266 0 3.952 0 8.5s3.582 8.234 8 8.234 8-3.686 8-8.234S12.418.266 8 .266zm2.655 11.873l-.365.375a.8.8 0 00-.2.355c-.048.188-.087.378-.153.56l-.561 1.556c-.444.1-.903.156-1.376.156v-.91c.055-.418-.246-1.203-.73-1.701-.194-.2-.302-.47-.302-.752v-1.062c0-.387-.203-.742-.531-.93a52.733 52.733 0 00-1.575-.866 4.648 4.648 0 01-1.02-.722l-.027-.024a3.781 3.781 0 01-.582-.689c-.303-.457-.796-1.209-1.116-1.698a6.581 6.581 0 013.33-3.383l.774.399c.343.177.747-.08.747-.475v-.375c.257-.043.52-.07.787-.08l.912.939a.542.542 0 010 .751l-.15.156-.334.343c-.101.104-.101.272 0 .376l.15.155c.102.104.102.272 0 .376l-.257.265a.255.255 0 01-.183.078h-.29a.254.254 0 00-.18.076l-.32.32a.269.269 0 00-.05.31l.502 1.035c.086.176-.039.384-.23.384h-.182a.253.253 0 01-.17-.065l-.299-.268a.51.51 0 00-.501-.102l-1.006.345a.386.386 0 00-.19.144.405.405 0 00.14.587l.357.184c.304.156.639.238.978.238.34 0 .729.906 1.032 1.062h2.153c.274 0 .537.112.73.311l.442.455c.184.19.288.447.288.716a1.584 1.584 0 01-.442 1.095zm2.797-3.033a.775.775 0 01-.457-.331l-.58-.896a.812.812 0 010-.883l.632-.976a.78.78 0 01.298-.27l.419-.216c.436.894.688 1.9.688 2.966 0 .288-.024.57-.06.848l-.94-.242z" /></svg>
                                        </a>
                                    </div>
                                )}
                                {game['social']['steam'] && (
                                    <div className="w-8 h-8 bg-gray-800 rounded-full flex justify-center items-center">
                                        <a href={game['social']['steam']['url']} className="hover:text-gray-400">
                                            <svg className="w-5 h-5 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M 16 3 C 8.832 3 3 8.832 3 16 C 3 23.168 8.832 29 16 29 C 23.168 29 29 23.168 29 16 C 29 8.832 23.168 3 16 3 z M 16 5 C 22.065 5 27 9.935 27 16 C 27 22.065 22.065 27 16 27 C 10.891494 27 6.5985638 23.494211 5.3671875 18.765625 L 9.0332031 20.335938 C 9.2019466 21.832895 10.457908 23 12 23 C 13.657 23 15 21.657 15 20 C 15 19.968 14.991234 19.93725 14.990234 19.90625 L 19.167969 16.984375 C 21.297969 16.894375 23 15.152 23 13 C 23 10.791 21.209 9 19 9 C 16.848 9 15.106578 10.702031 15.017578 12.832031 L 12.09375 17.009766 C 12.06175 17.008766 12.032 17 12 17 C 11.336696 17 10.729087 17.22153 10.232422 17.585938 L 5.0332031 15.357422 C 5.3688686 9.5919516 10.151903 5 16 5 z M 19 10 C 20.657 10 22 11.343 22 13 C 22 14.657 20.657 16 19 16 C 17.343 16 16 14.657 16 13 C 16 11.343 17.343 10 19 10 z M 19 11 A 2 2 0 0 0 19 15 A 2 2 0 0 0 19 11 z M 12 18 C 13.105 18 14 18.895 14 20 C 14 21.105 13.105 22 12 22 C 11.191213 22 10.498775 21.518477 10.183594 20.828125 L 10.966797 21.164062 C 11.158797 21.247062 11.359641 21.287109 11.556641 21.287109 C 12.138641 21.287109 12.6935 20.945953 12.9375 20.376953 C 13.2635 19.615953 12.910438 18.734203 12.148438 18.408203 L 11.419922 18.095703 C 11.604729 18.039385 11.796712 18 12 18 z"/></svg>
                                        </a>
                                    </div>
                                )}
                                {game['social']['instagram'] && (
                                    <div className="w-8 h-8 bg-gray-800 rounded-full flex justify-center items-center">
                                        <a href={game['social']['instagram']['url']} className="hover:text-gray-400">
                                            <svg className="w-5 h-5 fill-current" viewBox="0 0 16 18" fill="none"><g clipPath="url(#clip0)"><path d="M8.004 4.957c-2.272 0-4.104 1.804-4.104 4.04 0 2.235 1.832 4.039 4.104 4.039 2.271 0 4.103-1.804 4.103-4.04 0-2.235-1.832-4.039-4.103-4.039zm0 6.666c-1.468 0-2.668-1.178-2.668-2.627 0-1.448 1.196-2.626 2.668-2.626 1.471 0 2.667 1.178 2.667 2.626 0 1.449-1.2 2.627-2.667 2.627zm5.228-6.831a.948.948 0 01-.957.942.948.948 0 01-.957-.942.95.95 0 01.957-.942.95.95 0 01.957.942zm2.718.956c-.06-1.262-.354-2.38-1.293-3.301-.936-.921-2.071-1.21-3.353-1.273C9.982 1.1 6.02 1.1 4.7 1.174c-1.279.06-2.414.348-3.354 1.27-.939.92-1.228 2.038-1.292 3.3-.075 1.301-.075 5.2 0 6.5.06 1.263.353 2.381 1.292 3.302.94.921 2.072 1.21 3.354 1.273 1.321.074 5.282.074 6.604 0 1.282-.06 2.417-.348 3.353-1.273.936-.921 1.229-2.039 1.293-3.301.075-1.3.075-5.196 0-6.497zm-1.707 7.893a2.68 2.68 0 01-1.522 1.497c-1.053.412-3.553.317-4.717.317-1.165 0-3.668.091-4.718-.317a2.68 2.68 0 01-1.522-1.497c-.418-1.037-.321-3.498-.321-4.645 0-1.146-.093-3.61.321-4.644a2.68 2.68 0 011.522-1.497c1.053-.412 3.553-.317 4.718-.317 1.164 0 3.667-.091 4.717.317.7.274 1.24.805 1.522 1.497.418 1.037.321 3.498.321 4.644 0 1.147.097 3.611-.321 4.645z" /></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h16v18H0z"/></clipPath></defs></svg>
                                        </a>
                                    </div>
                                )}
                                {game['social']['twitter'] && (
                                    <div className="w-8 h-8 bg-gray-800 rounded-full flex justify-center items-center">
                                        <a href={game['social']['twitter']['url']} className="hover:text-gray-400">
                                            <svg className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24 24"><path d="M 2.3671875 3 L 9.4628906 13.140625 L 2.7402344 21 L 5.3808594 21 L 10.644531 14.830078 L 14.960938 21 L 21.871094 21 L 14.449219 10.375 L 20.740234 3 L 18.140625 3 L 13.271484 8.6875 L 9.2988281 3 L 2.3671875 3 z M 6.2070312 5 L 8.2558594 5 L 18.033203 19 L 16.001953 19 L 6.2070312 5 z"></path></svg>
                                        </a>
                                    </div>
                                )}
                                {game['social']['facebook'] && (
                                    <div className="w-8 h-8 bg-gray-800 rounded-full flex justify-center items-center">
                                        <a href={game['social']['facebook']['url']} className="hover:text-gray-400">
                                            <svg className="w-5 h-5 fill-current" viewBox="0 0 14 16" fill="none"><path d="M14 2.5v11a1.5 1.5 0 01-1.5 1.5H9.834V9.463h1.894L12 7.35H9.834V6c0-.612.17-1.028 1.047-1.028H12V3.084A15.044 15.044 0 0010.369 3C8.756 3 7.65 3.984 7.65 5.794v1.56h-1.9v2.112h1.903V15H1.5A1.5 1.5 0 010 13.5v-11A1.5 1.5 0 011.5 1h11A1.5 1.5 0 0114 2.5z" /></svg>
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                        <p className="mt-12">
                            {game['summary'] && game['summary']}
                        </p>
                        <div className="mt-12">
                            {game['videos'] && (
                                <a href={'https://youtube.com/watch/'+ game['videos'][0]['video_id'] } className="inline-flex bg-blue-500 text-white font-semibold px-4 py-4 hover:bg-blue-600 rounded transition ease-in-out duration-150">
                                    <svg className="w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
                                    </svg>
                                    <span className="ml-2">Play Trailer</span>
                                </a>
                            )}
                        </div>
                    </div>
                </div> {/*end game details*/}

                {(game['screenshots'].length > 0) &&
                    <div className="images-container border-b border-gray-800 pb-12 mt-8">
                        <h2 className="text-blue-500 uppercase tracking-wide font-semibold">Screenshots</h2>
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-8">
                            {game['screenshots'] && game['screenshots'].map(screenshot => (
                                <div key={screenshot['id']}>
                                    <a href={screenshot['huge']}>
                                        <img src={screenshot['big']} className="hover:opacity-75 transition ease-in-out duration-150" />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                }
                {/*end images container*/}
                {(game['similar_games'].length > 0) &&
                    <div className="similar-games-container mt-8">
                        <h2 className="text-blue-500 uppercase tracking-wide font-semibold">Similar Games</h2>
                        <div className="similar-games text-sm sm:flex sm:flex-col sm:items-center md:grid md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-6 grid-cols-6 gap-12">
                            {game['similar_games'] && game['similar_games'].map((game)=>(
                                <div key={game['id']} className="game mt-8">
                                    <div className="relative inline-block">
                                        <a href={route('games.show', game['slug'])}>
                                            <img src={game['cover_image_url']} alt="game cover" className="hover:opacity-75 transition ease-in-out duration-150" />
                                        </a>
                                        <div className="absolute bottom-0 right-0 w-16 h-16 bg-gray-800 rounded-full" style={{right: '-20px', bottom: '-20px'}}>
                                            <div className="font-semibold text-xs flex justify-center items-center h-full">{game['rating']}</div>
                                        </div>
                                    </div>
                                    <a href={route('games.show', game['slug'])} className="block text-base font-semibold leading-tight hover:text-gray-400 mt-8">
                                        {game['name']}
                                    </a>
                                    <div className="text-gray-400 mt-1">{game['platforms']}</div>
                                </div>
                            ))}
                        </div>
                        {/*end of similar games*/}
                    </div>
                }
                {/*end similar-games container*/}
            </div>
        </VideoGameLayout>
    )
}
