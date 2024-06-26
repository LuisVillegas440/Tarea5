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
function promedio() {
  let suma = 0;
  for (let i = 0; i < arreglo.length; i++) {
    suma += arreglo[i];
  }
  let promedio = suma / arreglo.length;
  resultadoLabel.innerText = promedio;
  reiniciar()
}
function reiniciar() {
  arreglo = [];
  arregloSpan.innerText = arreglo;
}