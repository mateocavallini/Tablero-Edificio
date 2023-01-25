var contador = 0;
var numPiso = "";
var NumPiso = document.getElementById("piso");
var numDepa = document.getElementById("depa");
var mensajes = document.getElementById("mensaje");
const llamar = document.getElementById('llama');
const borrar = document.getElementById("borra");

function boton(numDep) {
    numPiso = numPiso + numDep;
    if (contador >= 2) {
        numDepa.value = numDep;
    } else {
        NumPiso.value = numPiso;
    }

    contador++;
}

llamar.addEventListener(`click`, () => {

    if (NumPiso.value > 42) {
        mensajes.value = `Error en el piso`
    } else if (numDepa.value < 1 || numDepa.value > 8) {
        mensajes.value = `Error en el departamento`
    } else {
        mensajes.value = `Llamando al departamento ${numDepa.value} piso ${NumPiso.value}`
    }
})


borrar.addEventListener(`click`, () => {
    mensajes.value = "";
    numDepa.value = "";
    NumPiso.value = "";
})