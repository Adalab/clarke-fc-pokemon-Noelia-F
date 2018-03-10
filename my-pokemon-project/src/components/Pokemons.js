import React, { Component } from 'react';

class Pokemons extends Component{
	render(){
		const styleImage = {
			backgroundImage: `url(${this.props.image})`
		}
		return(
			<li className="pokemon-card">
			<div>
					<div className="image" style = {styleImage}>
						<img height="0" width="0" src ={this.props.image} alt="Pokemons"></img>
					</div>
          <h2 className="name">{this.props.name}</h2>
			</div>
			</li>
		);
	}
}

export default Pokemons;
