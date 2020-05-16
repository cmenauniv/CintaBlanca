//Challenge
//Paso 1: Preguntar nombre, dirección, teléfono al usuario y mostrarlo en consola.
//Paso 2: Preguntar el anio en que nació y mostrar en la consola qué edad debería de tener en este anio


//PASO 1
//INPUT
var nombre = prompt('Digite su nombre: ');
var direccion = prompt('Digite su dirección: ');
var telefono = prompt('Digite su teléfono: ');
var fechanac = prompt('Digite su año de nacimiento');
//CALCULOS

var anio = new Date().getFullYear();
var numeroAnio = Number(anio);

//OUTPUT
console.log(nombre);
console.log(direccion);
console.log(telefono);
console.log(typeof(numeroAnio));
console.log(anio-fechanac);