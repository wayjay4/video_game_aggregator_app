import {Head, Link} from "@inertiajs/react";
import Search from "@/Layouts/Search.jsx";

export default function VideoGameLayout({children}) {
    return (
        <>
            <Head title="Laravel Video Games"/>

            <header className="border-b border-gray-800">
                <nav
                    className="container mx-auto flex flex-col space-y-6 lg:space-y-0 lg:flex-row items-center justify-between px-4 py-6">
                    <div className="flex flex-col space-y-6 lg:space-y-0 lg:flex-row items-center">
                        <a href="#">
                            <img
                                src="/assets/images/laracasts-logo.svg" alt="laracasts"
                                className="w-32 flex-none" hidden
                            />
                        </a>
                        <ul className="flex ml-0 lg:ml-16 space-x-8">
                            <li>
                                <Link href={route('games.index')} className="hover:text-gray-400">
                                    Games
                                </Link>
                            </li>
                            <li><a href="#reviews" className="hover:text-gray-400">Review</a></li>
                            <li><a href="#coming_soon" className="hover:text-gray-400">Coming Soon</a></li>
                        </ul>
                    </div>
                    <div className="flex items-center">
                        <Search/>
                        <div className="ml-6">
                            <a href="#"><img src="/assets/images/avatar.jpg" alt="avatar" className="rounded-full w-8"/></a>
                        </div>
                    </div>
                </nav>
            </header>

            <main className="py-8">
                {children}
            </main>

            <footer className="border-t border-gray-800">
                <div className="container mx-auto px-4 py-6">
                    Powered By <a href="https://api-docs.igdb.com/#getting-started"
                                  className="underline hover:text-gray-400">IGDB API</a>
                </div>
            </footer>
        </>
    )
}
