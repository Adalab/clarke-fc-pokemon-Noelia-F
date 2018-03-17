import React, { Component } from 'react';
import './pokeinfo.css';

class PokeInfo extends Component{
	render(){
    const styleImage = {
			backgroundImage: `url(${this.props.image})`}
		return(
      <div>
        <div className="image" style = {styleImage}>
  				<img height="0" width="0" src ={this.props.image} alt="Pokemons"></img>
  		    <div className="image__id">
  		      <p className="id">ID/ {this.props.id}</p>
  		    </div>
  			</div>
  		  <div className="info">
  		     <h2 className="name">{this.props.name}</h2>
  		     <div className="characteristics">
  						<ul>
  							{this.props.types.map((type, index) =>
  							<li className="ch-box" key={index} className={`pokemon__type type--${type.toLowerCase()}`}>
  								{type}
  							</li>)}
  						</ul>
  		      </div>
  					<div className="info__evolution">
  						<p className="text">Evoluciona de</p>
  						<p className="name name--evolution">Bulbasour</p>
  					</div>
  		  </div>
      </div>
		);
	}
}

export default PokeInfo;
