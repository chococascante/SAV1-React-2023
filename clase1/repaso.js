/**
 * Tipos:
 * 1. Boolean
 * 2. String
 * 3. Number
 * 4. undefined o null
 */

let variable; // undefined
let num = 5;
let str = "Hola";
let nombre = "Luis";
let saludo = "Hola " + nombre; // "Hola" + " " + nombre
let saludo2 = `Hola ${nombre}, ¿cómo estás?`; // "Hola" + " " + nombre

// Constantes
const PI = 3.1416;
const patito = "Patito";
patito = "Pato"; // Error

// Objetos y arreglos
let apellido = "apellido";
const persona = {};
persona.nombre = "Luis";
persona.edad = 29;

for (let key in persona) {
  console.log(persona[key]);
}

persona["aria-label"] = "García";
// persona = { nombre: "Luis", edad: 29, apellido: "García" };

const arreglo = [1, 2, 3];
arreglo.push(4);
// arreglo = [1, 2, 3, 4];
const arreglo1 = [...arreglo];

// Métodos de arreglo
// forEach
arreglo.forEach((elemento, indice) => {
  console.log(elemento, indice);
}); // undefined

// map
const ejemploMap = arreglo.map((elemento, indice) => {
  console.log(elemento, indice);
  return elemento * 2;
}); // [2, 4, 6, 8]

// filter
const ejemploFilter = arreglo.filter((elemento, indice) => {
  return elemento % 2 === 0;
}); // [2, 4]

// find
const ejemploFind = arreglo.find((elemento, indice) => {
  return elemento % 2 === 0;
}); // 2

// reduce
const ejemploReduce = arreglo.reduce((acumulador, elemento, indice) => {
  return acumulador + elemento;
}, 0); // 10

// Funciones
function suma(a, b) {
  return a + b;
}

function holaMundo() {
  return "Hola mundo";
}

function Perro(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;

  this.ladrar = function () {
    return "Guau";
  };
}

const perro = new Perro("Firulais", 5);

// Arrow functions
const holaMundoArrow = () => "Hola mundo";
const esMayorDeEdad = (edad) => edad >= 18;
const esMayorDeEdad2 = (edad) =>
  edad >= 18 ? "Es mayor de edad" : "Es menor de edad";

const holaMundoInternacional = (idioma) => {
  switch (idioma) {
    case "es":
      return "Hola mundo";
    case "en":
      return "Hello world";
    case "fr":
      return "Bonjour le monde";
    default:
      return "Hola mundo";
  }
};

class Gato {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  // maullar() {
  //   return "Miau";
  // }

  maullar = () => {
    this.nombre = "Luis";
    return "Miau";
  };
}
