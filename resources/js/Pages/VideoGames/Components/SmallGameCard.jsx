import {Link} from "@inertiajs/react";
import ReactMarkdown from "react-markdown";

function SmallGameCard({game}) {
    return (
        <div className="game flex">
            <Link href={route('games.show', game['slug'])}>
                <img
                    src={game['cover_image_url'] ? game['cover_image_url'] : 'no_image_found.jpg'}
                    alt={game['cover_image_url'] ? 'game cover' : 'no image'}
                    className="w-16 hover:opacity-75 transition ease-in-out duration-150"
                />
            </Link>
            <div className="ml-4">
                <Link href={route('games.show', game['slug'])}>
                    <ReactMarkdown children={game['name']} className="hover:text-gray-300"/>
                </Link>
                <div className="text-gray-400 text-sm mt-1">{game['release_date']}</div>
            </div>
        </div>
    )
}

export default SmallGameCard;
