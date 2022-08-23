function calculateIMC() {

    let peso = document.getElementById('peso').value;
    let altura = document.getElementById('altura').value;

    let imc = peso / (altura * altura);

    if (imc >= 40) {
        document.getElementById('message-imc').innerHTML = "Obesidade grave";
    } else if (imc >= 30 ) {
        document.getElementById('message-imc').innerHTML = "Obesidade";
    } else if (imc >= 25 ) {
        document.getElementById('message-imc').innerHTML = "Sobrepeso";
    }else if (imc >= 18.5 ) {
        document.getElementById('message-imc').innerHTML = "Peso ideal";
    } else {
        document.getElementById('message-imc').innerHTML = "Abaixo do peso";
    }

    document.getElementById('value-imc').innerHTML = "IMC: " + imc.toFixed(2);
}

function reload() {
    window.location.reload();
}