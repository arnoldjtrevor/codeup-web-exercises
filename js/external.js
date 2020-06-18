console.log("Hello from external Javascript!");

// #1
alert("Hello! Welcome to my Website");

// #2
let color = prompt("What is your favorite color?");
alert("Wow, " + color + " is my favorite color too!");

// #3

// #3.1
// You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?

let littleMermaid = parseInt(prompt("How many days did you rent The Little Mermaid?"));
let brotherBear = parseInt(prompt("How many days did you rent Brother Bear?"));
let hercules = parseInt(prompt("How many days did you rent Hercules?"));
alert("You owe $" + (littleMermaid + brotherBear + hercules) * 3 + " for rental charges :(");

// #3.2
// Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

let googleHours = prompt("How many hours did you work for Google?");
let amazonHours = prompt("How many hours did you work for Amazon?");
let facebookHours = prompt("How many hours did you work for Facebook");

const googleRate = 400;
const amazonRate = 300;
const facebookRate = 350;

let totalPay = googleHours * googleRate +
    amazonHours * amazonRate +
    facebookHours * facebookRate;

alert("You made $" + totalPay + " this pay period!");

// #3.3
//A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.

let isClassOpen = confirm("Is there room in the class?");
let isScheduleOpen = confirm("Does this class work with your schedule?");

alert("You may register: " + (isClassOpen && isScheduleOpen));

// #3.4
//A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.

let productQuantity = parseInt(prompt("How many items are in your cart?"));
let offerExpired = confirm("Press OK if the offer is not expired.");
let premiumMember = confirm("Press OK if you are a premium member.");

alert("Offer Applied: " + (offerExpired && (productQuantity > 2 || premiumMember)));