import React from 'react';
import './details.css';
import {Link, Route, Switch} from 'react-router-dom';
import Close from './close.png';

class Details extends React.Component{

  render(){
		let selectedPokemon = this.props.selectedPokemon || {id:0};

		return (
			<div className="pokemon__details">
      <div className="details__button"></div>
				<ul className="details">
					<li><span className="details__important">Height:</span> {selectedPokemon.height}</li>
					<li><span className="details__important">Weight</span>: {selectedPokemon.weight}</li>
					<li><span className="details__important">Abilities:</span></li>
					{selectedPokemon.abilities.map((ability, idx) => {return <li key={selectedPokemon.id}>{ability.ability.name}</li> })}
				</ul>
			</div>
		);
	}
}

export default Details;
