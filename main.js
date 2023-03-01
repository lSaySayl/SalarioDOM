//Variables globales

let nombre = document.querySelector(`#nombre`);
let valorHora = document.querySelector(`#valorHora`);
let cantidadHoras = document.querySelector(`#cantidadHoras`);
let cargo = document.querySelector(`#cargo`);
let mostrarInfo = document.querySelector(`#mostrarInfo`)


//Calcular y agregar información

let agregarInfo = () => {
   
    if (isNaN(valorHora.value) || isNaN(cantidadHoras.value) || valorHora.value === "" || cantidadHoras.value === "") {
        alert(`Por favor, tenga en cuenta que los campos de valor Hora y cantidad de  horas debe ser un número. Tampoco puede estar vacío`)

    }

    else {

        let calculo = parseFloat(valorHora.value) * parseFloat(cantidadHoras.value)
        let info = `
        <p>El trabajador <strong>${nombre.value}</strong> que desempeña el cargo de <strong>${cargo.value}</strong> tiene un salario total de <strong>${calculo}</strong> </p>
        <br>
        `
        mostrarInfo.innerHTML += info;

    }

}

let btnCalcular = document.querySelector(`#calcular`)

btnCalcular.addEventListener(`click`, agregarInfo)

//Limpiar pantalla


let limpiarInfo = () => {
    nombre.value = "";
    valorHora.value = "";
    cantidadHoras.value = "";
    cargo.value = "";
    mostrarInfo.innerHTML = "";



}

let btnLimpiar = document.querySelector(`#limpiar`)

btnLimpiar.addEventListener(`click`,limpiarInfo)



