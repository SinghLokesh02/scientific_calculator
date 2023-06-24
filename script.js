// Get the input element
const input = document.querySelector('.search');

// Function to update the input value
function updateInput(value) {
  input.value += value;
}

// Function to evaluate and display the result
function calculateResult() {
  try {
    const result = eval(input.value); // Using eval() for simplicity, but be cautious with user inputs
    input.value = result;
  } catch (error) {
    input.value = 'Error';
  }
}

// Add event listeners to the buttons
document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.button');

  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      const buttonValue = this.innerText;

      // Handle button clicks and perform calculations
      if (buttonValue === 'CE') {
        input.value = '';
      } else if (buttonValue === '=') {
        calculateResult();
      } 
      else if(buttonValue === 'C'){
        input.value = input.value.slice(0, -1);
      }
      else {
        updateInput(buttonValue);
      }

      // Perform scientific calculator operations
      if (buttonValue === 'sin') {
        const value = input.value;
        const result = Math.sin(parseFloat(value));
        input.value = result;
      } else if (buttonValue === 'cos') {
        const value = input.value;
        const result = Math.cos(parseFloat(value));
        input.value = result;
      } else if (buttonValue === 'log') {
        const value = input.value;
        const result = Math.log10(parseFloat(value));
        input.value = result;
      } else if (buttonValue === 'sqrt') {
        const value = input.value;
        const result = Math.sqrt(parseFloat(value));
        input.value = result;
      } else if (buttonValue === 'x!') {
        const value = input.value;
        const result = factorial(parseFloat(value));
        input.value = result;
      } else if (buttonValue === 'pow') {
        const values = input.value.split('^');
        if (values.length === 2) {
          const base = parseFloat(values[0]);
          const exponent = parseFloat(values[1]);
          const result = Math.pow(base, exponent);
          input.value = result;
        }
      }

      // Add more functionalities here for other operations
    });
  });
});

// Function to calculate the factorial of a number recursively
function factorial(number) {
  if (number < 0) {
    return 'Error: Factorial of a negative number is undefined';
  } else if (number === 0) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
}
