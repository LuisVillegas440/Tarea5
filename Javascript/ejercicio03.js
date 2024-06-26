function perfecto(){
    let numero = parseInt(document.querySelector("#numero1").value);
    document.querySelector("#numero1").value = "";
    document.querySelector("#resultado").innerHTML = "";

    let suma = 0;

    for(let i = 1; i < numero; i++){
        if(numero % i === 0){
            suma = suma + i;
        }
    }

    if(suma === numero){
        document.querySelector("#resultado").innerHTML += `El ${numero} es perfecto`
    } else{
        document.querySelector("#resultado").innerHTML += `El ${numero} no es perfecto`
    }
}