/* eslint-disable no-undef */
import React, { Component } from "react";
import PokemonCard from "./PokemonCard";

// const pokemonList = ["pikachu", "ditto", "mew"];

export default class PokemonFetcher extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pokemonList: [],
        };
    }

    // lifecycle component method
    async componentDidMount(){
        // Generate a random Pokemon ID Number
        let randomNumber = Math.ceil(Math.random() * 1025);
        // Pass random Pokemon Number to fetch
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`);
        let data = await response.json();
        // Set fetch response data to state
        this.setState({pokemonList: [data.name]});
    }

    render() {
        return (
            <div>
                <h1>Pokemon Data</h1>
                {this.state.pokemonList.map((pokemon) => {
                    return <PokemonCard name={pokemon} />;
                })}
                <button onClick={() => {
                    this.setState({pokemonList: []});
                }}>Empty the state</button>
            </div>
        );
    }
}
