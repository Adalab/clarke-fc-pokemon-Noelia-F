import React, { Component } from 'react';
import Pokemons from './Pokemons';

class App extends Component{
	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this)
		this.state = {
			pokemons: [],
			filterPokemons:''
		};
	}

	componentDidMount(){
		for (let pokemonID = 1; pokemonID <=5; pokemonID++) {
		fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}/`)
		.then(response => response.json())
		.then(results => {
			let listPokemons = this.state.pokemons;
			listPokemons.push(results)
			this.setState({
				pokemons: listPokemons
			});
		})
	}
	}

	handleChange(event){
		const namePokemon= event.target.value;
		this.setState({
			filterPokemons: namePokemon.toLowerCase()
		})
	}


	paintPokemons(){
		const orderPokemon = this.state.pokemons.sort(function (a, b){
			if (a.id > b.id) {
				return 1;
			}
			if (a.id < b.id) {
				return -1;
			}
			return 0;
		});
		const pokemonsToShow = this.state.pokemons.filter(pokemonFilter =>
			pokemonFilter.name.toLowerCase().includes(this.state.filterPokemons))
			console.log(this.state.pokemons)
		return(
				pokemonsToShow.map((pokemon, i) =>
								<Pokemons key={i} id={pokemon.id} name={pokemon.name} type={pokemon.types} image={pokemon.sprites.front_default} />)
		);
	}
	render(){
		console.log(this.state.filterPokemons)

		return(
			<div className="App">
				<main className="App-main">
					<div className="browser">
						<input className="browser__input" onChange={this.handleChange} type="text" name="search" placeholder="Filtra Pokemons por nombre..."/>
					</div>
					<div className="general-box">
						<ul className="general-list">
							{ this.paintPokemons() }
						</ul>
					</div>
			</main>
			</div>
		);
	}
}

export default App;
