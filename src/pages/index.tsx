import Home from "./home";
import Detail from "./detail";
import Favourite from "./favourite";
import axios from "axios";
import { Router, Route, Switch } from "react-router-dom";
import { createMemoryHistory } from "history";

export default function index({ pokemon }) {
    const history = createMemoryHistory();
    return (
        <Router history={history}>
            <Switch>
                <Route path="/detail/:id">
                    <Detail pokemon={pokemon} />
                </Route>
                <Route path="/favourite">
                    <Favourite pokemon={pokemon} />
                </Route>
                <Route path="/">
                    <Home pokemon={pokemon} />
                </Route>
            </Switch>
        </Router>
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
