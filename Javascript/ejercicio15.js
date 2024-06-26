function espacio() {
    let frase = document.querySelector("#numero1").value;
  
    document.querySelector("#numero1").value = "";
    document.querySelector("#resultado").innerHTML = "";

    let palabras = frase.split(" ");

    for(let i = 0; i < palabras.length; i++){
        
    }
    document.querySelector("#resultado").innerHTML = `Vocales encontradas: ${palabras}`;
   
    
  }
