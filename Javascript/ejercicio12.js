let arreglo = [];
const numero1Input = document.getElementById("numero1");
const arregloSpan = document.getElementById("arreglo");
const resultadoLabel = document.getElementById("resultado");



numero1Input.addEventListener("keydown", function (ev) {
  const valor = numero1Input.value;
  if (ev.key == "Enter" && valor != "") {
    arreglo.push(valor);
    numero1Input.value = "";
    arregloSpan.innerText = arreglo;
  }
});
function nombres() {
  let nombres = [];
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] !== "Ana") {
      nombres.push(arreglo[i]);
    }
  }
resultadoLabel.innerText = "";
  resultadoLabel.innerText += `${nombres}`;
  reiniciar();
}
function reiniciar() {
  arreglo = [];
  arregloSpan.innerText = arreglo; /* <--para que se mantenga en pantalla los numeros */
}
