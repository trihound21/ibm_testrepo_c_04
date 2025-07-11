let length;
let width;

function calculateArea() {
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);

    let area = length * width;

    document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
   }

// Practice task
// In this task you need to create a function called groceryTracker
// to calculate the total amount of the purchased grocery item.

// For this:
// 1. Include the following in the HTML File:
// You need to create at least three input boxes
// with ID named as "grocery1" and so on.
// Also Label them using <label> as "Enter first grocery amount" and so on.
// Create a button that calculates the total expenditure on the grocery purchases.


// 2. Include the following in the JavaScript file:
// Create a function which will accept these amount entered by users as a parameter.
// Then write the logic to calculate the total amount spent on the grocery purchase.
// Call this function in such a way so that after clicking on the button,
// it shows the total amount for the grocery purchase.

// Ex. Display
// Enter Grocery-1 Amount: $0.00
// Enter Grocery-2 Amount: $0.00
// Enter Grocery-3 Amount: $0.00
// Button: Calculate Total Amount
// Output: 'The total amount is: $0.00'
