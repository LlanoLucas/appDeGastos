const personas = [];
const montos = [];
const listado = getElementById("lista-automatica");
const pagos = getElementById("monto");
const total = getElementById("total");
const nombres = getElementById("persona");

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
  li.appendChild(text);
  listado.appendChild(li);
}
