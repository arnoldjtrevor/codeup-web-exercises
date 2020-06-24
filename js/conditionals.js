"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

function analyzeColor(color) {
    var colorMessage = "";
    if (color === "blue") {
        colorMessage = "Sonic the Hedgehog is blue";
    } else if (color === "red") {
        colorMessage = "Knuckles the Echidna is red";
    } else if (color === "cyan") {
        colorMessage = "There are no cyan Sonic the Hedgehog characters soooooo that's not even a real color to me";
    } else {
        colorMessage = "I don't know if there's a Sonic the Hedgehog character that is " + color + "... I didn't think that far in advance.";
    }
    return colorMessage;
}

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */

console.log(analyzeColor("blue"));
console.log(analyzeColor("red"));
console.log(analyzeColor("cyan"));
console.log(analyzeColor(randomColor));


/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

function analyzeColorSwitchCase(color) {
    var colorMessage = "";
    switch (color) {
        case "blue":
            colorMessage = "Sonic the Hedgehog is blue";
            break;
        case "red":
            colorMessage = "Knuckles the Echidna is red";
            break;
        case "yellow":
            colorMessage = "Tails the Fox is yellow";
            break;
        case "violet":
            colorMessage = "Blaze the Cat is violet";
            break;
        case "cyan":
            colorMessage = "Chaos the thing is cyan.";
            break;
        default:
            colorMessage = "I don't know if there's a Sonic the Hedgehog character that is " + color +"... I didn't think that far in advance.";
            break;
    }
    return colorMessage;
}

console.log(analyzeColorSwitchCase("blue"));
console.log(analyzeColorSwitchCase("red"));
console.log(analyzeColorSwitchCase("cyan"));

console.log(analyzeColorSwitchCase(randomColor));

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

var pickColor = prompt("Hey, let's play a game! Pick a color.");
alert(analyzeColorSwitchCase(pickColor));

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal(luckyNumber, grandTotal) {
    var discountRate = 0;
    switch (luckyNumber) {
        case 0: 
            discountRate = 0;
            break;
        case 1:
            discountRate = .10;
            break;
        case 2:
            discountRate = .25;
            break;
        case 3:
            discountRate = .35;
            break;
        case 4:
            discountRate = .50;
            break;
        case 5:
            discountRate = 1;
            break;
    }
    return grandTotal - (discountRate * grandTotal);
}

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */

var luckyNumber = Math.floor(Math.random() * 6);

var totalBill = prompt("Okay, I'm bored of that. Let's play Hot-Topic Employee Simulator. I'll go first! Hewwo sweetykins uWu what was your total today <3 <3 <3");
alert("o_O thaz espensive. thankfully you have DIS MUCH Hot Cash: " + luckyNumber);
alert("So that brings your gwand total tooooo: $" + calculateTotal(luckyNumber, totalBill).toFixed(2) + " xDDDDD");

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

var userConfirm = confirm("That wasn't fun either.. would you like to just pick a number?");

if (userConfirm) {

    var userInput = prompt("Omg slay. Okay, okay, okay... what number are you picking?");

    var isNumber = !isNaN(userInput);

    if (isNumber) {

        if (userInput % 2 === 0) {
            alert("YeeaASSSSS you picked an even number! Only legends pick even numbers!");
        } else {
            alert("Your number is odd... chile anyways...");
        }

        var userNumber = parseFloat(userInput);
        alert("Your number plus 100 = " + (userNumber + 100) + "! I think that is pretty neat :)");

        if (userInput < 0) {
            alert("Your number tested negative for COVID-19 :) ");
        } else if (userInput > 0) {
            alert("Your number tested positive for COVID-19 :(");
        } else {
            alert("Your number is Zero. I do not know what means in terms of COVID-19 so like... moving on I guess.")
        }

    } else {
        alert("That is literallllly not even a number.");
    }
}
