let currentPokemon;


async function loadPokemon() {
    let url = 'https://pokeapi.co/api/v2/pokemon/4';
    let response = await fetch(url);
    currentPokemon = await response.json();
    console.log('Loaded Pokemon', currentPokemon);

    pokeContent();
    renderPokemonInfo();
    sectionAbout();
    sectionBaseStats();
}

function pokeContent() {
    document.getElementById('pokecontent').innerHTML = `    
    <div id="pokedex">
    <div class="poke-header">
        <div class="header-details">
            <h1 id="pokemonName">Name</h1>
            <p id="pokeNumber"></p>
        </div>
        <div class="types">
            <button id="pokeType" class="type-label"></button>
        </div>
    </div>

    <img id="pokemon-img" class="pokemon-img">
</div>
<div id="container-info">
        <div class="section">
            <h3 onclick="aboutStatsVisible()" id="about" class="stats">About</h3>
            <div id="section-about" class="sections">
            </div>
        </div>
        <div class="section">
            <h3 onclick="baseStatsVisible()" id="baseStats" class="stats">Base Stats</h3>
            <div id="section-basestats" class="sections d-none">
            </div>
        </div>
</div>`;
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
    </div>`;
}

function sectionBaseStats() {
    document.getElementById('section-basestats').innerHTML = /*html*/`
            <div class="species flex-container">
                    <div>HP</div><div>${currentPokemon['stats']['0']['base_stat']}</div>
                </div>
            <div class="flex-container">
                <div>Attack</div><div>${currentPokemon['stats']['1']['base_stat']}</div>
            </div>
            <div class="flex-container">
                <div>Defense</div><div>${currentPokemon['stats']['2']['base_stat']}</div>
            </div>
            <div class="flex-container">
                <div>Sp. Atk</div><div>${currentPokemon['stats']['3']['base_stat']}</div>
            </div>
            <div class="flex-container">
                <div>Sü. Def.</div><div>${currentPokemon['stats']['4']['base_stat']}</div>
            </div>
            <div class="flex-container">
                <div>Speed</div><div>${currentPokemon['stats']['5']['base_stat']}</div>
            </div>
    `;
}

function baseStatsVisible() {
    let base = document.getElementById('section-basestats');
    let about = document.getElementById('section-about');

    base.classList.remove('d-none');
    about.classList.add('d-none');
}

function aboutStatsVisible() {
    let base = document.getElementById('section-basestats');
    let about = document.getElementById('section-about');

    about.classList.remove('d-none');
    base.classList.add('d-none');
}