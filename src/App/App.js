import React, { Component } from 'react';
import Pokemons from '../components/Pokemons/Pokemons';
import PokeInfo from '../components/PokeInfo/PokeInfo';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';

class App extends Component{

	render(){
		return(
			<div className="App">
			<Switch>
				 <Route exact path='/' component={ Pokemons } />
				 <Route path='/pokemon/:id' component={ PokeInfo } />
			 </Switch>
			</div>
		);
	}
}

export default App;
