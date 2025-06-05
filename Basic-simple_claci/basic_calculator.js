let display = document.getElementById("display");

function appendNumber(num) {
  display.value += num;
}

function appendOperator(op) {
  const lastChar = display.value.slice(-1);
  if ("+-*/".includes(lastChar)) {
    display.value = display.value.slice(0, -1) + op; // Replace last operator
  } else {
    display.value += op;
  }
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    if (display.value.includes("/0")) {
      throw "Division by zero!";
    }
    display.value = eval(display.value);
  } catch (e) {
    display.value = "Error";
  }
}

// Optional: Support keyboard input
document.addEventListener("keydown", function (e) {
  const allowed = "0123456789+-*/.";
  if (allowed.includes(e.key)) {
    appendNumber(e.key);
  } else if (e.key === "Enter") {
    calculate();
  } else if (e.key === "Backspace") {
    deleteLast();
  } else if (e.key === "Escape") {
    clearDisplay();
  }
});
