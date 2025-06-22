// dom elements
const container = document.getElementById("container");

// variables
let currentQuestionIndex = 0;
let score = 0;

// templates class
class Templates {
  getStartGameTemplate() {
    return `<div id="startPage">
        <h3>Quiz Game 🎮</h3>
        <p>Quick quiz time! Can you score them all?</p>
        <button type="button" id="startBtn">Start</button>
      </div>`;
  }
  getQuizTemplate() {
    return `<div id="quizTemplate">
        <h4>${quizs[currentQuestionIndex].question}</h4>
        <div id="quizInfo">
          <p>Question ${currentQuestionIndex + 1} of ${quizs?.length}</p>
          <p>Score : ${score}</p>
        </div>
        <div id="radioContainer">
        ${quizs[currentQuestionIndex].answers
          .map((item) => {
            return `<input type="radio" id=${item.text} name="answer" />
          <label for=${item.text}>${item.text}</label>`;
          })
          .join(" ")}
        </div>
        <div id="progressContainer">
          <progress value=${score} max=${quizs.length}></progress>
        </div>
      </div>`;
  }
  getFinalResultsTemplate() {
    return `<div id="finalResults">
      <p>You scored ${score} out of ${quizs.length}</p>
      <p>${scoreMessage[score]}</p>
      <button type="button" id="restartBtn">Restart</button>
    </div>`;
  }
}
const template = new Templates();

// initial page
const initialPage = () => {
  currentQuestionIndex = 0;
  score = 0;
  const temp = template.getStartGameTemplate();
  container.innerHTML = temp;
  const start = document.getElementById("startBtn");
  start.addEventListener("click", startBtnHandler);
};

// start the game
const startBtnHandler = () => {
  const temp = template.getQuizTemplate();
  container.innerHTML = temp;
  answerHandler();
};

// answer the question
const answerHandler = () => {
  const answer = document.getElementsByName("answer");
  answer.forEach((radio) => {
    radio.addEventListener("change", (event) => {
      if (event.target.value === "on") {
        if (quizs.length !== currentQuestionIndex + 1) {
          const value = event.target.id;
          const ans = quizs[currentQuestionIndex].answers.find(
            (ans) => ans.correct
          );
          if (ans.text === value) {
            score += 1;
          }
          currentQuestionIndex += 1;
          startBtnHandler();
        } else {
          const temp = template.getFinalResultsTemplate();
          container.innerHTML = temp;
          const restart = document.getElementById("restartBtn");
          restart.addEventListener("click", () => {
            initialPage();
          });
        }
      }
    });
  });
};

// trigers
window.addEventListener("DOMContentLoaded", initialPage);

// quiz questions with answer
const quizs = [
  {
    question: "What color is the sky on a clear day?",
    answers: [
      {
        text: "Green",
        correct: false,
      },
      {
        text: "Red",
        correct: false,
      },
      {
        text: "Blue",
        correct: true,
      },
      {
        text: "Yellow",
        correct: false,
      },
    ],
  },
  {
    question: "How many legs does a spider have?",
    answers: [
      {
        text: "6",
        correct: false,
      },
      {
        text: "8",
        correct: true,
      },
      {
        text: "4",
        correct: false,
      },
      {
        text: "10",
        correct: false,
      },
    ],
  },
  {
    question: "What do bees make?",
    answers: [
      {
        text: "Milk",
        correct: false,
      },
      {
        text: "Silk",
        correct: false,
      },
      {
        text: "Honey",
        correct: true,
      },
      {
        text: "Butter",
        correct: false,
      },
    ],
  },
  {
    question: "How many days are in a week?",
    answers: [
      {
        text: "5",
        correct: false,
      },
      {
        text: "6",
        correct: false,
      },
      {
        text: "7",
        correct: true,
      },
      {
        text: "8",
        correct: false,
      },
    ],
  },
  {
    question: "Which shape has three sides?",
    answers: [
      {
        text: "Square",
        correct: false,
      },
      {
        text: "Circle",
        correct: false,
      },
      {
        text: "Triangle",
        correct: true,
      },
      {
        text: "Rectangle",
        correct: false,
      },
    ],
  },
];

const scoreMessage = [
  "😢 Oops! No correct answers. Try again!",
  "😅 Just one? Give it another shot!",
  "🙂 Not bad! Try again to improve.",
  "👍 Good effort! Just a bit more practice.",
  "👏 Great job! You really know your stuff.",
  "🎉 Perfect! You're a quiz master!",
];
