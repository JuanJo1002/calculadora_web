// Referencia al input de la pantalla
const display = document.getElementById("display");

// Añadir texto a la pantalla
function appendValue(value) {
  if (value === "π") {
    display.value += Math.PI.toFixed(8);
  } else if (value === "e") {
    display.value += Math.E.toFixed(8);
  } else if (value === "√") {
    display.value += "Math.sqrt(";
  } else if (value === "^") {
    display.value += "**";
  } else {
    display.value += value;
  }
}

// Añadir funciones científicas como sin(), cos(), etc.
function appendFunction(func) {
  display.value += `Math.${func}(`;
}

// Calcular el resultado usando eval
function calculate() {
  try {
    // Evaluamos el contenido de display
    const result = eval(display.value);
    display.value = result;
  } catch (error) {
    display.value = "Error";
  }
}

// Limpiar toda la pantalla
function clearDisplay() {
  display.value = "";
}

// Borrar el último carácter
function deleteLast() {
  display.value = display.value.slice(0, -1);
}
