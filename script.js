const h1 = document.querySelector("h1");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const resultado = document.querySelector("#resultado");
const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", sumarInputValues);

function sumarInputValues(e) {
  e.preventDefault();
  const resultadoOperacion = parseInt(input1.value) + parseInt(input2.value);

  resultado.innerHTML = "Resultado: " + resultadoOperacion;
}
