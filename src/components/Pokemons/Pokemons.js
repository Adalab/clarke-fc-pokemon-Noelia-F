import React, { Component } from 'react';
import PokeInfo from '../PokeInfo/PokeInfo';
import './pokemons.css';

class Pokemons extends Component{
	constructor(props){
		super(props);
		this.state = {
			arrayPokemons: [],
			filterPokemons:'',
		};
	}

	 componentDidMount() {
			 for (let pokeID = 1; pokeID <=2; pokeID++) {
					fetch(`https://pokeapi.co/api/v2/pokemon/${pokeID}/`)
					.then(response => response.json())
					.then(results => {
						let listPokemons = this.state.arrayPokemons;
						listPokemons.push(results)
					 	this.setState({
							arrayPokemons: listPokemons
						});
					 })
					}
	   }

	handleChange(event){
		this.setState({
			filterPokemons: event.target.value.toLowerCase()
		})
	}
	render(){
		const pokemons = this.state.arrayPokemons
		console.log(pokemons)
		return(
			<main className="App-main">
				<div className="browser">
					<input className="browser__input" onChange={(event) => this.handleChange(event)} type="text" name="search" placeholder="Filtra Pokemons por nombre..."/>
				</div>
				<div className="general-box">
					<ul className="general-list">
					 	{pokemons.sort((a,b) => a.id - b.id).map((pokemon, index) =>
							<li className="pokemon-card" key={index}>
							<PokeInfo
								key={index}
								image= {pokemon.sprites.front_default}
								id={pokemon.id}
								name={pokemon.name}
								types= {pokemon.types.map((t) => t.type.name)}
								abilities= {pokemon.abilities.map((ability) => ability.ability.name)}
							/>
							</li>
						)}
					</ul>
				</div>
			</main>
		);
	}
}

export default Pokemons;
