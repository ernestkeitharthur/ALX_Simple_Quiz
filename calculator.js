// Arithmetic operation functions
function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    // Check to prevent division by zero
    if (number2 === 0) {
        return 'Error: Division by zero';
    }
    return number1 / number2;
}

// Function to get the input values and ensure they are numbers
function getNumbers() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    return { number1, number2 };
}

// Update the result in the DOM
function updateResult(result) {
    document.getElementById('calculation-result').textContent = result;
}

// Event listeners for each operation button
document.getElementById('add').addEventListener('click', function() {
    const { number1, number2 } = getNumbers();
    const result = add(number1, number2);
    updateResult(result);
});

document.getElementById('subtract').addEventListener('click', function() {
    const { number1, number2 } = getNumbers();
    const result = subtract(number1, number2);
    updateResult(result);
});

document.getElementById('multiply').addEventListener('click', function() {
    const { number1, number2 } = getNumbers();
    const result = multiply(number1, number2);
    updateResult(result);
});

document.getElementById('divide').addEventListener('click', function() {
    const { number1, number2 } = getNumbers();
    const result = divide(number1, number2);
    updateResult(result);
});
