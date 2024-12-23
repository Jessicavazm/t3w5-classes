/* eslint-disable no-undef */
import React, { Component } from "react";
import PokemonCard from "./PokemonCard";

// const pokemonList = ["pikachu", "ditto", "mew"];

export default class PokemonFetcher extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pokemonList: [],
            jwtToken: null
        };
    }

    // lifecycle component method
    async componentDidMount() {
        // for loop to fetch 6 Pokemon
        for (let index = 0; index < 6; index++) {
            // Generate a random Pokemon ID Number
            let randomNumber = Math.ceil(Math.random() * 1025);
            // Pass random Pokemon Number to fetch
            let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`);
            let data = await response.json();
            // Set fetch response data to state
            // Method 1:
            // this.setState({ pokemonList: [...this.state.pokemonList, data.name] });
            
            // Method 2 (best method):
            this.setState((previousState) => {
                return {
                    pokemonList: [...previousState.pokemonList, data.name]
                }
            })
        }
        console.log("Pokemon Fetcher first load on the page")
    }

    componentDidUpdate(){
        console.log("Page rendered. This is the current state: ", this.state.pokemonList)

        if (this.state.jwtToken) {
            console.log("User is logged in.");
        } else {
            console.log("User is logged out.");
        }
    }

    render() {
        return (
            <div>
                <h1>Pokemon Data</h1>
                {this.state.pokemonList.map((pokemon, index) => {
                    return <PokemonCard key={pokemon + index} name={pokemon} />;
                })}
                <button onClick={() => {
                    this.setState({ pokemonList: [] });
                }}>Empty the state</button>
            </div>
        );
    }
}
