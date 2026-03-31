function calcularVoltajeFaltante(v1, v2) {
  return -(v1 + v2);
}

function calcular() {
  const v1 = parseFloat(document.getElementById('v1').value);
  const v2 = parseFloat(document.getElementById('v2').value);

  const resultado = calcularVoltajeFaltante(v1, v2);

  document.getElementById('resultado').innerText =
    'Voltaje faltante V3: ' + resultado;
}