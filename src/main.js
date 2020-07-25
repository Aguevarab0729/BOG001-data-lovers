<<<<<<< HEAD
import data from './data/rickandmorty/rickandmorty.js';

/*const speciesFilter = document.getElementById("speciesFilter");
const originFilter = document.getElementById("originFilter");
const statusFilter = document.getElementById("statusFilter");
const buscador = document.getElementById("buscador");*/

// tomar los elementos que necesitamos para los filtros
export const dataContent = (characters) => {}
console.log(data);

//Función que toma la data y crea con ella y html dinamico tarjetas con la información que nos interesa
let rickAndMortyData = data.results;

function showCharacters (){
rickAndMortyData.forEach(function(character){
let elementContainer = document.getElementById('container');

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
showCharacters();
//console.log(showCharacters);

//Funcion que filtra la data por especie
let mapSpecies = rickAndMortyData.map(function(especies){
  return especies.species
})
const especies = mapSpecies;
const valoresEspecies = new Set(especies)
console.log(valoresEspecies);

//Funcion que filtra la data por origen
let mapOrigin = rickAndMortyData.map(function(origen){
  return origen.origin.name
})
const origen = mapOrigin;
const valoresOrigen = new Set(origen)
console.log(valoresOrigen);

//Funcion que toma toda la data y devuelve solo los valores de estado, luego utilizamos esta informacion para que nos devuelva solo los primeros valores y no los repita.
let mapStatus = rickAndMortyData.map(function(estado){
  return estado.status
})
const estado = mapStatus;
const valoresEstado = new Set(estado)
console.log(valoresEstado);

/*function showStatusFiltro() {
  let mapStatus = rickAndMortyData.map(function(valoresEstado){
    const estado = mapStatus;
    const valoresEstado = new Set(estado)
    let botonEstado = document.getElementById('statusFilter');

    botonEstado.innerHTML +=
    `<select>
    <option>${valoresEstado.status}</option>
    </select>`
  })
}
showStatusFiltro();
console.log(showStatusFiltro);*/



/*Mostrar los datos en la pantalla - interacción con el DOM
Operaciones como creación de nodos, registro de manejadores de eventos (event listeners o event handlers)
-Puedes usar más archivos y carpetas.
Y ahora tendríamos la variable data disponible en el script src/main.js*/
