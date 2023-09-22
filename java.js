function verificarParImpar() {
    var numero = document.getElementById('numeroInput').value;
    var resultadoElement = document.getElementById('resultado');

    if (numero % 2 === 0) {
        resultadoElement.innerHTML = "El número " + numero + " es Par.";
    } else {
        resultadoElement.innerHTML = "El número " + numero + " es Impar.";
    }
}

function sumarNumeros() {
    var numero1 = parseFloat(document.getElementById('numero1').value);
    var numero2 = parseFloat(document.getElementById('numero2').value);
    var resultadoElement = document.getElementById('resultado1');

    if (!isNaN(numero1) && !isNaN(numero2)) {
        var suma = numero1 + numero2;
        resultadoElement.innerHTML = "La suma de " + numero1 + " y " + numero2 + " es " + suma + ".";
    } else {
        resultadoElement.innerHTML = "Por favor, ingrese dos números válidos.";
    }
}

function verificarNumero() {
    var numero = parseFloat(document.getElementById('numeroInput1').value);
    var resultadoElement = document.getElementById('resultado2');

    if (!isNaN(numero)) {
        if (numero > 0) {
            resultadoElement.innerHTML = "El número " + numero + " es Positivo.";
        } else if (numero < 0) {
            resultadoElement.innerHTML = "El número " + numero + " es Negativo.";
        } else {
            resultadoElement.innerHTML = "El número " + numero + " es Neutro (0).";
        }
    } else {
        resultadoElement.innerHTML = "Por favor, ingrese un número válido.";
    }
}
