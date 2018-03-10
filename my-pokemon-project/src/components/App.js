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
		let listPokemons = this.state.pokemons;
		listPokemons.push({name: 'bulbasur',id: 1,types: [{slot: 2,type: {name: 'poison'}},{
slot: 1,type: {name: 'grass'}}],
sprites: {front_default: 'https://vignette.wikia.nocookie.net/pokemon-super-fanon/images/4/43/Bulbasaur.png/revision/latest?cb=20151125013521&path-prefix=es'}}, {name: 'asdf',id: 10,types: [{
slot: 1,type: {name: 'grass'}}],
sprites: {front_default: 'https://vignette.wikia.nocookie.net/pokemon-super-fanon/images/4/43/Bulbasaur.png/revision/latest?cb=20151125013521&path-prefix=es'}}, {name: 'asfad',id: 7,types: [{slot: 2,type: {name: 'poison'}},{
slot: 1,type: {name: 'grass'}}],
sprites: {front_default: 'https://vignette.wikia.nocookie.net/pokemon-super-fanon/images/4/43/Bulbasaur.png/revision/latest?cb=20151125013521&path-prefix=es'}}, {name: 'dafasf',id: 3,types: [{slot: 2,type: {name: 'poison'}},{
slot: 1,type: {name: 'grass'}}],
sprites: {front_default: 'https://vignette.wikia.nocookie.net/pokemon-super-fanon/images/4/43/Bulbasaur.png/revision/latest?cb=20151125013521&path-prefix=es'}}, {name: 'rewhgfdg',id: 5,types: [{slot: 2,type: {name: 'poison'}},{
slot: 1,type: {name: 'grass'}}],
sprites: {front_default: 'https://vignette.wikia.nocookie.net/pokemon-super-fanon/images/4/43/Bulbasaur.png/revision/latest?cb=20151125013521&path-prefix=es'}}, {name: 'kjhgkgkgh',id: 2,types: [{slot: 2,type: {name: 'poison'}},{
slot: 1,type: {name: 'grass'}}],
sprites: {front_default: 'https://vignette.wikia.nocookie.net/pokemon-super-fanon/images/4/43/Bulbasaur.png/revision/latest?cb=20151125013521&path-prefix=es'}}, {name: 'trettwtgrwe',id: 9,types: [{slot: 2,type: {name: 'poison'}},{
slot: 1,type: {name: 'grass'}}],
sprites: {front_default: 'https://vignette.wikia.nocookie.net/pokemon-super-fanon/images/4/43/Bulbasaur.png/revision/latest?cb=20151125013521&path-prefix=es'}}, {name: 'sfdgdsgds',id: 11,types: [{slot: 2,type: {name: 'poison'}},{
slot: 1,type: {name: 'grass'}}],
sprites: {front_default: 'https://vignette.wikia.nocookie.net/pokemon-super-fanon/images/4/43/Bulbasaur.png/revision/latest?cb=20151125013521&path-prefix=es'}}, {name: 'sfgdsgd',id: 8,types: [{slot: 2,type: {name: 'poison'}},{
slot: 1,type: {name: 'grass'}}],
sprites: {front_default: 'https://vignette.wikia.nocookie.net/pokemon-super-fanon/images/4/43/Bulbasaur.png/revision/latest?cb=20151125013521&path-prefix=es'}}, {name: 'bulbasur',id: 14,types: [{slot: 2,type: {name: 'poison'}},{
slot: 1,type: {name: 'grass'}}],
sprites: {front_default: 'https://vignette.wikia.nocookie.net/pokemon-super-fanon/images/4/43/Bulbasaur.png/revision/latest?cb=20151125013521&path-prefix=es'}}, {name: 'sfdg',id: 12,types: [{slot: 2,type: {name: 'poison'}},{
slot: 1,type: {name: 'grass'}}],
sprites: {front_default: 'https://vignette.wikia.nocookie.net/pokemon-super-fanon/images/4/43/Bulbasaur.png/revision/latest?cb=20151125013521&path-prefix=es'}}, {name: 'bulbafsdssur',id: 13,types: [{slot: 2,type: {name: 'poison'}},{
slot: 1,type: {name: 'grass'}}],
sprites: {front_default: 'https://vignette.wikia.nocookie.net/pokemon-super-fanon/images/4/43/Bulbasaur.png/revision/latest?cb=20151125013521&path-prefix=es'}}, {name: 'fgsdfqwewr',id: 16,types: [{slot: 2,type: {name: 'poison'}},{
slot: 1,type: {name: 'grass'}}],
sprites: {front_default: 'https://vignette.wikia.nocookie.net/pokemon-super-fanon/images/4/43/Bulbasaur.png/revision/latest?cb=20151125013521&path-prefix=es'}}, {name: 'bulbasurtewtgtrr',id: 15,types: [{slot: 2,type: {name: 'poison'}},{
slot: 1,type: {name: 'grass'}}],
sprites: {front_default: 'https://vignette.wikia.nocookie.net/pokemon-super-fanon/images/4/43/Bulbasaur.png/revision/latest?cb=20151125013521&path-prefix=es'}});
listPokemons.sort(function (a, b){
  if (a.id > b.id) {
    return 1;
  }
  if (a.id < b.id) {
    return -1;
  }
  // a must be equal to b
  return 0;
});
		this.setState({
			pokemons: listPokemons
		});


		// fetch('http://hp-api.herokuapp.com/api/characters')
		// 	.then(response => response.json())
		// 	.then(json => {
		// 		this.setState({ pokemons: json });
		// 	});
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
