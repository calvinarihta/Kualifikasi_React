import { useParams } from "react-router-dom";
import Layout from "../components/layout";
import { Fragment, useState, useEffect } from "react";
import { StarIcon as StarIconOutline } from "@heroicons/react/outline";
import { StarIcon as StarIconSolid } from "@heroicons/react/solid";

export default function Detail({ pokemon }) {
    let { id } = useParams();

    pokemon = pokemon.filter((item) => {
        return item.ID == id;
    });
    const pokemonDetail = pokemon[0];

    const checkLocalStorage = localStorage.getItem(pokemonDetail.ID);
    if (!checkLocalStorage) {
        localStorage.setItem(pokemonDetail.ID, "No");
    }
    const [isFav, setIsFav] = useState(localStorage.getItem(pokemonDetail.ID));
    function toggleFav() {
        if (isFav == "Yes") setIsFav("No");
        else setIsFav("Yes");
    }

    useEffect(() => {
        localStorage.setItem(pokemonDetail.ID, isFav);
    }, [isFav]);

    return (
        <Layout title={pokemonDetail.Name + " detail page"}>
            <div className="h-full flex bg-gray-700">
                <div className="flex-1 focus:outline-none">
                    <main className="flex-1 relative pb-8 z-0">
                        {/* Page header */}
                        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex flex-col py-4 w-full">
                                <div className="bg-white shadow max-w rounded-lg">
                                    <div className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
                                        <div className="py-6 md:flex md:items-center md:justify-between lg:border-t lg:border-gray-200">
                                            <div className="flex-1 min-w-0">
                                                {/* Profile */}
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center">
                                                        <img
                                                            className="hidden h-40 w-40 p-4 rounded-full bg-black sm:block"
                                                            src={pokemonDetail.Image}
                                                        />
                                                        <div className="flex items-center">
                                                            <img
                                                                className="h-25 w-25 rounded-full bg-black sm:hidden"
                                                                src={pokemonDetail.Image}
                                                            />
                                                            <div className="ml-3 flex flex-col justify-between items-center">
                                                                <div className="sm:text-2xl text-lg font-bold leading-7 text-gray-900 sm:leading-9 uppercase text-center">
                                                                    {pokemonDetail.Name}
                                                                </div>
                                                                <div className="flex-grow flex flex-col justify-between items-center text-center">
                                                                    <div>
                                                                        {pokemonDetail.Types.map((x) => (
                                                                            <span key={x.slot} className="mx-2">
                                                                                {x.type.name == "normal" ? (
                                                                                    <span className="text-normal-text bg-normal sm:text-lg text-sm font-medium rounded-full text-center px-2 pb-1">
                                                                                        {x.type.name}
                                                                                    </span>
                                                                                ) : x.type.name == "fighting" ? (
                                                                                    <span className="text-fighting-text bg-fighting sm:text-lg text-sm font-medium rounded-full text-center px-2 pb-1">
                                                                                        {x.type.name}
                                                                                    </span>
                                                                                ) : x.type.name == "flying" ? (
                                                                                    <span className="text-indigo-800 bg-indigo-100 sm:text-lg text-sm font-medium rounded-full text-center px-2 pb-1">
                                                                                        {x.type.name}
                                                                                    </span>
                                                                                ) : x.type.name == "poison" ? (
                                                                                    <span className="text-purple-800 bg-purple-100 sm:text-lg text-sm font-medium rounded-full text-center px-2 pb-1">
                                                                                        {x.type.name}
                                                                                    </span>
                                                                                ) : x.type.name == "ground" ? (
                                                                                    <span className="text-green-800 bg-green-100 sm:text-lg text-sm font-medium rounded-full text-center px-2 pb-1">
                                                                                        {x.type.name}
                                                                                    </span>
                                                                                ) : x.type.name == "rock" ? (
                                                                                    <span className="text-rock-text bg-rock sm:text-lg text-sm font-medium rounded-full text-center px-2 pb-1">
                                                                                        {x.type.name}
                                                                                    </span>
                                                                                ) : x.type.name == "bug" ? (
                                                                                    <span className="text-bug-text bg-bug sm:text-lg text-sm font-medium rounded-full text-center px-2 pb-1">
                                                                                        {x.type.name}
                                                                                    </span>
                                                                                ) : x.type.name == "ghost" ? (
                                                                                    <span className="text-green-800 bg-green-100 sm:text-lg text-sm font-medium rounded-full text-center px-2 pb-1">
                                                                                        {x.type.name}
                                                                                    </span>
                                                                                ) : x.type.name == "steel" ? (
                                                                                    <span className="text-green-800 bg-green-100 sm:text-lg text-sm font-medium rounded-full text-center px-2 pb-1">
                                                                                        {x.type.name}
                                                                                    </span>
                                                                                ) : x.type.name == "fire" ? (
                                                                                    <span className="text-red-800 bg-red-100 sm:text-lg text-sm font-medium rounded-full text-center px-2 pb-1">
                                                                                        {x.type.name}
                                                                                    </span>
                                                                                ) : x.type.name == "water" ? (
                                                                                    <span className="text-blue-800 bg-blue-100 sm:text-lg text-sm font-medium rounded-full text-center px-2 pb-1">
                                                                                        {x.type.name}
                                                                                    </span>
                                                                                ) : x.type.name == "grass" ? (
                                                                                    <span className="text-green-800 bg-green-100 sm:text-lg text-sm font-medium rounded-full text-center px-2 pb-1">
                                                                                        {x.type.name}
                                                                                    </span>
                                                                                ) : x.type.name == "electric" ? (
                                                                                    <span className="text-yellow-800 bg-yellow-100 sm:text-lg text-sm font-medium rounded-full text-center px-2 pb-1">
                                                                                        {x.type.name}
                                                                                    </span>
                                                                                ) : x.type.name == "psychic" ? (
                                                                                    <span className="text-pink-800 bg-pink-100 sm:text-lg text-sm font-medium rounded-full text-center px-2 pb-1">
                                                                                        {x.type.name}
                                                                                    </span>
                                                                                ) : x.type.name == "ice" ? (
                                                                                    <span className="text-green-800 bg-green-100 sm:text-lg text-sm font-medium rounded-full text-center px-2 pb-1">
                                                                                        {x.type.name}
                                                                                    </span>
                                                                                ) : x.type.name == "dragon" ? (
                                                                                    <span className="text-green-800 bg-green-100 sm:text-lg text-sm font-medium rounded-full text-center px-2 pb-1">
                                                                                        {x.type.name}
                                                                                    </span>
                                                                                ) : x.type.name == "dark" ? (
                                                                                    <span className="text-gray-800 bg-gray-100 sm:text-lg text-sm font-medium rounded-full text-center px-2 pb-1">
                                                                                        {x.type.name}
                                                                                    </span>
                                                                                ) : x.type.name == "fairy" ? (
                                                                                    <span className="text-green-800 bg-green-100 sm:text-lg text-sm font-medium rounded-full text-center px-2 pb-1">
                                                                                        {x.type.name}
                                                                                    </span>
                                                                                ) : x.type.name == "unknown" ? (
                                                                                    <span className="text-green-800 bg-green-100 sm:text-lg text-sm font-medium rounded-full text-center px-2 pb-1">
                                                                                        {x.type.name}
                                                                                    </span>
                                                                                ) : (
                                                                                    <span className="text-green-800 bg-green-100 sm:text-lg text-sm font-medium rounded-full text-center px-2 pb-1">
                                                                                        {x.type.name}
                                                                                    </span>
                                                                                )}
                                                                            </span>
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                                <div className="block sm:hidden mt-2">
                                                                    {isFav == "No" ? (
                                                                        <button
                                                                            type="button"
                                                                            className="inline-flex items-center p-1 border border-transparent shadow-sm text-xs font-medium rounded-md text-white bg-gray-500 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700"
                                                                            onClick={() => toggleFav()}
                                                                        >
                                                                            <StarIconOutline
                                                                                className="-ml-1 mr-2 h-5 w-5"
                                                                                aria-hidden="true"
                                                                            />
                                                                            Add to Favourite
                                                                        </button>
                                                                    ) : (
                                                                        <button
                                                                            type="button"
                                                                            className="inline-flex items-center p-1 border border-transparent shadow-sm text-xs font-medium rounded-md text-white bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                                                                            onClick={() => toggleFav()}
                                                                        >
                                                                            <StarIconSolid
                                                                                className="-ml-1 mr-2 h-5 w-5"
                                                                                aria-hidden="true"
                                                                            />
                                                                            Remove from Favourite
                                                                        </button>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="hidden sm:block">
                                                        {isFav == "No" ? (
                                                            <button
                                                                type="button"
                                                                className="inline-flex items-center px-2 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-500 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700"
                                                                onClick={() => toggleFav()}
                                                            >
                                                                <StarIconOutline
                                                                    className="-ml-1 mr-2 h-5 w-5"
                                                                    aria-hidden="true"
                                                                />
                                                                Add to Favourite
                                                            </button>
                                                        ) : (
                                                            <button
                                                                type="button"
                                                                className="inline-flex items-center px-2 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                                                                onClick={() => toggleFav()}
                                                            >
                                                                <StarIconSolid
                                                                    className="-ml-1 mr-2 h-5 w-5"
                                                                    aria-hidden="true"
                                                                />
                                                                Remove from Favourite
                                                            </button>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                                <h2 className="text-lg leading-6 font-medium text-white">Overview</h2>
                                <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                                    {pokemonDetail.Abilities.map((x, idx) => (
                                        <div key={"Ability " + idx} className="bg-white shadow rounded-lg">
                                            <div className="flex items-center py-2">
                                                <div className="w-0 flex-1">
                                                    <dl>
                                                        <dt className="text-md font-medium text-gray-900 text-center">
                                                            {"Ability " + (idx + 1)}
                                                        </dt>
                                                        <dd>
                                                            <div className="text-md font-medium text-gray-500 uppercase text-center">
                                                                {x.ability.name}
                                                            </div>
                                                        </dd>
                                                    </dl>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <h2 className="max-w-6xl mx-auto mt-8 px-4 text-lg leading-6 font-medium text-white sm:px-6 lg:px-8">
                                Recent activity
                            </h2>
                            <div className="block">
                                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                                    <div className="flex flex-col mt-2 rounded-lg">
                                        <div className="align-middle min-w-full rounded-lg shadow overflow-hidden border-b border-gray-200">
                                            <table className="min-w-full divide-y divide-gray-200">
                                                <thead className="bg-gray-200">
                                                    <tr>
                                                        <th className="sm:px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                            Pokemon ID
                                                        </th>
                                                        <th className="sm:px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                            Base EXP
                                                        </th>
                                                        <th className="sm:px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                            Height
                                                        </th>
                                                        <th className="sm:px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                            Weight
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody className="bg-white divide-y divide-gray-200">
                                                    <tr className="bg-white">
                                                        <td className="sm:px-6 py-4 text-center whitespace-nowrap text-sm text-gray-500 ">
                                                            {pokemonDetail.ID}
                                                        </td>
                                                        <td className="sm:px-6 py-4 text-center whitespace-nowrap text-sm text-gray-500 ">
                                                            {pokemonDetail.BaseExperience}
                                                        </td>
                                                        <td className="sm:px-6 py-4 text-center whitespace-nowrap text-sm text-gray-500 ">
                                                            {pokemonDetail.Height}
                                                        </td>
                                                        <td className="sm:px-6 py-4 text-center whitespace-nowrap text-sm text-gray-500 ">
                                                            {pokemonDetail.Weight}
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <h2 className="max-w-6xl mx-auto mt-8 px-4 text-lg leading-6 font-medium text-white sm:px-6 lg:px-8">
                                Move List
                            </h2>
                            <div className="block">
                                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                                    <div className="flex flex-col mt-2">
                                        <div className="align-middle min-w-full rounded-lg shadow overflow-hidden border-b border-gray-200">
                                            <table className="min-w-full divide-y divide-gray-200">
                                                <thead className="bg-gray-200">
                                                    <tr>
                                                        <th className="sm:px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                            Move name
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody className="bg-white divide-y divide-gray-200">
                                                    {pokemonDetail.Moves.map((x, idx) => (
                                                        <tr key={"moveKey " + idx}>
                                                            <td className="sm:px-6 py-4 text-center whitespace-nowrap text-xs text-gray-500 uppercase">
                                                                {x.move.name}
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </Layout>
    );
}
