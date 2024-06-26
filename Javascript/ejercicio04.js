function primo(){
    let numero = parseInt(document.querySelector("#numero1").value);
    document.querySelector("#numero1").value = "";
    document.querySelector("#resultado").innerHTML = "";

    let esPrimo = true;

    for(let i = 2; i < numero; i++){
        if (numero % i === 0){
            esPrimo = false;
            break;
        }
    }
    if(esPrimo){
        document.querySelector("#resultado").innerHTML = `${numero} es primo`
    } else{
        document.querySelector("#resultado").innerHTML = `${numero} no es primo`
    }
}