// capturamos el input y el boton, la lista
let inputDOM = document.getElementById("input");
let botonDOM = document.getElementById("agregar");
let lista = document.getElementById("nuevasTareas");

console.log(inputDOM);
console.log(botonDOM);
console.log(lista);


// crear el array contenedor
const arrTareas = [];


// creamos el evento 
botonDOM.addEventListener("click", agregarTarea);


// creamos la funcion del evento
function agregarTarea(event){
    event.preventDefault();


    // capturamos el valor del input
    let valorInput = inputDOM.value;
    arrTareas.push(valorInput);


    // creamos el elemento LI
    let itenUL = document.createElement("li");
    itenUL.className = "elementiLista"


    // agregamos como hijo
    arrTareas.forEach((elemento) => {
        itenUL.textContent = elemento;

        lista.appendChild(itenUL);
    })

    inputDOM.value = ""
}