function fraseCaracter() {
    let frase = document.querySelector("#numero1").value;
  
    document.querySelector("#numero1").value = "";
    document.querySelector("#resultado").innerHTML = "";

    let nuevaFrase = "";

    for(let i = 0; i < frase.length; i++){
        if(!isDigit(frase[i])){
            nuevaFrase += frase[i];
        }

    }
    document.querySelector("#resultado").innerHTML = `Vocales encontradas: ${nuevaFrase}`;

    function isDigit(char){
        return char >= '0' && char <= '9';
    }
  }