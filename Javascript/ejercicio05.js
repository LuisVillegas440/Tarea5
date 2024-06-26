function primo() {
  let numero = parseInt(document.querySelector("#numero1").value);
  document.querySelector("#numero1").value = "";
  document.querySelector("#resultado").innerHTML = "";

  let invertido = 0;

  while (numero !== 0) {
    let digito = numero % 10;
    invertido = invertido * 10 + digito;
    numero = Math.floor(numero / 10);
  }
  document.querySelector(
    "#resultado"
  ).innerHTML = `el numero invertido es ${invertido}`;
}
