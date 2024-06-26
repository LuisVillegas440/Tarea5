function par(){
    let numero = parseInt(document.querySelector("#numero1").value);
    document.querySelector("#numero1").value = "";
    document.querySelector("#resultado").innerHTML = "";
    for(let i = 1; i <= numero; i++){
        if(i % 2 === 0){
        document.querySelector("#resultado").innerHTML += `${i}<br>`;
        }
        
    }
   
}