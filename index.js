var readlineSync = require("readline-sync");
var score = 0;

var questions = [{
  question: "Where do I live? ",
  answer: "Bangalore"
}, {
  question: "My favorite superhero would be? ",
  answer: "batman"
},
{
  question: "What is my fav color? ",
  answer: "blue"
},
{
  question: "What is my fav car? ",
  answer: "porsche"
},
{
  question: "What is my fav movie? ",
  answer: "godfather"
}
]

var scores = [
  {
    name: "Varun",
    score: 5,
  },

  {
    name: "rohit",
    score: 2,
  },
  {
    name: "mithun",
    score: 3,
  }
]

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("right answer")
    score++;
    
  } else {
    console.log("wrong!")
  }

  console.log("current score: ", score);
  console.log("*********************")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    play(questions[i].question, questions[i].answer)
  }
}

function showScores() {
  console.log("Your score: "+score);
  console.log("*********************")
  console.log("High Scores")
  console.log("*********************")
  for(var i=0; i< scores.length; i++){
    console.log(scores[i].name+" "+ scores[i].score)
  }
}
var process = require('process');
var userName = readlineSync.question("What is your name?")
console.log("Welcome "+ userName)
var choice = readlineSync.question("Would like to play a game? yes or no")

if(choice === "yes"){
  game()
  showScores()
}
else{
  process.exit(0)
}