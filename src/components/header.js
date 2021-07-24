import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { SearchIcon } from "@heroicons/react/solid";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../contexts/searchContext";
import { Link } from "react-router-dom";

export default function Header() {
    const [value, setValue] = useContext(SearchContext);

    function checkAnswer(event, value) {
        setValue(value);
    }

    return (
        <>
            <Disclosure as="nav" className="bg-gray-800">
                {({ open }) => (
                    <>
                        <div className="max-w-auto mx-auto px-2 sm:px-4 lg:px-8">
                            <div className="relative flex items-center justify-between h-16">
                                <div className="flex items-center px-1 lg:px-0">
                                    <a href="/" className="cursor-pointer flex items-center">
                                        <div className="flex-shrink-0">
                                            <img
                                                className="block lg:hidden h-12 w-auto"
                                                src="/assets/poke_logo_512x512.png"
                                                alt="Image not found"
                                            />
                                            <img
                                                className="hidden lg:block h-16 w-auto"
                                                src="/assets/poke_logo_512x512.png"
                                                alt="Image not found"
                                            />
                                        </div>

                                        <div className="text-white px-1 py-2 text-lg lg:text-2xl font-medium">
                                            Pokedèx
                                        </div>
                                    </a>
                                    <div className="hidden lg:block lg:ml-6">
                                        <div className="flex space-x-4">
                                            <a
                                                href="/"
                                                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                            >
                                                Home
                                            </a>
                                            <a
                                                href="/favourite"
                                                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                            >
                                                Favourite
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1 flex justify-center px-2 lg:mr-6 lg:justify-end">
                                    <div className="max-w-lg w-full lg:max-w-xl">
                                        <label htmlFor="search" className="sr-only">
                                            Search
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                            </div>
                                            <input
                                                id="search"
                                                name="search"
                                                className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-gray-700 text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-white focus:ring-white focus:text-gray-900 sm:text-sm"
                                                placeholder="Search"
                                                type="text"
                                                onChange={(e) => {
                                                    setValue(e.currentTarget.value);
                                                }}
                                                onKeyUp={(event) => {
                                                    checkAnswer(event, value);
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex lg:hidden">
                                    {/* Mobile menu button */}
                                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel className="lg:hidden">
                            <div className="px-2 pt-2 pb-3 space-y-1">
                                <a
                                    href="/"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Home
                                </a>
                                <a
                                    href="/favourite"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Favourite
                                </a>
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </>
    );
}
