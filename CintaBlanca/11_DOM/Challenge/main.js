let inputNombre = document.getElementById('inputNombre')
let inputDireccion = document.getElementById('inputDireccion')
let inputPina = document.getElementById('inputPina')
let nombreCard = document.getElementById('nombreCard')
let direccionCard = document.getElementById('direccionCard')
let pinaCard = document.getElementById('pinaCard')
let boton = document.getElementById('boton')

const cambio = () => {

    nombreCard.innerHTML = inputNombre.value
    direccionCard.innerHTML = inputDireccion.value
    pinaCard.innerHTML = inputPina.value
}


boton.addEventListener('click',cambio)