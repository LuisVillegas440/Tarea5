let arreglo = [];
const numero1Input = document.getElementById("numero1");
const arregloSpan = document.getElementById("arreglo");
const resultadoLabel = document.getElementById("resultado");

numero1Input.addEventListener("keydown", function (ev) {
  const valor = parseInt(numero1Input.value);
  if (ev.key == "Enter" && valor != "") {
    arreglo.push(valor);
    numero1Input.value = "";
    arregloSpan.innerText = arreglo;
  }
});
function pares() {
  let pares = [];
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] % 2 === 0) {
      pares.push(arreglo[i]);
    }
  }
  resultadoLabel.innerText = "";
  resultadoLabel.innerText += `${pares}`;
  reiniciar();
}
function reiniciar() {
  arreglo = [];
  /* arregloSpan.innerText = arreglo;  <--para que no se mantenga en pantalla los numeros */
}
