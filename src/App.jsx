import React from 'react';
import './App.css';
import pokebolaVazia from './images/emptypokeball.png';

function App() {

    function searchPokemon() {
      const pokemon = document.getElementById("pokemon").value.toLowerCase();
      const pokeImg = document.getElementById("pokeImg");
      const pokeAPI = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

      fetch(pokeAPI)
      .then(response => response.json())
      .then (data => {
        pokeImg.src = data.sprites.front_default;
        pokeImg.alt = data.name;
        document.getElementById("pokeName").innerHTML = data.name;
      })
      .catch(err => {
        document.getElementById("pokeName").innerHTML = "Pokémon não encontrado!";
        pokeImg.src = pokebolaVazia;
        pokeImg.width = 250;
        pokeImg.alt = "Pokébola aberta e vazia";
      })


    } 

    return (
      <div className='App'>
        <h1>Pokédex</h1>
        <form>
          <fieldset>
            <input type='text' id='pokemon' placeholder='Digite o nome do Pokémon'></input>
            <button type='button' id='search' onClick={searchPokemon}>Pesquisar Pokémon</button>
            <div id='mostrarPokemon'>
                <h2 id='pokeName'></h2>
                <img id='pokeImg'></img>
            </div>
          </fieldset>
        </form>
      </div>
    );
};

export default App;