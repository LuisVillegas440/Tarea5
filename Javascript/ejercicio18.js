/* const arregloSpan = document.getElementById("arreglo"); */
/* const resultadoLabel = document.getElementById("resultado"); */

/* function parImpar() {
  let numero1Input = parseInt(document.querySelector("#numero1").value);
  document.querySelector("#numero1").value = "";
  document.querySelector("#resultado").innerHTML = "";
  if (numero1Input % 2 === 0) {
    document.querySelector("#resultado").innerHTML = `Es par ${numero1Input}`;
  } else {
    document.querySelector("#resultado").innerHTML = `Es impar ${numero1Input}`;
  }
} */

  let arreglo = [];
const numero1Input = document.getElementById("numero1");
const arregloSpan = document.getElementById("arreglo");
const resultadoLabel = document.getElementById("resultado");
const resultadoLabel2 = document.getElementById("resultado2");

numero1Input.addEventListener("keydown", function (ev) {
  const valor = parseInt(numero1Input.value);
  if (ev.key == "Enter" && valor != "") {
    arreglo.push(valor);
    numero1Input.value = "";
    arregloSpan.innerText = arreglo;
  }
});
function paresImpares() {
  let pares = [];
  let impares = [];
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] % 2 === 0) {
      pares.push(arreglo[i]);
    } else {
        impares.push(arreglo[i]);
    }
  }
  resultadoLabel.innerText = "";
  resultadoLabel2.innerText = "";
  resultadoLabel.innerText += `${pares}`;
  resultadoLabel2.innerText += `${impares}`;
  reiniciar();
}
function reiniciar() {
  arreglo = [];
  /* arregloSpan.innerText = arreglo;  <--para que no se mantenga en pantalla los numeros */
}
