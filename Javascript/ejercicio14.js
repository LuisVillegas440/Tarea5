function frase() {
    let frase = document.querySelector("#numero1").value;
    let minuscula = frase.toLowerCase();
  
    document.querySelector("#numero1").value = "";
    document.querySelector("#resultado").innerHTML = "";

    let contadorVocales = [];

    for(let i = 0; i < minuscula.length; i++){
        if(minuscula[i] === "a" ||  minuscula[i] === "e" || minuscula[i] === "i" || minuscula[i] === "o" || minuscula[i] === "u"){
            contadorVocales.push(minuscula[i]);
        }

    }
    document.querySelector("#resultado").innerHTML = `Vocales encontradas: ${contadorVocales}`;
  }
