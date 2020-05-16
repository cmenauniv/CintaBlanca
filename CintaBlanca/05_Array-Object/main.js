

//ARRAYS

var colores = ['azul', 'verde', 'rojo', 'amarillo']

console.log(colores[0]);

//PUSH -  Agrega un elemento al final del array
colores.push('rosa');
colores.push('café');


//POP - Borra el último elemento del array
colores.pop();
console.log(colores);

//SPLICE - Borra elementos específicos del array
//(1,1) borra desde la posición 1 la cantidad de 1 posiciones, si solo se pone un número borra todo a partir de ese elemento
//Posición, elemento a borrar, sustituto
colores.splice(2,1);
//Si se usa (2,1,'cafe') lo que hace es reemplazar el siguiente elemento con cafe


//OBJETOS

var persona = {
    nombre : "Ricardo",
    edad : "22",
    telefono : "54154541",
    direccion : "CDMX",
    musica : ["Rock","Pop","Electro"],
    peliculas : {
        accion: ["MI","Ronin","DdM"],
        drama: ["Titanic","Match Point"],
        romcom: ["la propuesta","Yo antes de ti"],
        terror : {
            gore:"",
            slasher:"",
            vampiros:"crepusculo"
        }
    }
};

console.log(persona.nombre);
console.log(persona.musica[2]);
console.log(persona.peliculas.accion[2]);
console.log(persona.peliculas.vampiros)