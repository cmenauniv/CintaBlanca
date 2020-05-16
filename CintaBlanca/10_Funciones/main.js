function suma(a,b,c){
    console.log(a + b + c)
}

suma(10,20,30)


function suma2(a,b){
    return a+b
}

console.log(suma2(2,2))

console.log(suma2(suma2(10,10),50))


//Arrow functions o funciones de flecha ECMA5
const multiplicacion = (x,y) => {
    return x*y
}

console.log(multiplicacion(10,5))