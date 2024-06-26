function fibonnaci() {
  let numeros1 = parseInt(document.querySelector("#numero1").value);

  document.querySelector("#numero1").value = "";
  document.querySelector("#resultado").innerHTML = "";

  let a = 0;
  let b = 1;

  for (let i = 2; i < numeros1; i++) {
    let suma = a + b;
    document.querySelector("#resultado").innerHTML += `${suma}<br>`;
    a = b;
    b = suma;
  }
}
