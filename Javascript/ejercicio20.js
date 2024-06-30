let arreglo = [];
const numero1Input = document.getElementById("numero1");
const arregloSpan = document.getElementById("arreglo");
const resultadoLabel = document.getElementById("resultado");
const resultadoLabel2 = document.getElementById("resultado2");
const resultadoLabel3 = document.getElementById("resultado3");

numero1Input.addEventListener("keydown", function (ev) {
  const valor = parseInt(numero1Input.value);
  if (ev.key == "Enter" && !isNaN(valor)) {
    arreglo.push(valor);
    numero1Input.value = "";
    arregloSpan.innerText = arreglo;
  }
});
function paresImpares() {
  let positivos = [];
  let negativos = [];
  let ceros = [];
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] > 0) {
      positivos.push(arreglo[i]);
    } else if (arreglo[i] < 0) {
        negativos.push(arreglo[i]);
    } else{
        ceros.push(arreglo[i]);

    }
  }
  resultadoLabel.innerText = "";
  resultadoLabel2.innerText = "";
  resultadoLabel3.innerText = "";
  resultadoLabel.innerText += `${positivos}`;
  resultadoLabel2.innerText += `${negativos}`;
  resultadoLabel3.innerText += `${ceros}`;
  reiniciar();
}
function reiniciar() {
  arreglo = [];
  /* arregloSpan.innerText = arreglo;  <--para que no se mantenga en pantalla los numeros */
}