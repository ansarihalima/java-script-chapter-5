// //////////////////////Question-1


// var firstNumber = parseFloat(prompt("Enter the first number:"));
// var secondNumber = parseFloat(prompt("Enter the second number:"));
// var sum = firstNumber + secondNumber;
// // Display the result in the browser
// document.write("The sum of " + firstNumber + " and " + secondNumber + " is: " + sum + "<br>");


// //////////////////////Question-2


// var firstNumber = parseFloat(prompt("Enter the first number for subtraction:"));
// var secondNumber = parseFloat(prompt("Enter the second number for subtraction:"));
// var subtractionResult = firstNumber - secondNumber;



// // Perform multiplication and store the result in a new variable
// var multiplicationResult = firstNumber * secondNumber;

// // Perform division and store the result in a new variable
// var divisionResult = firstNumber / secondNumber;

// // Perform modulus operation and store the result in a new variable
// var modulusResult = firstNumber % secondNumber;

// // the results in the browser
// document.write("Subtraction Result: " + subtractionResult + "<br>");
// document.write("Multiplication Result: " + multiplicationResult + "<br>");
// document.write("Division Result: " + divisionResult + "<br>");
// document.write("Modulus Result: " + modulusResult);

//////////////////////Question-3

// // Declare a variable.
// var myVariable ;


// document.write("Value after variable declaration is: " + myVariable + "<br>");

// //Initialize the variable with some number.
// myVariable = 5;

// //Show the initial value of the variable.
// document.write("Initial value :" + myVariable + "<br>");

// //Increment the variable.
// myVariable++;

// //Show the value of the variable after increment.
// document.write("Value after increment is: " + myVariable + "<br>");

// //Add 7 to the variable.
// myVariable += 7;

// //Show the value of the variable after addition.
// document.write("Value after addition is: " + myVariable + "<br>");

// //Decrement the variable.
// myVariable--;

// //Show the value of the variable after decrement.
// document.write("Value after decrement is: " + myVariable + "<br>");

// //Show the remainder after dividing the variable's value by 3.
// var remainder = myVariable % 3;

// //Output the remainder.
// document.write("The remainder is: " + remainder);


//////////////////////Question-4

var ticketPrice = 600;
var totalCost = ticketPrice * 5;
document.write("Total cost of buying 5 tickets to a movie is: " + totalCost + " PKR");

//////////////////////Question-5

document.write("<h2>Multiplication Table of 4</h2>");

for (var i = 1; i <= 10; i++) {
    document.write("4 x " + i + " = " + (4 * i) + "<br>");
}
 //////////////////////Question-6

var celsiusTemperature = 30;
var fahrenheitTemperature = (celsiusTemperature * 9 / 5) + 32;
document.write(celsiusTemperature + "°C is " + fahrenheitTemperature + "°F<br>");

var fahrenheitTemp = 86;
var celsiusTemp = (fahrenheitTemp - 32) * 5 / 9;
document.write(fahrenheitTemp + "°F is " + celsiusTemp + "°C");

 //////////////////////Question-6


// Variables
var priceItem1 = 101; // Price of item 1
var priceItem2 = 40; // Price of item 2
var quantityItem1 = 8; // Ordered quantity of item 1
var quantityItem2 = 1; // Ordered quantity of item 2
var shippingCharges = 50; // Shipping charges

var totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;

// Display receipt in the browser
document.write("<h2>Receipt</h2>");
document.write("<p>price of Item 1 is" + " " + priceItem1 + "</p>");
document.write("<p>Quantity of Item 1 is" + " " + quantityItem1 + "</p>");
document.write("<p>price of Item 2 is" + " " + priceItem2 + "</p>");
document.write("<p>Quantity of Item 2 is" + " " + quantityItem2 + "</p>");
document.write("<p>Shipping Charges: " + shippingCharges + "</p>");
document.write("<p>Total Cost of your order is" + " " + totalCost + "</p>");

//////////////////////Question-7

// Variables
var totalMarks = 500; 
var marksObtained = 430; // Marks obtained by the student

// Calculate percentage
var percentage = (marksObtained / totalMarks) * 100;

// Display result in the browser
document.write("<h2>Result</h2>");
document.write("<p>Total Marks: " + totalMarks + "</p>");
document.write("<p>Marks Obtained: " + marksObtained + "</p>");
document.write("<p><strong>Percentage: " + percentage + "%</strong></p>");

//////////////////////Question-8

// Variables
var usdToPkrRate = 104.80; // Exchange rate: 1 US Dollar = 104.80 Pakistani Rupee
var sarToPkrRate = 28; // Exchange rate: 1 Saudi Riyal = 28 Pakistani Rupee
var usdAmount = 10; // Amount in US dollars
var sarAmount = 25; // Amount in Saudi Riyals

// Convert to Pakistani Rupees in a single expression
var totalPkr = (usdAmount * usdToPkrRate) + (sarAmount * sarToPkrRate);

// Display result
document.write("<h2>Total Currency Conversion</h2>");
document.write("<p>Total Amount in Pakistani Rupees: " + totalPkr + "</p>");

//////////////////////Question-9

// Initialize a variable with some number
var initialNumber = 10;
var result = ((initialNumber + 5) * 10) / 2;

// Display the result
document.write("<h2>Answer-9</h2>")
document.write("Result:", result)
console.log("Result:", result);

//////////////////////Question-10

// Store the current year in a variable
var currentYear = 2024;

// Store their birth year in a variable
var birthYear = 2000;

// Calculate their possible ages
var age1 = currentYear - birthYear;
var age2 = age1 - 1;

// Output the result
console.log("They are either " + age1 + " or " + age2 + " years old.");


//////////////////////Question-11
// Store the radius into a variable
var radius = 5;

// Calculate the circumference
var circumference = 2 * Math.PI * radius;

// Calculate the area
var area = Math.PI * radius * radius;

// Output the results
console.log("The circumference is " + circumference.toFixed(2));
console.log("The area is " + area.toFixed(2));

