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
function presentar() {
  const multiplosCinco = [];
  for (let i = 0; i < arreglo.length; i++) {
    const element = arreglo[i];
    if (element % 5 == 0) {
      multiplosCinco.push(element);
    }
  }
  resultadoLabel.innerText = multiplosCinco;
  reiniciar()
}
function reiniciar() {
  arreglo = [];
  arregloSpan.innerText = arreglo;
}
