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
		fetch('http://hp-api.herokuapp.com/api/characters')
			.then(response => response.json())
			.then(json => {
				this.setState({ pokemons: json });
			});
	}

	handleChange(event){
		const namePokemon= event.target.value;
		this.setState({
			filterPokemons: namePokemon.toLowerCase()
		})
	}


	paintPokemons(){

		const pokemonsToShow = this.state.pokemons.filter(pokemonFilter =>
			pokemonFilter.name.toLowerCase().includes(this.state.filterPokemons))
			console.log(this.state.pokemons)
		return(
				pokemonsToShow.map((pokemon, i) =>
								<Pokemons key={i} name={pokemon.name} image={pokemon.image} />)
		);
	}
	render(){
		console.log(this.state.filterPokemons)

		return(
			<div className="App">
				<main className="App-main">
					<div className="browser">
						<input onChange={this.handleChange} type="text" name="search" placeholder="Filtra Pokemons por nombre"/>
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
