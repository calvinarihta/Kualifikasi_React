import Layout from "../components/layout";
import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../contexts/searchContext";
import { Link } from "react-router-dom";

export default function Home({ pokemon }) {
    var [filteredPokemon, setFilteredPokemon] = useState(pokemon);
    const [value, setValue] = useContext(SearchContext);
    useEffect(() => filterPokemon(), [value]);

    function filterPokemon(): void {
        // Pertama dapetin dlu return dari searchbar dicomponent header
        filteredPokemon = pokemon.filter((item) => {
            // return console.log(item);
            return item.Name.toLowerCase().includes(value.toLowerCase());
        });

        // setFilteredPokemon(pokemon);
    }

    filterPokemon()

    return (
        <Layout title="Home Page">
            <div className="bg-gray-700 min-h-screen">
                <div className="bg-gray-700 p-6">
                    {!filteredPokemon.length ? (
                        <div className="overflow-hidden rounded-lg max-w-screen-lg mx-auto mt-4">
                            <div className="px-4">
                                <div className="w-full bg-white text-center rounded-lg px-4 py-8 mt-2">
                                    <h1 className="text-blue-800 text-base sm:text-2xl font-bold">
                                        No pokemon data found
                                    </h1>
                                    <p className="text-blue-700 text-sm sm:text-base font-medium">
                                        Please try to search with another key, thank you
                                    </p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <ul className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                            {filteredPokemon.map((x) => (
                                <Link key={x.ID} to={`/detail/${x.ID}`}>
                                    <li
                                        key={x.ID}
                                        className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200 cursor-pointer"
                                    >
                                        <div className="flex-1 flex items-center flex-col p-8">
                                            <img
                                                className="object-contain h-32 w-32 bg-black rounded-full"
                                                src={x.Image}
                                            />
                                            <h3 className="mt-2 text-gray-900 text-lg font-medium uppercase">
                                                {x.Name}
                                            </h3>
                                            <div className="flex-grow flex flex-col justify-between">
                                                <div className="mt-3">
                                                    {x.Types.map((x) => (
                                                        <span key={x.slot} className="mx-2">
                                                            {x.type.name == "normal" ? (
                                                                <span className="text-normal-text bg-normal text-sm font-medium rounded-full text-center px-2 pb-1">
                                                                    {x.type.name}
                                                                </span>
                                                            ) : x.type.name == "fighting" ? (
                                                                <span className="text-fighting-text bg-fighting text-sm font-medium rounded-full text-center px-2 pb-1">
                                                                    {x.type.name}
                                                                </span>
                                                            ) : x.type.name == "flying" ? (
                                                                <span className="text-indigo-800 bg-indigo-100 text-sm font-medium rounded-full text-center px-2 pb-1">
                                                                    {x.type.name}
                                                                </span>
                                                            ) : x.type.name == "poison" ? (
                                                                <span className="text-purple-800 bg-purple-100 text-sm font-medium rounded-full text-center px-2 pb-1">
                                                                    {x.type.name}
                                                                </span>
                                                            ) : x.type.name == "ground" ? (
                                                                <span className="text-green-800 bg-green-100 text-sm font-medium rounded-full text-center px-2 pb-1">
                                                                    {x.type.name}
                                                                </span>
                                                            ) : x.type.name == "rock" ? (
                                                                <span className="text-rock-text bg-rock text-sm font-medium rounded-full text-center px-2 pb-1">
                                                                    {x.type.name}
                                                                </span>
                                                            ) : x.type.name == "bug" ? (
                                                                <span className="text-bug-text bg-bug text-sm font-medium rounded-full text-center px-2 pb-1">
                                                                    {x.type.name}
                                                                </span>
                                                            ) : x.type.name == "ghost" ? (
                                                                <span className="text-green-800 bg-green-100 text-sm font-medium rounded-full text-center px-2 pb-1">
                                                                    {x.type.name}
                                                                </span>
                                                            ) : x.type.name == "steel" ? (
                                                                <span className="text-green-800 bg-green-100 text-sm font-medium rounded-full text-center px-2 pb-1">
                                                                    {x.type.name}
                                                                </span>
                                                            ) : x.type.name == "fire" ? (
                                                                <span className="text-red-800 bg-red-100 text-sm font-medium rounded-full text-center px-2 pb-1">
                                                                    {x.type.name}
                                                                </span>
                                                            ) : x.type.name == "water" ? (
                                                                <span className="text-blue-800 bg-blue-100 text-sm font-medium rounded-full text-center px-2 pb-1">
                                                                    {x.type.name}
                                                                </span>
                                                            ) : x.type.name == "grass" ? (
                                                                <span className="text-green-800 bg-green-100 text-sm font-medium rounded-full text-center px-2 pb-1">
                                                                    {x.type.name}
                                                                </span>
                                                            ) : x.type.name == "electric" ? (
                                                                <span className="text-yellow-800 bg-yellow-100 text-sm font-medium rounded-full text-center px-2 pb-1">
                                                                    {x.type.name}
                                                                </span>
                                                            ) : x.type.name == "psychic" ? (
                                                                <span className="text-pink-800 bg-pink-100 text-sm font-medium rounded-full text-center px-2 pb-1">
                                                                    {x.type.name}
                                                                </span>
                                                            ) : x.type.name == "ice" ? (
                                                                <span className="text-green-800 bg-green-100 text-sm font-medium rounded-full text-center px-2 pb-1">
                                                                    {x.type.name}
                                                                </span>
                                                            ) : x.type.name == "dragon" ? (
                                                                <span className="text-green-800 bg-green-100 text-sm font-medium rounded-full text-center px-2 pb-1">
                                                                    {x.type.name}
                                                                </span>
                                                            ) : x.type.name == "dark" ? (
                                                                <span className="text-gray-800 bg-gray-100 text-sm font-medium rounded-full text-center px-2 pb-1">
                                                                    {x.type.name}
                                                                </span>
                                                            ) : x.type.name == "fairy" ? (
                                                                <span className="text-green-800 bg-green-100 text-sm font-medium rounded-full text-center px-2 pb-1">
                                                                    {x.type.name}
                                                                </span>
                                                            ) : x.type.name == "unknown" ? (
                                                                <span className="text-green-800 bg-green-100 text-sm font-medium rounded-full text-center px-2 pb-1">
                                                                    {x.type.name}
                                                                </span>
                                                            ) : (
                                                                <span className="text-green-800 bg-green-100 text-sm font-medium rounded-full text-center px-2 pb-1">
                                                                    {x.type.name}
                                                                </span>
                                                            )}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </Link>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </Layout>
    );
}
