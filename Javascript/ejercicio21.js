function bisiesto(){
    let numero = parseInt(document.querySelector("#numero1").value);
    document.querySelector("#numero1").value = "";
    document.querySelector("#resultado").innerHTML = "";


    if(numero % 4 === 0 && numero % 100 !== 0 || numero % 400 === 0 ){
        document.querySelector("#resultado").innerHTML = `${numero} es año bisiesto`;
    } else {
        document.querySelector("#resultado").innerHTML = `${numero} no es un año bisiesto`;
    }
   
}