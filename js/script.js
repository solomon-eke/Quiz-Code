// Initializing variables

let i = 0;
let seconds = 75;
let score = 0;
let questionNum = 0;
let interval;

let timer = document.getElementById("timer");
let startBtn = document.getElementById("start-btn");
let answerOne = document.getElementById("answerOne");
let answerTwo = document.getElementById("answerTwo");
let answerThree = document.getElementById("answerThree");
let answerFour = document.getElementById("answerFour");
let answerButtons = document.getElementById("answer-buttons");
let finalScore = document.getElementById("finalscore");
let questionElement = document.getElementById("question");
let answerButtonsElement = document.getElementById("answer-buttons");
let questionContainerElement = document.getElementById("question-container");
let retakeBtn = document.getElementById("retake-btn");
let highScoresContainer = document.getElementById("highscores-container");
let highScoresBtn = document.getElementById("highscores-btn");
let submitBtn = document.getElementById("submit-btn");
let inputText = document.getElementById("input-text");
let questionContainer = document.getElementById("question-container");
let scoreContainer = document.getElementById("score-container");
let messageDiv = document.querySelectorAll("message");
let highScoresLink = document.querySelectorAll("highscoreslink");

// Start Timer as soon as button is clicked
function startTimer() {
  timer.textContent = 75;

  initiateQuestions(questionNum);
  interval = setInterval(function() {
    seconds--;
    if (seconds === 0) {
      clearInterval(seconds); // Stops timer at 0
    }
    timerParameters();
  }, 1000);
}

function timerParameters() {
  if (seconds < 10) {
    seconds = "0" + seconds.toString();
  }
  if (seconds <= 0) {
    clearInterval(interval);

    document.getElementById("timer").innerHTML = "Expired!";
  }
  timer.textContent = seconds;
}

// Starting the quiz
document.getElementById("answer-buttons").hidden = true; // Keeps button questions hidden
// Start the quiz, hides the button after user clicks
function startGame() {
  questionContainer.setAttribute("style", "display: block;");
  startBtn.classList.add("hide");
  questionContainerElement.classList.remove("hide");
  document.getElementById("start-btn").style.visibility = "hidden";
  initiateQuestions();
}

// Setting up initial questions
function initiateQuestions() {
  document.getElementById("answer-buttons").hidden = false; // Reveals button questions
  answerOne.hidden = false;
  answerTwo.hidden = false;
  answerThree.hidden = false;
  answerFour.hidden = false;

  if (i === questions.length) {
    highScores();
  } else {
    document.getElementById("question").textContent = questions[i]["title"];
    document.getElementById("answerOne").textContent =
      questions[i]["choices"][0];
    document.getElementById("answerTwo").textContent =
      questions[i]["choices"][1];
    document.getElementById("answerThree").textContent =
      questions[i]["choices"][2];
    document.getElementById("answerFour").textContent =
      questions[i]["choices"][3];
  }
}

// getting individual questions
document.getElementById("answerOne").addEventListener("click", function() {
  if (questions[i]["choices"][0] === questions[i]["answer"]) {
    document.getElementById("message").textContent = "Correct!";
    score++;
  } else {
    document.getElementById("message").textContent = "Incorrect!";
    seconds -= 15;
  }
  i++;
  initiateQuestions();
});

document.getElementById("answerTwo").addEventListener("click", function() {
  if (questions[i]["choices"][1] === questions[i]["answer"]) {
    document.getElementById("message").textContent = "Correct!";
    score++;
  } else {
    document.getElementById("message").textContent = "Incorrect!";
    seconds -= 15;
  }
  i++;
  initiateQuestions();
  timerParameters();
});

document.getElementById("answerThree").addEventListener("click", function() {
  if (questions[i]["choices"][2] === questions[i]["answer"]) {
    document.getElementById("message").textContent = "Correct!";
    score++;
  } else {
    document.getElementById("message").textContent = "Incorrect!";
    seconds -= 15;
  }
  i++;
  initiateQuestions();
});

document.getElementById("answerFour").addEventListener("click", function() {
  if (questions[i]["choices"][3] === questions[i]["answer"]) {
    document.getElementById("message").textContent = "Correct!";
    score++;
  } else {
    document.getElementById("message").textContent = "Incorrect!";
    seconds -= 15;
  }
  i++;
  initiateQuestions();
});

// Setting up high scores
function highScores() {
  questionContainer.setAttribute("style", "display: none;");
  scoreContainer.setAttribute("style", "display: block;");

  message.innerHTML = ""; // Hides messages
  // Hides scores
  answerOne.remove();
  answerTwo.remove();
  answerThree.remove();
  answerFour.remove();
  finalScore.textContent = seconds; // Adds final score
  document.getElementById("question").textContent = "You made it!";
  timerParameters();
  clearInterval(interval); // Stops Timer
}

// adding event Listeners
startBtn.addEventListener("click", startGame);
startBtn.addEventListener("click", startTimer);

// Adding names to local storage

// Connect submit button to form
submitBtn.addEventListener("click", function(event) {
  event.preventDefault();
  message.innerHTML = ""; // Hides messages

  // Create user object from submission
  var user = {
    Name: inputText.value.trim()
  };
  // set new submission
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("seconds", JSON.stringify(seconds));

  // Store info with submit button
  submitBtn.addEventListener("click", function() {
    localStorage.setItem("submitBtn", JSON.stringify(user));
    localStorage.setItem("seconds", JSON.stringify(seconds));
  });
});

// Highscores button clicked
highScoresBtn.addEventListener("click", function(event) {
  scoreContainer.setAttribute("style", "display: none;");
  retakeBtn.setAttribute("style", "display: block;");
  document.getElementById("question").textContent = "High Scores";
  submitBtn.remove();
  inputText.remove();
  highScoresBtn.remove();
  highScoresBtn.remove();
  // get most recent submission
  var lastUser = JSON.parse(localStorage.getItem("user")); // Changes object back to string
  question.textContent = lastUser.Name + ": " + localStorage.getItem("seconds");
});
