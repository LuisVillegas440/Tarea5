function par(){
    let numero = parseInt(document.querySelector("#numero1").value);
    document.querySelector("#numero1").value = "";
    document.querySelector("#resultado").innerHTML = "";


    if(numero >= 18){
        document.querySelector("#resultado").innerHTML = `Usted es mayor de edad`;
    } else {
        document.querySelector("#resultado").innerHTML = `Usted no es mayor de edad`;
    }
   
}

