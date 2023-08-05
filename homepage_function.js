const listaPokemon = document.querySelector(".listaPokemon");
const fragment = document.createDocumentFragment();
const templatePokemon = document.querySelector('#templatePokemon')

// const pokemonInfo = document.querySelector(".pokemonInfo");

const getPokemons = async (API_URL) => {
    try {
        const API = await fetch(API_URL)
        const data = await API.json();
        return data.results;
    } catch (error) {
        console.log(error)
    }
}

const getDataPreview = async () => {
    arrUrls = []
    arrPokemons = []
    fragment.innerHTML = "";
    listaPokemon.innerHTML = "";
    let API_URL = "https://pokeapi.co/api/v2/pokemon/?offset=00&limit=20";
    const data = await getPokemons(API_URL);

    
    for (let i = 0; i < data.length; i++) {
        arrUrls.push(data[i].url)
    }
    
    let dataPokemons;
    for (let i = 0; i < arrUrls.length; i++) {
        const API = await fetch(`${arrUrls[i]}`)
        const data = await API.json();        
        
        const clone = templatePokemon.content.cloneNode(true)
        clone.querySelector('.pokemon-id').textContent = (data.id.toString().length > 1) ? `#0${data.id}`:`#00${data.id}`;
        clone.querySelector('.pokemon-nombre').textContent = data.name;
        clone.querySelector('.imgPokemon').setAttribute('src', `${data.sprites.other["official-artwork"].front_default}`)
        clone.querySelector('.imgPokemon').setAttribute('alt', `${data.name}`)
        let tipos = data.types.map(tipos => `<p class="tipo ${tipos.type.name}">${tipos.type.name}</p>`);
        console.log(data.types)

        clone.querySelector('.pokemon-tipos').innerHTML = tipos.join("");

        fragment.appendChild(clone)
    }
    listaPokemon.appendChild(fragment)
    
    

    
}

document.addEventListener('DOMContentLoaded', () => {
    getDataPreview()
})