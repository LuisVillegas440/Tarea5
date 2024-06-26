function division(){
    let numeros1 = parseInt(document.querySelector("#numero1").value);
    let numeros2 = parseInt(document.querySelector("#numero2").value);

    document.querySelector("#numero1").value = "";
    document.querySelector("#numero2").value = "";
    document.querySelector("#resultado").innerHTML = "";

    let cociente = 0;

    while(numeros1 >= numeros2){
        numeros1 -= numeros2;
        cociente++;
    }
    document.querySelector("#resultado").innerHTML = `${cociente}`;
}