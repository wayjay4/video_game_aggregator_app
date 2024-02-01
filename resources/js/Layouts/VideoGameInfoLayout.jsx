import {Head} from "@inertiajs/react";

export default function VideoGameInfoLayout({ children }) {
    return (
        <>
            <Head title="Laravel Video Games" />

            <header className="border-b border-gray-800">
                <nav className="container mx-auto flex items-center justify-between px-4 py-6">
                    <div className="flex items-center">
                        <a href="/"><img src="/assets/images/laracasts-logo.svg" alt="laracasts" className="w-32 flex-none" /></a>
                        <ul className="flex ml-16 space-x-8">
                            <li><a href="#" className="hover:text-gray-400">Games</a></li>
                            <li><a href="#" className="hover:text-gray-400">Review</a></li>
                            <li><a href="#" className="hover:text-gray-400">Coming Soon</a></li>
                        </ul>
                    </div>
                    <div className="flex items-center">
                        <div className="relative">
                            <input type="text" className="bg-gray-800 text-sm rounded-full focus:outline-none focus:shadow-outline w-64 px-3 py-1 pl-8" placeholder="Search..." />
                            <div className="absolute top-0 flex items-center h-full ml-2">
                                <svg className="fill-current text-gray-400 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>
                            </div>
                        </div>
                        <div className="ml-6">
                            <a href="#"><img src="/assets/images/avatar.jpg" alt="avatar" className="rounded-full w-8" /></a>
                        </div>
                    </div>
                </nav>
            </header>

            <main className="py-8">
                {children}
            </main>

            <footer className="border-t border-gray-800">
                <div className="container mx-auto px-4 py-6">
                    Powered By <a href="https://api-docs.igdb.com/#getting-started" className="underline hover:text-gray-400">IGDB API</a>
                </div>
            </footer>
        </>
    )
}
