import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gray-800 text-white">
            <div className="container">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <h1 className="text-2xl font-bold">Task Manager</h1>
                    </div>
                    <div className="hidden md:flex space-x-4">
                        <a href="#home" className="hover:bg-gray-700 px-3 py-2 rounded font-semibold">
                            Home
                        </a>
                        <a href="#home" className="hover:bg-gray-700 px-3 py-2 rounded font-semibold">
                            Home
                        </a>
                        <a href="#home" className="hover:bg-gray-700 px-3 py-2 rounded font-semibold">
                            Home
                        </a>
                        <a href="#home" className="hover:bg-gray-700 px-3 py-2 rounded font-semibold">
                            Home
                        </a>
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="focus:outline-none text-gray-300 hover:text-white"
                        >
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                {isOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-gray-800">
                    <a href="#home" className="block px-4 py-2 hover:bg-gray-700">
                        Home
                    </a>
                    <a href="#home" className="block px-4 py-2 hover:bg-gray-700">
                        Home
                    </a>
                    <a href="#home" className="block px-4 py-2 hover:bg-gray-700">
                        Home
                    </a>
                    <a href="#home" className="block px-4 py-2 hover:bg-gray-700">
                        Home
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
