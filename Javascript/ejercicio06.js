function multiplicacion(){
    let numeros1 = parseInt(document.querySelector("#numero1").value);
    let numeros2 = parseInt(document.querySelector("#numero2").value);

    document.querySelector("#numero1").value = "";
    document.querySelector("#numero2").value = "";
    document.querySelector("#resultado").innerHTML = "";

    let resultado = 0;

    for(let i = 0; i < numeros2; i++){
        resultado += numeros1;
        console.log(numeros2);
    }
    document.querySelector("#resultado").innerHTML = `El resultado de la multiplicación es:${resultado}`;

}