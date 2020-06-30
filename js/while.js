// Create a while loop that uses console.log() to create the output shown below. ( 2, 4, 8, 16, ... 65536)

var x = 2
while (x <= 65536) {
    console.log(x);
    x *= 2;
}

// An ice cream seller can't go home until she sells all of her cones. First write enough code that generates a random number between 50 and 100 representing the amount of cones to sell before you start your loop. Inside of the loop your code should generate another random number between 1 and 5, simulating the amount of cones being bought by her clients. Use a do-while loop to log to the console the amount of cones sold to each person. This is a way get the random numbers for this exercise.

var allCones = Math.floor(Math.random() * 50) + 50;


do {
    var conesPurchased = Math.floor(Math.random() * 5) + 1;
    if (conesPurchased > allCones) {
        var sadConesMessage = "Nuh-uh no, I cannot sell you " + conesPurchased + " cones, I only have " + allCones + " left.";
        console.log(sadConesMessage);
    } else {
        allCones -= conesPurchased;
        var happyConesMessage = "You're buying " + conesPurchased + " cones?! Now I only got " + allCones + " cones left!";
        console.log(happyConesMessage);
    }
} while (allCones > 0)

console.log("Aight we're closed I sold all my cones!");

// alt solution
// var allCones = Math.floor(Math.random() * 50) + 50;
//
// do{
//     let cones = Math.floor(Math.random() * 5) + 1;
//     if (cones <= allCones) {
//         allCones = allCones - cones;
//         console.log(cones + " cones sold...")
//     } else {
//         console.log("Cannot sell you " + cones + " cones I only have" + allCones + "...");
//     }
// } while (allCones > 0);
// console.log("Yay! I sold them all!")
