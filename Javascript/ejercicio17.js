function consonante() {
    let frase = document.querySelector("#numero1").value;
    let consonantes = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";
  
    let contador = 0;
    document.querySelector("#numero1").value = "";
    document.querySelector("#resultado").innerHTML = "";


    for(let i = 0; i < frase.length; i++){
        let caracter = frase[i];
        if(esConsonante(caracter, consonantes)){
            contador++;
        }

    }
    document.querySelector("#resultado").innerHTML = `Consonantes encontradas: ${contador}`;
    function esConsonante(caracter, consonantes) {
        // Verificar si el caracter está en el string de consonantes
        // Usamos indexOf en lugar de includes
        return consonantes.indexOf(caracter) !== -1;
  }
}