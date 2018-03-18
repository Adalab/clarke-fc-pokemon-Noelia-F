import React, { Component } from 'react';
import PokeInfo from '../PokeInfo/PokeInfo';
import './app.css';

class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			arrayPokemons: [],
			selectedPokemon: {},
			filterPokemons:'',
		};
		this.requestServer = this.requestServer.bind(this);
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
	requestServer(pokemonId) {
			fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
			.then(response => response.json())
			.then(json => {
				this.setState({
					selectedPokemon: json
				});
			});
		}
	render(){
		let pokemons = this.state.arrayPokemons
		if (this.state.filterPokemons) {
			pokemons = pokemons.filter( pokemon => pokemon.name.includes(this.state.filterPokemons.toLowerCase()))
		}
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
								selectedPokemon={this.state.selectedPokemon}
								onMoreInfo={this.requestServer}
							/>
							</li>
						)}
					</ul>
				</div>
			</main>
		);
	}
}

export default App;
