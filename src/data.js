export const filterDataSp = (data,options) => {
  const filter= data.filter((character)=> character.species === options);
  console.log(filterDataSp);
  return filter;
}

export const filterDataSta = (data,options) => {
  const filter = data.filter((character)=> character.status === options);
  return filter;
}

export const filterDataOrg = (data,options) => {
  const filter = data.filter((character)=> character.origin.name === options);
  return filter;
}

/*export const filterDataName = (data, input) => {
  const buscar = data.filter ((character) => character.name.toLowerCase().includes(input.toLowerCase())*/

  export const filterDataName = (data, input) => {
  return data.filter(characters => {
    if (isNaN(input)) {
      return characters.name.toLowerCase().includes(input.toLowerCase())
    }
    else {
      return data;
    }
  })
}

export const filterOrder = (data,options) => {
  if (options === ""){
    return data;
  }
  if (options === "a-z"){
    return data.sort((prev, next) => {
      if(prev.name > next.name){
        return 1;  
      } else {
        return -1;
      }
    })
  }
  if(options === "z-a"){
    return data.sort((prev, next) => {
      if(prev.name < next.name){
        return 1;  
      } else {
        return -1;
      } 
    })
  }
}

/*Manipulación de datos a través de arreglos y objetos.
toda la funcionalidad que corresponda a obtener, procesar y manipular datos (funciones).
filterData(data, condition): esta función filter o filtrar recibiría la data, y nos retornaría aquellos datos que sí cumplan con la condición.

sortData(data, sortBy, sortOrder): esta función sort u ordenar recibe tres parámetros. El primer parámetro, data, nos entrega los datos. El segundo parámetro, sortBy, nos dice con respecto a cuál de los campos de la data se quiere ordenar. El tercer parámetro, sortOrder, indica si se quiere ordenar de manera ascendente o descendente.

computeStats(data): la función compute o calcular, nos permitirá hacer cálculos estadísticos básicos para ser mostrados de acuerdo a la data proporcionada.

##Estas funciones deben ser puras e independientes del DOM. Estas funciones serán después usadas desde el archivo src/main.js, al cargar la página, y cada vez que el usuario interactúe (click, filtrado, ordenado, ...).*/
