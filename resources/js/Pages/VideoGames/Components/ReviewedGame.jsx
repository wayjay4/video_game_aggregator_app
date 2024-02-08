import {Link} from "@inertiajs/react";
import ReactMarkdown from "react-markdown";
import {useEffect} from "react";

export default function ReviewedGame({game, unique_category_type}) {
    useEffect(() => {
        if (game['rating']) {
            showProgressBarCircle(document.getElementById(game['slug'] + unique_category_type), game['rating']);
        }
    }, []);

    return (
        <div className="game bg-gray-800 rounded-lg shadow-md flex px-6 py-6">
            <div className="flex-none">
                <Link href={route('games.show', game['slug'])}>
                    <div className="relative mb-5">
                        <img
                            src={game['cover_image_url'] ? game['cover_image_url'] : 'no_image_found.jpg'}
                            alt={game['cover_image_url'] ? 'game cover' : 'no image'}
                            className="w-48 h-auto hover:opacity-75 transition ease-in-out duration-150"
                        />

                        {game['rating'] &&
                            <div className="absolute bottom-0 right-0 w-16 h-16 bg-gray-800 rounded-full text-sm"
                                 style={{right: '-20px', bottom: '-20px'}}>
                                <div id={game['slug'] + unique_category_type}></div>
                            </div>
                        }
                    </div>
                </Link>
            </div>
            <div className="ml-12">
                <Link href={route('games.show', game['slug'])}>
                    <ReactMarkdown
                        children={game['name']}
                        className="block text-lg font-semibold leading-tight hover:text-gray-400 mt-4"
                    />
                </Link>

                <div className="text-gray-400 mt-1">
                    {game['platforms'] && game['platforms']}
                </div>
                <div className="text-gray-400 mt-6 hidden md:block">
                    {game['summary'] && game['summary']}
                </div>
            </div>
        </div>
    )
}
