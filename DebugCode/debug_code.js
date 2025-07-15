    
function performOperation(){
    // Get user input from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
    // Perform the operation
        let result = multiply(num1, num2);
        // Display the result
        displayResult(result);
    } else {
        displayResult('Please enter valid numbers');
    }
}

function multiply(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;
    // Multiply the numbers
    return a * b;
}

function displayResult(result) {
    // Display the result in the paragraph element
    const resultElement = document.getElementById('result');
    resultElement.textContent = `The result is: ${result}`;
}

// Practice task
// 1. You need to perform arithmetic operations
// such as addition, multiplication, and division
// simultaneously using the same function.
// 2. Additionally, you need to check the flow of the code,
// which will depend on the arithmetic operation you are performing first.
// 3. Also, try assigning one value in the form of characters
// and observe how this value is displayed using the debugger.