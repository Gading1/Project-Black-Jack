// let person = {
//   name: "M Gading Rizani",
//   age: " 22 years old ",
//   country: "Indonesia",
// };

// function logData() {
//   console.log(
//     person.name + " is" + person.age + "and live in" + person.country
//   );
// }

// console.log(logData());

//
//
// Practice 2 | if else

// let age = 16;

// if (age < 6) {
//   console.log("free");
// } else if (age < 18) {
//   console.log("child discount");
// } else if (age < 27) {
//   console.log("student discount");
// } else if (age < 67) {
//   console.log("full price");
// } else {
//   console.log("senior citizen discount");
// }

//
//
// practice 3 | Loops and strays

// let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"];

// console.log("The 5 largest countries in the world");
// for (let i = 0; i < largeCountries.length; i++) {
//   console.log("- " + largeCountries[i]);
// }

//
//
// Practice 4 | push,pop,unshift,shift chalange
// let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"];

// largeCountries.pop();
// largeCountries.push("Pakistan");

// largeCountries.shift();
// largeCountries.unshift("China");

// console.log(largeCountries);

//
//
// Practice 5 | Logical operators
// let dayOfMonth = 13;
// let weekday = "Friday";

// if (dayOfMonth === 13 && weekday === "Friday") {
//   console.log("😱");
// }

//
//
// Practice 6 | Rock papers scissors
// let hands = ["rock", "paper", "scissors"];

// function getHand() {
//   let randomIndex = Math.floor(Math.random() * 3);
//   return hands[randomIndex];
// }

// console.log(getHand());

// Sorting Fruits //////////////
// let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"];
// let appleShelf = document.getElementById("apple-shelf");
// let orangeShelf = document.getElementById("orange-shelf");

// function sortFruit() {
//   for (i = 0; i < fruit.length; i++) {
//     if (fruit[i] === "🍎") {
//       appleShelf.textContent += "🍎";
//     } else if (fruit[i] === "🍊") {
//       orangeShelf.textContent += "🍊";
//     }
//   }
// }

// sortFruit();
