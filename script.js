let currentPokemon;


async function loadPokemon() {
    let url = 'https://pokeapi.co/api/v2/pokemon/charmander';
    let response = await fetch(url);
    currentPokemon = await response.json();
    console.log('Loaded Pokemon', currentPokemon);

    renderPokemonInfo();
    sectionAbout();
}


function renderPokemonInfo() {
    document.getElementById('pokemonName').innerHTML = currentPokemon['name'];
    document.getElementById('pokeNumber').innerHTML = `#00${currentPokemon['id']}`;
    document.getElementById('pokeType').innerHTML = currentPokemon['types']['0']['type']['name'];
    document.getElementById('pokemon-img').src = `${currentPokemon['sprites']['other']['official-artwork']['front_default']}`;
}

function sectionAbout() {
    document.getElementById('section-about').innerHTML = /*html*/`
    <div class="species flex-container">
        <div>Species</div><div>${currentPokemon['types']['0']['type']['name']}</div>
    </div>
    <div class="height flex-container">
        <div>Height</div><div>${currentPokemon['height']}"</div>
    </div>
    <div class="weight flex-container">
        <div>Height</div><div>${currentPokemon['weight']}lbs</div>
    </div>
    <div class="abilities flex-container">
        <div>Abilities</div><div>${currentPokemon['abilities']['0']['ability']['name']}</div>
    </div>
    `;
}