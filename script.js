let currentPokemon;


async function loadPokemon() {
    let url = 'https://pokeapi.co/api/v2/pokemon/charmander';
    let response = await fetch(url);
    currentPokemon = await response.json();
    console.log('Loaded Pokemon', currentPokemon);

    renderPokemonInfo();
}


function renderPokemonInfo() {
    document.getElementById('pokemonName').innerHTML = currentPokemon['name'];
    document.getElementById('pokeNumber').innerHTML = `#00${currentPokemon['id']}`;
    document.getElementById('pokeType').innerHTML = currentPokemon['types']['0']['type']['name'];
    document.getElementById('pokemon-img').src = `${currentPokemon['sprites']['other']['official-artwork']['front_default']}`;
}