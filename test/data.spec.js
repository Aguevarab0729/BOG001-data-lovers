<<<<<<< HEAD
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
=======
import { example, anotherExample } from '../src/data.js';


describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
>>>>>>> 012dc80b6eaf60fd645f3b35dea6b8e266b56c36
  });
});


<<<<<<< HEAD
/*describe('anotherExample', () => {
=======
describe('anotherExample', () => {
>>>>>>> 012dc80b6eaf60fd645f3b35dea6b8e266b56c36
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
<<<<<<< HEAD
});*/
=======
});
>>>>>>> 012dc80b6eaf60fd645f3b35dea6b8e266b56c36
