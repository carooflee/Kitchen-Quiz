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
    answer: "Metal Snake"
  },
  {
    question: "Who is second in command in a kitchen??",
    choices: ["Line cook", "Chef","Sous-chef","Expo manager"],
    answer: "Sous-chef"
  },
];


function createQuestion(question,options) {
  //Display question
  let h2 = document.createElement('h2');
  let text = document.createTextNode(question); 
  h2.appendChild(text);
  questionDiv.appendChild(h2);
  for(i=0;i<options.length;i++) {
    var button = document.createElement("button");
    questionDiv.appendChild(button);
    button.innerHTML = options[i];
    button.addEventListener ("click", verifyAnswer);
  }
  //Display options
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
        sec -= 10;
        document.getElementById('time').innerHTML= display + sec;
        };
        failure();
    displayNextQuestion();
    }



    function failure() {
      wrongAns -= 10;
      document.getElementById('time').innerHTML= display + wrongAns;
      };
      failure();


      
container.style.visibility = "hidden"
function startQuiz() {
  // get the clock
  let myQuiz = document.getElementById('container');

  // get the current value of the clock's display property
  let displaySetting = myQuiz.style.display;

  // also get the clock button, so we can change what it says
  let startButton = document.getElementById('startBtn');

  // now toggle the clock and the button text, depending on current state
  if (displaySetting == 'block') {
    // clock is visible. hide it
    myQuiz.style.display = 'none';
    // change button text
    startButton.innerHTML = 'Show quiz';
  }
  else {
    // clock is hidden. show it
    myQuiz.style.display = 'block';
    // change button text
    startButton.innerHTML = 'Hide quiz';
  }
}

startBtn.addEventListener("click", function(event) {
  event.preventDefault();

  container.style.visibility="hidden";  
  quizContainer.style.visibility="visible";
}