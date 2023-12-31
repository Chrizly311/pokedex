let currentPokemon;


async function loadPokemon() {
  for (let i = 1; i <= 151; i++) {
    let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    let response = await fetch(url);
    currentPokemon = await response.json();
    console.log("Loaded Pokemon", currentPokemon);
    await pokeContent(i);  
  }
}

function pokeContent(i) {
 document.getElementById("pokecontent").innerHTML += /*html*/ `    
  <div id="pokedex" class="${currentPokemon["types"]["0"]["type"]["name"]}">
  <div class="poke-header">
    <div class="header-details">
      <h1 id="pokemonName">${currentPokemon["name"]}</h1>
      <p id="pokeNumber">#00${currentPokemon["id"]}</p>
    </div>
    <div class="types">
      <button id="pokeType" class="type-label">${currentPokemon["types"]["0"]["type"]["name"]}</button>
    </div>
    <img src="${currentPokemon["sprites"]["other"]["official-artwork"]["front_default"]}" id="pokemon-img" class="pokemon-img">
  </div>
  <div id="container-info">
    <div class="section">
      <h3 onclick="aboutStatsVisible(${i})" id="about" class="stats">About</h3>
      <div id="section-about${i}" class="sections">
      <div class="species flex-container">
      <div>Species:</div><div>${currentPokemon["types"]["0"]["type"]["name"]}</div>
    </div>
    <div class="height flex-container">
      <div>Height:</div>
      <div>${currentPokemon["height"]}"</div>
    </div>
    <div class="weight flex-container">
      <div>Height:</div>
      <div>${currentPokemon["weight"]}lbs</div>
    </div>
    <div class="abilities flex-container">
      <div>Abilities:</div>
      <div>${currentPokemon["abilities"]["0"]["ability"]["name"]}</div>
    </div>
      </div>
    </div>
    <div class="section">
      <h3 onclick="baseStatsVisible(${i})" id="baseStats" class="stats">Base Stats</h3>
      <div id="section-basestats${i}" class="sections d-none">
      <div class="flex-container">
        <div>HP:</div>
        <div>${currentPokemon["stats"]["0"]["base_stat"]}</div>
        </div>
    <div class="flex-container">
      <div>Attack:</div>
      <div>${currentPokemon["stats"]["1"]["base_stat"]}</div>
    </div>
    <div class="flex-container">
      <div>Defense:</div>
      <div>${currentPokemon["stats"]["2"]["base_stat"]}</div>
    </div>
    <div class="flex-container">
      <div>Sp. Atk:</div>
      <div>${currentPokemon["stats"]["3"]["base_stat"]}</div>
    </div>
    <div class="flex-container">
      <div>Sp. Def.:</div>
      <div>${currentPokemon["stats"]["4"]["base_stat"]}</div>
    </div>
    <div class="flex-container">
      <div>Speed:</div>
      <div>${currentPokemon["stats"]["5"]["base_stat"]}</div>
    </div>
      </div>
    </div>
  </div>
</div>
    `;
}


function baseStatsVisible(i) {
  let base = document.getElementById(`section-basestats${i}`)
  let about = document.getElementById(`section-about${i}`)

  base.classList.remove("d-none");
  about.classList.add("d-none");
}


function aboutStatsVisible(i) {
  let base = document.getElementById(`section-basestats${i}`)
  let about = document.getElementById(`section-about${i}`)

  about.classList.remove("d-none");
  base.classList.add("d-none");
}