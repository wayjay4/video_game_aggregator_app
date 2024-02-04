import {useMemo, useState} from "react";
import debounce from "lodash.debounce";
import axios from "axios";

function Search() {
    const [filter, setQuery] = useState('');
    const [games, setGames] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

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

    return (
        <div className="relative">
            <input type="text"
                   name="search_filter"
                   id="search_filter"
                   className="bg-gray-800 text-sm rounded-full focus:outline-none focus:shadow-outline w-64 px-3 py-1 pl-8"
                   placeholder="Search..."
                   data-route={route('games.filter')}
                   onChange={debounceChangeHandler}
            />
            <div className="absolute top-0 flex items-center h-full ml-2">
                <svg className="fill-current text-gray-400 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </div>
            <div className="absolute z-50 bg-gray-800 text-xs rounded w-64 mt-2">
                <ul>
                    {(games.length > 0 && !isLoading) && games.map((game)=>{
                        return (
                            <li key={game['id']} className="border-b border-gray-700">
                                <a href={route('games.show', [game['slug']])} className="px-3 py-3 hover:bg-gray-700 flex items-center transition ease-in-out duration-150">
                                    <img src={game['cover_image_url']} alt="game cover" className="w-10" />
                                    <span className="ml-4">{game['name']}</span>
                                </a>
                            </li>
                        )
                        })
                    }
                    {(games.length < 1 && filter !== '' && !isLoading) && (
                        <li className="border-b border-gray-700 text-center">No results for '{filter}'</li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Search;
