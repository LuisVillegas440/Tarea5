function par(){
    let numero = parseInt(document.querySelector("#numero1").value);
    let numero2 = parseInt(document.querySelector("#numero2").value);
    document.querySelector("#numero1").value = "";
    document.querySelector("#numero2").value = "";
    document.querySelector("#resultado").innerHTML = "";
    for(let i = numero; i <= numero2; i++){
        if(i % 2 === 0){
        document.querySelector("#resultado").innerHTML += `${i}<br>`;
        }
        
    }
   
}