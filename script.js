// Agrega a la pantalla el valor de botón de la calculadora al que se le haga click
function agregar(valor) {
  document.getElementById("pantalla").value += valor;
}

// Función  para realizar las operaciones matemáticas y mostrarlas en la pantalla
function calcular() {
  const operacion = document.getElementById("pantalla").value;
  const resultado = eval(operacion);
  document.getElementById("pantalla").value = resultado;
}

// Borra o elimina todo valor ingresado en la pantalla de la calculadora
function borrar() {
  document.getElementById("pantalla").value = "";
}
