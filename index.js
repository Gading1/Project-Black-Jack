// Pelajaran 1 || Makin a Blackjack Game
let player = {
  name: "Per",
  chips: 145,
};
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = " You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }

  messageEl.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}

//
//
// Pelajaran 2

// let age = 21;

// if (age <= 21) {
//   console.log("You can not enter the club!");
// } else {
//   console.log("Welcome!");
// }

//
//
// Pelajaran 3

// let age = 100;
// if (age < 100) {
//   console.log("Not Elegible");
// } else if ((age = 100)) {
//   console.log("Here is your birthday card from the King!");
// } else {
//   console.log("Not elegible, you have already gotten one");
// }

//
//
// Pelajaran 4

// let firstCard = 10;
// let secondCard = 11;

// let sum = firstCard + secondCard;

// if (sum < 21) {
// console.log("Do you want to draw a new card? 😊");
// } else if (sum === 21) {
// console.log("Wohoo!!, You've got Blackjack! 🥳");
// } else if (sum > 21) {
//     console.log("You're out of the game! 😭");
//   }

//
//
// Pelajaran 5 | Arrays - ordered lists of items

//   0 indexed
//   let featuredPosts = [
//   "Check out my Netflix clone", // 0
//   "Here's the code for my project", // 1
//   "I've just relaunched my portofolio", // 2
//   ];

//   console.log(featuredPosts.length); // Index yang keluar adalah index terakhir + 1 jadinya yang akan keluar adalah index 3

// let messages = [
//   "Hey, how's it going",
//   "I'm great, thank you! How about you?",
//   "All good. Been working on my portofolio lately.",
//   "Same here!",
//   "Great to hear",
// ];

// for (let i = 0; i < 5; i += 1) {
//   console.log(messages[i]);
// }

// let newMessage = "Same here!";
// // messages.push(newMessage);

// messages.pop();
// console.log(messages);

// Pelajaran 6 | Count / Loop
//    START          FINISH      STEP SIZE
// for (let count = 10; count < 21; count += 1) {
//   console.log(count);
// }

// for (let count = 10; count < 101; count += 10) {
//   console.log(count);
// }

// i++ === i+= 1

// let cards = [7, 3, 9];

// for (let i = 0; i < cards.length; i++) {
//   console.log(cards[i]);
// }

// let sentence = ["Hello ", "my ", "name ", "is ", "per"];
// let greetingEl = document.getElementById("greeting-el");

// for (let i = 0; i < sentence.length; i++) {
//   greetingEl.innerText += " " + sentence[i];
// }

// Pelajaran 7 | Returning values in functions

// let player1Time = 102;
// let player2Time = 107;

// cmd+d - ctrl+d
// function getFastestRaceTime() {
//   if (player1Time < player2Time) {
//     return player1Time;
//   } else if (player2Time < player1Time) {
//     return player2Time;
//   } else {
//     return player1Time;
//   }
// }

// let FastestRace = getFastestRaceTime();

// function getTotalRaceTime() {
//   return player1Time + player2Time;
// }

// let totalTime = getTotalRaceTime();

// console.log(totalTime)

// | BATAS |

// let randomNumber = Math.random() * 6;

// let randomNumber = Math.floor(Math.random() * 7);

// function rollDice() {
//   let randomNumber = Math.floor(Math.random() * 7);
//   return randomNumber;
// }

// console.log(rollDice());

// Pelajaran 6 | The logical AND operator
// let hasCompletedCourse = true;
// let givesCertificate = true;

// if (hasCompletedCourse === true && givesCertificate === true) {
//   generatedCertificate();
// }

// function generatedCertificate() {
//   console.log("Generating certificate....");
// }

// ||||||||||||||||||||||||||||||||||||||||||||||

// let hasSolvedChallenge = false;
// let hasHintsLeft = false;

// if (hasSolvedChallenge === false && hasHintsLeft === false) {
//   showSolution();
// }

// function showSolution() {
//   console.log("Showing the solution....");
// }

// ||||||||||||||||||||||||||||||||||||||||||||||

// let likesDocumentaries = true;
// let likesStartups = true;

// if (likesDocumentaries === true || likesStartups === true) {
//   recommendedMovie();
// }

// function recommendedMovie() {
//   console.log("Hey, check out this new film we think you will like!");
// }

//
//
// Pelajaran 8 || Intro to objects
// Objects - store data in-depth - composite / complex data type
// key-value pairs

// let course = {
//   title: "Learn CSS Grid for free",
//   lessons: 15,
//   creator: "Per Harald Borgen",
//   length: 63,
//   level: 2,
//   isFree: true,
//   tags: ["html", "css"],
// };

// console.log(course.tags);
