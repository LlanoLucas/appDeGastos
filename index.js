const personas = [];
const montos = [];
const listado = document.getElementById("lista-automatica");
const pagos = document.getElementById("monto");
const cuadroInfo = document.getElementById("total");
const nombres = document.getElementById("persona");
const prueba = document.querySelector(".h1");

function añadirFila() {
  personas.push(nombres.value);
  montos.push(pagos.value);
}

function alFinal() {
  const li = document.createElement("li");
  const text = document.createTextNode(
    `${nombres.value} pagó: $${pagos.value}`
  );
  li.appendChild(text);
  listado.appendChild(li);
}

function sumarMontos(montos) {
  let suma = 0;
  for (let pago of montos) {
    suma += parseInt(pago);
  }
  return suma;
}

function mostrarPago() {
  const total = sumarMontos(montos);
  const montosIndividuales = total / montos.lentght;
  cuadroInfo.innerText = `Total: $${total}
                    A cada uno le toca aportar: $${montosIndividuales.toFixed(
                      2
                    )}`;
  listado.appendChild(cuadroInfo);
}

function repartir() {
  añadirFila();
  alFinal();
  mostrarPago();
}
