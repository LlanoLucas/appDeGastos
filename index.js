const personas = [];
const montos = [];
const listado = document.getElementById("lista-automatica");
const pagos = document.getElementById("monto");
const total = document.getElementById("total");
const nombres = document.querySelector("persona");

function repartir() {
  añadirFila();
  alFinal();
  actualizarTotal();
}

function añadirFila() {
  personas.push(nombres.value);
  montos.push(pagos.value);
}

function alFinal() {
  const li = document.createElement("li");
  const text = document.createTextNode(
    `${nombres.value} Pagó: $${pagos.value}`
  );
  addClas;
  li.appendChild(text);
  listado.appendChild(li);
}
