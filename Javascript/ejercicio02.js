function divisores(){
    let numero = parseInt(document.querySelector("#numero1").value);
    document.querySelector("#numero1").value = "";
    document.querySelector("#resultado").innerHTML = "";
    for(let i= 1; i <= numero; i++){
        if(numero % i ===0 ){
            document.querySelector("#resultado").innerHTML += `El numero:${i} es divisor<br>`;
        }
    }

}