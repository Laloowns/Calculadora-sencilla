/*
Crea un programa utilizando HTML, CSS y JavaScript que solicite dos números al usuario y permita suma, restar, multiplicar o dividir dichos números y muestre el resultado.
Alójalo de manera estática en GitHub Pages y comparte el enlace de dicha página.
*/


function sumar() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

if (!isNaN(num1) && !isNaN(num2)) {
    var result = num1 + num2;
    alert("El resultado de la suma es: " + result);
} else {
alert("Ingresa números válidos");
};
}

function restar() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

if (!isNaN(num1) && !isNaN(num2)) {
    var result = num1 - num2;
    alert("El resultado de la resta es: " + result);
} else {
    alert("Ingresa números válidos");
};
}

function multiplicar() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    if (!isNaN(num1) && !isNaN(num2)) {
      var result = num1 * num2;
    alert("El resultado de la multiplicación es: " + result);
} else {
    alert("Ingresa números válidos");
};
}

function dividir() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    if (!isNaN(num1) && !isNaN(num2)) {
if (num2 !== 0) {
        var result = num1 / num2;
        alert("El resultado de la división es: " + result);
    } else {
        alert("No se puede dividir entre 0");
    }
} else {
    alert("Ingresa un dato");
    };
}
