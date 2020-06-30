// Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)

function showMultiplicationTable(numInput) {
    for (var n = 1; n <= 10; n++) {
        var answer = numInput * n;
        console.log(numInput + " x " + n + " = " + answer)
    }
}

showMultiplicationTable(8);

// Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example:

for (var i = 1; i <= 10; i++){
    var randomNumber = Math.floor(Math.random() * 180) + 20;
    if (randomNumber % 2 === 0){
        console.log(randomNumber + " is even!");
    } else {
        console.log(randomNumber + " is odd");
    }
}

// Create a for loop that uses console.log to create the output shown below. (1 , 22, 333, 4444, ... 999999999)

for(var i = 1; i < 10; i++){
 	console.log(i.toString().repeat(i));
}

// Create a for loop that uses console.log to create the output shown below. (100, 95, 90, 85, ... 5")

for(var i = 100; i >0; i-=5){
    console.log(i);
}