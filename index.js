// const prompt = require('prompt-sync')();

// El siguiente programa debe solicitar al usuario un número por prompt o por input y guardarlo.
// Y debe ser capaz de identificar si el dato de entrada es de tipo number, en caso contrario debe mandar un mensaje de error y volver a solicitar el dato.
let numero;
do {
    numero = prompt('Ingrese un número: ');
    numero = Number(numero); // convertir a número.
    if (isNaN(numero)) {
        console.log('Error: Ingrese un número válido.');
        alert('Error: Ingrese un número válido.');
    }
} while (isNaN(numero)); // valor no es número
console.log("Haz ingresado el número " + numero);
console.log("")

// Se debe calcular el factorial del número recibido.
let resultado = factorial(numero); // Llamada a la función calculadora de factorial
console.log("El factorial de " + numero + " es " + resultado);

// Debe imprimir el resultado por el DOM de un archivo index.html que debes crear en el mismo directorio de tu proyecto.
document.getElementById("resultado").innerHTML = 
    `El factorial de ${numero} calculado es: <br>
    ${resultado}`;

// Función calculadora de factorial.
function factorial(numero) {
    let resultado = 1;
    for (let i = 1; i <= numero; i++) {
        resultado *= i;
    }
    return resultado;
}