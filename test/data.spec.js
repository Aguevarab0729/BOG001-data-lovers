//completar las pruebas unitarias de las funciones implementadas en el archivo data.js.
import { filterDataSp, filterDataSta, filterDataOrg, filterDataName, filterOrder } from '../src/data.js';

//Test Filtrar data por Especie 
describe('filterDataSp', () => {
  it('deberia ser una funcion', () => {
    expect(typeof filterDataSp).toBe('function');
  });

  const objetos = [{species: "Alien", name: "yaarb"}, {species: "Human", name: "Aqua Morty"}, {species: "Humanoide", name: "Rick Sanchez"}]
  const resultado = [{species: "Human", name: "Aqua Morty"}]

  it('deberia retornar Aqua Morty al filtrar por Specie "Human"', () => {
    expect(filterDataSp(objetos, "Human")).toEqual(resultado);
  });
});

//Filtrar data por Origen
describe('filterDataOrg', () => {
  it('deberia ser una funcion', () => {
    expect(typeof filterDataOrg).toBe('function');
  });

  const objetos = [{name: "Ethan", origin:{name: "Earth (C-137)"}}, {name: "Mitch", origin:{name: "Earth (Replacement Dimension)"}}, {name: "EthanShrimply Pibbles", origin:{name: "unknown"}}]
  const resultado = [{name: "Mitch", origin:{name: "Earth (Replacement Dimension)"}}]
  
  it('deberia retornar Mitch cuando filtramos por origen "Earth (Replacement Dimension)"', () => {
    expect(filterDataOrg(objetos, "Earth (Replacement Dimension)")).toEqual(resultado);
  });
});

//Filtrar data por Estado
describe('filterDataSta', () => {
  it('deberia ser una funcion', () => {
    expect(typeof filterDataSta).toBe('function');
  });
  
  const objetos = [{status: "Alive", name: "Evil Morty"}, {status: "Dead", name: "Fart"}, {status: "unknown", name: "Ethan"}]
  const resultado = [{status: "Dead", name: "Fart"}]

  it('deberia retornar Fart cuando filtramos por status "Dead"', () => {
    expect(filterDataSta(objetos, "Dead")).toEqual(resultado);
  });
});

// Filtrar data por Nombre
describe('filterDataName', () => {
  it('deberia ser una funcion', () => {
    expect(typeof filterDataName).toBe('function');
  });

  const objetos = [{"name": "Simple Rick", "status": "Dead", "species": "Human"}, {"name": "Alexander", "status": "Dead", "species": "Human"}]
  const resultado = [{"name": "Alexander", "status": "Dead", "species": "Human"}]
  
  it('deberia retornar elemento que coincide con el el input', () => {
    expect(filterDataName(objetos, "Alex")).toEqual(resultado);
  });

  it('deberia retornar toda la data si el imput esta vacio', () => {
    expect(filterDataName(objetos, "")).toEqual(objetos);
  });
});

//Filtrado ordenado de la A a la Z
describe('filterOrder', () => {
  it('deberia ser una funcion', () => {
    expect(typeof filterOrder).toBe('function');
  });

  const objetos = [{"name": "Alexander"}, {"name": "Simple Rick"}, {"name": "Jan-Michael Vincent"}, {"name": "Zarbadar Gloonch"}]
  const objetos2 = [{"name": "Alexander"}, {"name": "Simple Rick"}, {"name": "Jan-Michael Vincent"}, {"name": "Zarbadar Gloonch"}]
  const resultado1 =[{"name": "Alexander"}, {"name": "Jan-Michael Vincent"}, {"name": "Simple Rick"}, {"name": "Zarbadar Gloonch"}]
  const resultado2 =[{"name": "Zarbadar Gloonch"}, {"name": "Simple Rick"}, {"name": "Jan-Michael Vincent"}, {"name": "Alexander"}]


  it ('deberia retornar toda la data si el campo esta vacio',() => {
    expect(filterOrder(objetos, "")).toEqual(objetos);
  })
  it('deberia retornar el array organizado alfabeticamente de la Z a la A', () => {
    expect(filterOrder(objetos2, "z-a")).toEqual(resultado2);
  })

  it('deberia retornar el array organizado alfabeticamente de la A a la Z', () => {
    expect(filterOrder(objetos, "a-z")).toEqual(resultado1);
  });
})
