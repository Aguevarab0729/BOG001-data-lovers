// estas funciones son de ejemplo

import data from './data/rickandmorty/rickandmorty.js';
import rickandmorty from './data/rickandmorty/rickandmorty.js';

export const filterSpecies = (speciesCharacters, charactersData = data.rickandmorty) => {
  if (speciesCharacters === "") {
    return charactersData;
  } 
  else {
    console.log(charactersData);
    return charactersData.filter(rickandMorty => {return rickandmorty.species.includes(speciesCharacters)})
}
};



/*Manipulación de datos a través de arreglos y objetos.
toda la funcionalidad que corresponda a obtener, procesar y manipular datos (funciones).
filterData(data, condition): esta función filter o filtrar recibiría la data, y nos retornaría aquellos datos que sí cumplan con la condición.

sortData(data, sortBy, sortOrder): esta función sort u ordenar recibe tres parámetros. El primer parámetro, data, nos entrega los datos. El segundo parámetro, sortBy, nos dice con respecto a cuál de los campos de la data se quiere ordenar. El tercer parámetro, sortOrder, indica si se quiere ordenar de manera ascendente o descendente.

computeStats(data): la función compute o calcular, nos permitirá hacer cálculos estadísticos básicos para ser mostrados de acuerdo a la data proporcionada.

##Estas funciones deben ser puras e independientes del DOM. Estas funciones serán después usadas desde el archivo src/main.js, al cargar la página, y cada vez que el usuario interactúe (click, filtrado, ordenado, ...).*/
