import React, { Component } from 'react';

class Pokemons extends Component{
	render(){
		const styleImage = {
			backgroundImage: `url(${this.props.image})`
		}
		return(
			<li className="pokemon-card">
					<div className="image" style = {styleImage}>
						<img height="0" width="0" src ={this.props.image} alt="Pokemons"></img>
            <div className="image__id">
              <p className="id">ID/1</p>
            </div>
					</div>
          <div className="info">
            <h2 className="name">{this.props.name}</h2>
            <div className="characteristics">
              <div className="ch-box">
              <p>GRASS</p>
              </div>
              <div className="ch-box">
              <p>FIRE</p>
              </div>
            </div>
          </div>
			</li>
		);
	}
}

export default Pokemons;
