//Nº1
let numero = prompt("ingresar un numero");

if (parseInt(numero, 10) > 1000) {
  alert(parseInt(numero, 10) + " " + "es mayor a 1000");
  console.log(numero + " " + "es mayor a 1000");
} else {
  alert(parseInt(numero, 10) + " " + "no es mayor que 1000");
  console.log(numero + " " + "no es mayor que 1000");
}

//Nº2

let palabra = prompt("ingresar una palabra");

if (palabra == "Hola" || palabra == "hola") {
  alert(palabra + " " + "es igual a Hola/hola");
  console.log(palabra + " " + "es igual a Hola/hola");
} else {
  alert(palabra + " " + "no es igual a Hola/hola");
  console.log(palabra + " " + "no es igual a Hola/hola");
}

//Nº3

let anotarNumero = prompt("Anota un número");

if (anotarNumero < 50 && anotarNumero > 10) {
  alert(anotarNumero + " " + "está entre 10 y 50");
  console.log(anotarNumero + " " + "está entre 10 y 50");
} else {
  alert(anotarNumero + " " + "no está entre 10 y 50");
  console.log(anotarNumero + " " + "no está entre 10 y 50");
}
