"use strict";

do {
    var userNumber = Number(prompt("Pick an odd number between 1 and 50"));

    if (userNumber % 2 === 0) {
        alert(userNumber + " is not an odd number. Please do better.")
    } else if (userNumber < 1 || userNumber > 50) {
        alert(userNumber + " is not between 1 and 50. Please do better.");
    } else if (isNaN(userNumber)) {
        alert("You didn't even pick a number, go girl give us nothing!");
    } else {
        alert("Congrats, " + userNumber + " is an odd number between 0 and 50. I am so proud of everything you've accomplished here today <3");
        break;
    }
} while (true)


for (var i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        continue;
    }
    if (i === userNumber) {
        console.log("Chile anyways.. skipping number: " + i);
    } else {
        console.log("Here is a GOOD odd number: " + i);
    }
}