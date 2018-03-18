import React, { Component } from 'react';
import './pokeinfo.css';
import Details from '../Details/Details';
import {Link, Route, Switch} from 'react-router-dom';

class PokeInfo extends Component{
	render(){
    const styleImage = {
			backgroundImage: `url(${this.props.image})`
    }
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
  						<p className="name name--evolution">???</p>
  					</div>
						<Link className="info-btn" to={`/pokemonDetails/${this.props.name}`}
							onClick={() => {this.props.onMoreInfo(this.props.name)}}>More Info</Link>
						{(this.props.selectedPokemon.name === this.props.name) ?
							<Switch>
								<Route path="/pokemonDetails/:pokemoname"
									component={(props) => {return <Details selectedPokemon={this.props.selectedPokemon} {...props} />}} />
							</Switch> : ""}
  		  </div>
      </div>
		);
	}
}

export default PokeInfo;
