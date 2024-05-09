let display = document.getElementById('display');

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  let result;
  try {
    result = eval(display.value);
    if (isNaN(result) || !isFinite(result)) {
      throw new Error('Invalid input');
    }
    display.value = result;
  } catch (error) {
    display.value = 'Error';
  }
}
