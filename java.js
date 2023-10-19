function verificarParImpar() {
    var numero = document.getElementById('numeroInput').value;
    var resultadoElement = document.getElementById('resultado');

    if (numero % 2 === 0) {
        resultadoElement.innerHTML = "El número " + numero + " es Par.";
    } else {
        resultadoElement.innerHTML = "El número " + numero + " es Impar.";
    }
}

function sumarLista() {
    var suma = 0;
    var resultado2 = document.getElementById('resultado1');
    var lista = document.getElementById('listanumeros');
    var boton = document.getElementById('botones');

    if (boton.getAttribute("disabled") === null ) {

    for (var x=1; x <=10; x++) {
        suma += x;
        var listItem = document.createElement("li");
        listItem.textContent = x;

        lista.appendChild(listItem);
    }

    resultado2.innerHTML = "la suma de los números del 1 al 10 es: " + suma;

    boton.setAttribute("disabled" , "true" ); 
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
