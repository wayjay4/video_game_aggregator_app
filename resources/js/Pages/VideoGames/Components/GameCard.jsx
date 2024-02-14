import {useEffect} from "react";
import {Link} from "@inertiajs/react";
import ReactMarkdown from 'react-markdown';

export default function GameCard({game, unique_category_type}) {
    useEffect(() => {
        if (game['rating']) {
            showProgressBarCircle(document.getElementById(game['slug'] + unique_category_type), game['rating']);
        }
    }, []);

    return (
        <div className="game mt-8">
            <div className="relative inline-block">
                <Link key={game['slug']} href={route('games.show', game['slug'])}>
                    <img
                        src={game['cover_image_url']}
                        alt="game cover"
                        className="hover:opacity-75 transition ease-in-out duration-150"
                    />

                    {game['rating'] &&
                        <div className="absolute bottom-0 right-0 w-16 h-16 bg-gray-800 rounded-full text-sm"
                             style={{right: '-20px', bottom: '-20px'}}>
                            <div id={game['slug'] + unique_category_type}></div>
                        </div>
                    }
                </Link>
            </div>

            <Link key={game['slug']} href={route('games.show', game['slug'])}>
                <ReactMarkdown
                    children={game['name']}
                    className="block text-base font-semibold leading-tight hover:text-gray-400 mt-8"
                />
            </Link>

            <div className="text-gray-400 mt-1">{game['platforms']}</div>
        </div>
    )
}
