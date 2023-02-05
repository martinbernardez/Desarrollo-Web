/**
document.getElementById('boton').onclick=function () {
    console.log("Capturamos el evento click");
    document.getElementById("demo").innerHTML = "Estamos cambiando el HTML con JS";
}
 */

document.addEventListener('click', function myfunction() {
    /*console.log("Hola mundo desde EventListener");*/
    document.getElementById("demo").innerHTML = "Estamos cambiando el HTML con JS";
})


document.getElementById('boton').addEventListener('click', function myfunction() {
    /*console.log("Hola mundo desde EventListener");*/
    document.getElementById("demo").innerHTML = "Estamos cambiando el HTML con JS";
})



document.getElementById('boton_color').addEventListener('click', function myfunction2() {
    document.body.style.backgroundColor = "#008000";
})

document.getElementById('boton_default').addEventListener('click', function myfunction2() {
    document.body.style.backgroundColor = "#d3d3d3";
})



/* FORMULARIO */

document.getElementById('sumar').addEventListener('click', function () {
    let numeroA = document.getElementById('numero1').value;
    let numeroB = document.getElementById('numero2').value;

    let resultado = sumar(parseInt(numeroA), parseInt(numeroB));

    document.getElementById('resultado').innerHTML = resultado;
    document.getElementById('contenedorResultado').style.display = 'block';
})

function sumar(a, b) {
    return a + b;
}