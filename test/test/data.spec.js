//completar las pruebas unitarias de las funciones implementadas en el archivo data.js.
import { filterSpecies, anotherExample } from '../src/data.js';


describe('probarFilter', () => {
  
  it('filterSpecies', () => {
    expect(typeof filterSpecies).toBe('function');
  });

  it('return `array`', () => {
    const objetos = [{species: "Alien", name: "yaarb"},{species: "Human", name: "Aqua Morty"},{species: "Humanoide", name: "rick"}]
    const resultado = [{species: "Human", name: "Aqua Morty"}]
    expect(filterSpecies("Human", objetos)).toEqual(resultado);
  });
});


/*describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});*/
