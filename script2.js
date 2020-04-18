window.onload = function () {
  let threeMinutes = 60 * 3,
      display = document.querySelector('#time');
  startTimer(threeMinutes, display);
  this.startQuiz();
};

let sec = 180;
function startTimer(){
 
      let timer = setInterval(function(){
          sec--;
          document.getElementById('time').innerHTML = sec;
          if (sec < 0) {
              clearInterval(timer);
              alert("Time is up!")
          }
      }, 1000);
  }

  if (sec <= 0) {
    function highScores() {
      let x = document.getElementById("highScore");
      x.style.visibility = "visible";
      } 
  }

let questionDiv = document.querySelector("#question");
let questionNumberTracker = 0;
let points = 0;
let pointsDiv = document.querySelector("#points");
    pointsDiv.innerText = 'Points: ' + points;
let quizQuestions = [
  {
    question: "Which country is known for their chef knives?",
    choices: ["Turkey", "Iceland","South Korea","Germany"],
    answer: "Germany",
  },
  {
    question: "What kind of cut is a julienne?",
    choices: ["Ultra-thin", "Chunky","Perfect squares","Ultra-fine"],
    answer: "Ultra-thin"
  },
  {
    question: "What does blanching entail?",
    choices: ["Freezing briefly", "Boiling then icing","Flash-frying","Dehydrating"],
    answer: "Boiling then icing"
  },
  {
    question: "Which one is NOT found in a kitchen?",
    choices: ["Grinder", "Convection oven","Metal snake","Tongs"],
    answer: "Metal snake"
  },
  {
    question: "Who is second in command in a kitchen??",
    choices: ["Line cook", "Chef","Sous-chef","Expo manager"],
    answer: "Sous-chef"
  },
];


function createQuestion(question,options) {
  
  let h2 = document.createElement('h2');
  let text = document.createTextNode(question); 
  h2.appendChild(text);
  questionDiv.appendChild(h2);

  for(i=0;i<options.length;i++) {
    let button = document.createElement("button");
    questionDiv.appendChild(button);
    button.innerHTML = options[i];
    button.addEventListener ("click", verifyAnswer);
  }
  
}
function verifyAnswer(event) {  
  console.log(event.target.innerText);
  //Verify if the text is equal to answer.
  if(event.target.innerText ===quizQuestions[questionNumberTracker-1].answer) {
    points++; 
    pointsDiv.innerText = 'Points: ' + points;
    alert ("Yeah, I mean technically that's right, just, you know, don't get a big head about it.")
  } else {
      alert ("This is why you were never good enough for your father.")
      };
      function failure() {
        sec -= 25;
        display = document.querySelector('#time');
        document.getElementById('time').innerHTML= display + sec;
        };
        failure();
    displayNextQuestion();
    
    }



function displayNextQuestion() {
  while (questionDiv.hasChildNodes()) {
    questionDiv.removeChild(questionDiv.lastChild);
  }
  createQuestion(quizQuestions[questionNumberTracker].question,quizQuestions[questionNumberTracker].choices);
  questionNumberTracker++;
}
function startQuiz() {
  displayNextQuestion();
}

$("#submit").on("click", function() {
  let addScore = document.getElementById("highScores");
  localStorage.setItem("highScore", points);
  localStorage.getItem("highScore").innerText;
})


