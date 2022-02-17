import React from "react";
import data from '../data';
import Pokemon from "./Pokemon";

class Pokedex extends React.Component {
  render() {
    return (
      <main>
      <h1>Pokedex</h1>
      {data.map((pokemon) => 
        <Pokemon key={pokemon.id} pokemon={pokemon}/>
      )}
      </main>
    )
  }
}
export default Pokedex