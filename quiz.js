// SELECT THE ELEMENTS
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("score");

// CREATE QUESTIONS
let questions = [
  {
      question: "What does HTML stand for",
      imgSrc: "img/html.png",
      choiceA: "Correct",
      choiceB: "Wrong",
      choiceC: "Wrong",
      correct: "A"
  },
  {
      question: "What does CSS stand for",
      imgSrc: "img/css.png",
      choiceA: "Wrong",
      choiceB: "Correct",
      choiceC: "Wrong",
      correct: "B"
  },
  {
      question: "What does JS stand for",
      imgSrc: "img/js.png",
      choiceA: "Wrong",
      choiceB: "Wrong",
      choiceC: "Correct",
      correct: "C"
  }
];

// CREATE VARIABLES
const lastQuestion = questions.length - 1;
let runningQuestion = 0;

// RENDER A QUESTION
function renderQuestion() {
  let q = questions[runningQuestion];

  question.innerHTML = `<p>${q.question}</p>`;
  qImg.innerHTML = `<img src="${q.imgSrc}">`;
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
}

start.style.display = "none";
renderQuestion();
quiz.style.display = "block";
renderProgress();

// RENDER PROGRESS
function renderProgress() {
  for (let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
    progress.innerHTML += `<div class="prog" id="${qIndex}"></div>`;
  }
}

// COUNTER RENDER
