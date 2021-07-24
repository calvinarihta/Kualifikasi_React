import Layout from "../components/layout";
import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../contexts/searchContext";
import axios from "axios";
import { StarIcon as StarIconSolid } from "@heroicons/react/solid";
import Image from "next/image";

export default function Home({ pokemon }) {
    var [filteredPokemon, setFilteredPokemon] = useState(pokemon);
    const [value, setValue] = useContext(SearchContext);
    const [state, setstate] = useState("");
    useEffect(() => filterPokemon(), [value, setstate]);

    function filterPokemon(): void {
        filteredPokemon = pokemon.filter((item, idx) => {
            if (typeof window !== "undefined") {
                if (!localStorage.getItem(idx + 1)) {
                    localStorage.setItem(idx + 1, "No");
                }
                return localStorage.getItem(idx + 1) == "Yes";
            } else {
                return null;
            }
        });

        filteredPokemon = filteredPokemon.filter((item) => {
            return item.Name.toLowerCase().includes(value.toLowerCase());
        });
    }

    filterPokemon();

    function toggleFav(ID) {
        if (typeof window !== "undefined") {
            localStorage.setItem(ID, "No");
            setstate(ID);
        }
    }

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
                        <ul className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                            {filteredPokemon.map((x) => (
                                <li
                                    key={x.ID}
                                    className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
                                >
                                    <div className="flex-1 flex items-center flex-col">
                                        <img
                                            className="object-cover h-auto w-full bg-black rounded-t-lg"
                                            src={x.Image}
                                        />
                                        <h3 className="mt-2 text-gray-900 text-sm lg:text-lg font-medium uppercase">
                                            {x.Name}
                                        </h3>
                                        <div className="flex-grow flex flex-col justify-between p-2">
                                            <div>
                                                {x.Types.map((x) => (
                                                    <span key={x.slot} className="mx-1">
                                                        {x.type.name == "normal" ? (
                                                            <span className="text-normal-text bg-normal text-xs lg:text-sm font-medium rounded-full text-center px-2 pb-1">
                                                                {x.type.name}
                                                            </span>
                                                        ) : x.type.name == "fighting" ? (
                                                            <span className="text-fighting-text bg-fighting text-xs lg:text-sm font-medium rounded-full text-center px-2 pb-1">
                                                                {x.type.name}
                                                            </span>
                                                        ) : x.type.name == "flying" ? (
                                                            <span className="text-indigo-800 bg-indigo-100 text-xs lg:text-sm font-medium rounded-full text-center px-2 pb-1">
                                                                {x.type.name}
                                                            </span>
                                                        ) : x.type.name == "poison" ? (
                                                            <span className="text-purple-800 bg-purple-100 text-xs lg:text-sm font-medium rounded-full text-center px-2 pb-1">
                                                                {x.type.name}
                                                            </span>
                                                        ) : x.type.name == "ground" ? (
                                                            <span className="text-green-800 bg-green-100 text-xs lg:text-sm font-medium rounded-full text-center px-2 pb-1">
                                                                {x.type.name}
                                                            </span>
                                                        ) : x.type.name == "rock" ? (
                                                            <span className="text-rock-text bg-rock text-xs lg:text-sm font-medium rounded-full text-center px-2 pb-1">
                                                                {x.type.name}
                                                            </span>
                                                        ) : x.type.name == "bug" ? (
                                                            <span className="text-bug-text bg-bug text-xs lg:text-sm font-medium rounded-full text-center px-2 pb-1">
                                                                {x.type.name}
                                                            </span>
                                                        ) : x.type.name == "ghost" ? (
                                                            <span className="text-green-800 bg-green-100 text-xs lg:text-sm font-medium rounded-full text-center px-2 pb-1">
                                                                {x.type.name}
                                                            </span>
                                                        ) : x.type.name == "steel" ? (
                                                            <span className="text-green-800 bg-green-100 text-xs lg:text-sm font-medium rounded-full text-center px-2 pb-1">
                                                                {x.type.name}
                                                            </span>
                                                        ) : x.type.name == "fire" ? (
                                                            <span className="text-red-800 bg-red-100 text-xs lg:text-sm font-medium rounded-full text-center px-2 pb-1">
                                                                {x.type.name}
                                                            </span>
                                                        ) : x.type.name == "water" ? (
                                                            <span className="text-blue-800 bg-blue-100 text-xs lg:text-sm font-medium rounded-full text-center px-2 pb-1">
                                                                {x.type.name}
                                                            </span>
                                                        ) : x.type.name == "grass" ? (
                                                            <span className="text-green-800 bg-green-100 text-xs lg:text-sm font-medium rounded-full text-center px-2 pb-1">
                                                                {x.type.name}
                                                            </span>
                                                        ) : x.type.name == "electric" ? (
                                                            <span className="text-yellow-800 bg-yellow-100 text-xs lg:text-sm font-medium rounded-full text-center px-2 pb-1">
                                                                {x.type.name}
                                                            </span>
                                                        ) : x.type.name == "psychic" ? (
                                                            <span className="text-pink-800 bg-pink-100 text-xs lg:text-sm font-medium rounded-full text-center px-2 pb-1">
                                                                {x.type.name}
                                                            </span>
                                                        ) : x.type.name == "ice" ? (
                                                            <span className="text-green-800 bg-green-100 text-xs lg:text-sm font-medium rounded-full text-center px-2 pb-1">
                                                                {x.type.name}
                                                            </span>
                                                        ) : x.type.name == "dragon" ? (
                                                            <span className="text-green-800 bg-green-100 text-xs lg:text-sm font-medium rounded-full text-center px-2 pb-1">
                                                                {x.type.name}
                                                            </span>
                                                        ) : x.type.name == "dark" ? (
                                                            <span className="text-gray-800 bg-gray-100 text-xs lg:text-sm font-medium rounded-full text-center px-2 pb-1">
                                                                {x.type.name}
                                                            </span>
                                                        ) : x.type.name == "fairy" ? (
                                                            <span className="text-green-800 bg-green-100 text-xs lg:text-sm font-medium rounded-full text-center px-2 pb-1">
                                                                {x.type.name}
                                                            </span>
                                                        ) : x.type.name == "unknown" ? (
                                                            <span className="text-green-800 bg-green-100 text-xs lg:text-sm font-medium rounded-full text-center px-2 pb-1">
                                                                {x.type.name}
                                                            </span>
                                                        ) : (
                                                            <span className="text-green-800 bg-green-100 text-xs lg:text-sm font-medium rounded-full text-center px-2 pb-1">
                                                                {x.type.name}
                                                            </span>
                                                        )}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <button
                                            type="button"
                                            className="inline-flex items-center p-1 m-2 border border-transparent shadow-sm text-xs font-medium rounded-md text-white bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                                            onClick={() => toggleFav(x.ID)}
                                        >
                                            <StarIconSolid className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                                            Remove from Favourite
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </Layout>
    );
}

export async function getServerSideProps() {
    const urlAllPokemon = "https://pokeapi.co/api/v2/pokemon?limit=1118&offset=0";
    const first500Pokemon = "https://pokeapi.co/api/v2/pokemon?limit=300&offset=0";
    const pokemonData = await axios.get("https://pokeapi.co/api/v2/pokemon/").then((res) => res.data);

    // Isi dari pokemonData.results itu nama pokemon dan url detail dari pokemonnya
    // console.log(pokemonData)

    // Lemotnya waktu mau ambil pokemonDetail, sampe akhirnya timeout, dibatesin dari api
    // https://pokeapi.co/api/v2/pokemon?limit=50&offset=0, 50 pokemon pun tetep lemot
    // di lighthouse sampe dapet nilai 20

    const pokemonDetail: any = await Promise.all(
        pokemonData.results.map((x) => axios.get(x.url).then((res) => res.data))
    );

    interface pokemons {
        ID?: number;
        Name?: string;
        Image?: string;
        Types?: string[];
        Abilities?: string[];
        BaseExperience?: number;
        Height?: number;
        Moves?: string[];
        Weight?: number;
    }

    function createPokemon(x: pokemons): {
        ID?: number;
        Name?: string;
        Image?: string;
        Types?: string[];
        Abilities?: string[];
        BaseExperience?: number;
        Height?: number;
        Moves?: string[];
        Weight?: number;
    } {
        let newItem = {
            ID: x.ID,
            Name: x.Name,
            Image: x.Image,
            Types: x.Types,
            Abilities: x.Abilities,
            BaseExperience: x.BaseExperience,
            Height: x.Height,
            Moves: x.Moves,
            Weight: x.Weight,
        };
        if (x.ID) {
            return newItem;
        } else {
            return null;
        }
    }

    let pokemon = [];
    for (let i = 0; i < pokemonData.results.length; i++) {
        let ID = pokemonDetail[i].id;
        let Name = pokemonDetail[i].name;
        let Image = pokemonDetail[i].sprites.front_default;
        let Types = [];
        for (let j = 0; j < pokemonDetail[i].types.length; j++) {
            Types[j] = pokemonDetail[i].types[j];
        }
        let Abilities = [];
        for (let j = 0; j < pokemonDetail[i].abilities.length; j++) {
            Abilities[j] = pokemonDetail[i].abilities[j];
        }
        let BaseExperience = pokemonDetail[i].base_experience;
        let Height = pokemonDetail[i].height;
        let Moves = [];
        for (let j = 0; j < pokemonDetail[i].moves.length; j++) {
            Moves[j] = pokemonDetail[i].moves[j];
        }
        let Weight = pokemonDetail[i].weight;

        pokemon.push(createPokemon({ ID, Name, Image, Types, Abilities, BaseExperience, Height, Moves, Weight }));
    }

    return {
        props: {
            pokemon,
        },
    };
}
