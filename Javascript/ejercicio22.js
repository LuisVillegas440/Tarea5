function mayor(){
    let numero1 = parseInt(document.querySelector("#numero1").value);
    let numero2 = parseInt(document.querySelector("#numero2").value);
    document.querySelector("#numero1").value = "";
    document.querySelector("#numero2").value = "";
    document.querySelector("#resultado").innerHTML = "";


    if(numero1 > numero2){
        document.querySelector("#resultado").innerHTML = `El primero es mayor`;
    } else if (numero2 > numero1) {
        document.querySelector("#resultado").innerHTML = `El segundo es mayor`;
    } else {
        document.querySelector("#resultado").innerHTML = `Son iguales`
    }
   
}