import data from './data/rickandmorty/rickandmorty.js';
import {filterDataSp, filterDataSta, filterDataOrg, filterDataName, filterOrder} from './data.js'

//Función que toma la data y crea con ella y html dinamico tarjetas con la información que nos interesa
let rickAndMortyData = data.results;

function showCharacters (characters){
  let elementContainer = document.getElementById('container');
  elementContainer.innerHTML= '';
  characters.forEach(function(character) {
    elementContainer.innerHTML +=
    `<div class="tarjeta">
    <img src= "${character.image}" alt= "${character.name}">
    <ul style="list-style-type: none">
    <li><h3>Nombre: ${character.name}</h3></li>
    <li><h3>Especie: ${character.species}</h3></li>
    <li><h3>Origen: ${character.origin.name}</h3></li>
    <li><h3>Estado: ${character.status}</h3></li>
    </ul>
    </div>`
  });
}
showCharacters(rickAndMortyData);
//console.log(showCharacters);

function printSpecies() {

let mapSpecies = rickAndMortyData.map((especies) => especies.species);

const valoresEspecies = [...new Set(mapSpecies)];
let selectorSpecies = document.getElementById("selectorSpecies");
selectorSpecies.addEventListener('change',selectionSpecies);

for (let i = 0; i< valoresEspecies.length; i++) {
    let opcion= document.createElement('option');
    opcion.value= valoresEspecies [i];
    opcion.innerText= valoresEspecies [i];
    selectorSpecies.appendChild(opcion);
  }

let mapStatus = rickAndMortyData.map((estado) => estado.status);

const valoresEstado = [...new Set(mapStatus)];
//console.log(valoresEstado);

let selectorStatus= document.getElementById("selectorStatus");
selectorStatus.addEventListener('change',selectionStatus);

for (let i = 0; i < valoresEstado.length; i++){
  let opcion = document.createElement('option');
  opcion.value = valoresEstado [i];
  opcion.innerText = valoresEstado [i];
  selectorStatus.appendChild(opcion);
  }

let mapOrigin = rickAndMortyData.map((origen) => origen.origin.name);

const valoresOrigen = [...new Set(mapOrigin)];
//console.log(valoresOrigen);

let selectorOrigin = document.getElementById("selectorOrigin");
selectorOrigin.addEventListener('change',selectionOrigin);

for (let i = 0; i< valoresOrigen.length; i++){
  let opcion = document.createElement('option');
  opcion.value = valoresOrigen [i];
  opcion.innerText = valoresOrigen [i];
  selectorOrigin.appendChild(opcion);
  }
}
printSpecies();

function selectionSpecies(event){
  let valorSelect = event.target.value;
  let filterDataSpecies = filterDataSp(rickAndMortyData, valorSelect);
  showCharacters(filterDataSpecies);
  //console.log(filterDataSpecies);
}

function selectionStatus(event){
  let valorSelect = event.target.value;
  let filterDataStatus = filterDataSta(rickAndMortyData, valorSelect);
  showCharacters(filterDataStatus);
  //console.log(filterDataSpecies);
}

function selectionOrigin(event){
  let valorSelect = event.target.value;
  let filterDataOrigin = filterDataOrg(rickAndMortyData, valorSelect);
  showCharacters(filterDataOrigin);
  //console.log(filterDataSpecies);
}

let optionOrder = document.getElementById("selectorOrder");
optionOrder.addEventListener('change', (event) => {
  let valorSelect = event.target.value;
  let filterDataOrder = filterOrder(rickAndMortyData, valorSelect);
  showCharacters(filterDataOrder);
});

let buscador = document.getElementById("buscador");
buscador.addEventListener('keyup', (event) => {
  const valorInput = event.target.value;
  const searchCharacters = filterDataName(rickAndMortyData, valorInput);
  showCharacters(searchCharacters);
}) 

<<<<<<< HEAD

=======
/*Mostrar los datos en la pantalla - interacción con el DOM
Operaciones como creación de nodos, registro de manejadores de eventos (event listeners o event handlers)
-Puedes usar más archivos y carpetas.
Y ahora tendríamos la variable data disponible en el script src/main.js*/
>>>>>>> 914947900491851beee8f2974a97aca9fdfa2ccf
