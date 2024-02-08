import {useMemo, useState} from "react";
import debounce from "lodash.debounce";
import axios from "axios";
import {Link} from "@inertiajs/react";
import ReactMarkdown from "react-markdown";

function Search() {
    const [filter, setQuery] = useState('');
    const [games, setGames] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const handleFilterChange = (event) => {
        const filter = event.target.value;
        const base_url = event.target.getAttribute('data-route');
        setQuery(filter);
        setIsLoading(true);

        axios({
            method: 'get',
            baseURL: `${base_url}?filter=${filter}`,
            responseType: 'json',
        }).then((response) => {
            setGames(response.data.result);
            setIsLoading(false);
        })
    };

    const debounceChangeHandler = useMemo(
        () => debounce(handleFilterChange, 300),
        [filter]
    );

    const handleOnBlur = (event) => {
        setIsVisible(false);
    };

    const handleOnFocus = (event) => {
        setIsVisible(true);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Escape') {
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }
    };

    return (
        <div className="relative" onFocus={handleOnFocus} onKeyDown={handleKeyPress}>
            <input type="text"
                   name="search_filter"
                   id="search_filter"
                   className="bg-gray-800 text-sm rounded-full focus:outline-none focus:shadow-outline w-64 px-3 py-1 pl-8"
                   placeholder="Search..."
                   data-route={route('games.filter')}
                   onChange={debounceChangeHandler}
            />
            <div className="absolute top-0 flex items-center h-full ml-2">
                <svg className="fill-current text-gray-400 w-4" xmlns="http://www.w3.org/2000/svg" fill="none"
                     viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/>
                </svg>
            </div>

            {isLoading && (
                <div role="status" className="spinner top-0 right-0 mt-1.5 mr-4" style={{position: 'absolute'}}>
                    <svg aria-hidden="true"
                         className="w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                         viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"/>
                        <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"/>
                    </svg>
                    <span className="sr-only">Loading...</span>
                </div>

            )}

            <div className="absolute z-50 bg-gray-800 text-xs rounded w-64 mt-2">
                {(games.length > 0 && !isLoading && isVisible) && (
                    <ul>
                        {games.map((game) => {
                            return (
                                <li key={game['id']} className="border-b border-gray-700" onClick={handleOnFocus}>
                                    <Link
                                        href={route('games.show', [game['slug']])}
                                        className="px-3 py-3 hover:bg-gray-700 flex items-center transition ease-in-out duration-150"
                                    >
                                        <img src={game['cover_image_url']} alt="game cover" className="w-10"/>
                                        <ReactMarkdown children={game['name']} className="ml-4"/>
                                    </Link>
                                </li>
                            )
                        })
                        }
                    </ul>
                )}
                {(games.length < 1 && filter !== '' && !isLoading) && (
                    <div className="border-b border-gray-700 text-center py-3">No results for '{filter}'</div>
                )}
            </div>
        </div>
    )
}

export default Search;
