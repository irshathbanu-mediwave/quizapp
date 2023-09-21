const quizData = [
  {
    id: 1,
    question: "Which language runs in a web browser?",
    answer: ["Java", "C", "Python", "JavaScript"],
    correct: "JavaScript",
  },
  {
    id: 2,
    question: "What does CSS stand for?",
    answer: [
      "Central Style Sheets",
      "Cascading Style Sheets",
      "Cascading Simple Sheets",
      "Cars SUVs Sailboats",
    ],
    correct: "Cascading Style Sheets",
  },
  {
    question: "What does HTML stand for?",
    answer: [
      "Hypertext Markup Language",
      "Hypertext Markdown Language",
      "Hyperloop Machine Language",
      "Helicopters Terminals Motorboats Lamborginis",
    ],
    correct: "Hypertext Markup Language",
  },
  {
    question: "What year was JavaScript launched?",
    answer: ["1996", "1995", "1994", "none of the above"],
    correct: "1995",
  },
];
function makeQuiz(question) {
  const div = document.createElement("div");
  div.setAttribute("id", `quizdata-${question["id"]}`);
  div.setAttribute("class", "quiz-card");

  const h3 = document.createElement("h3");
  h3.innerText = question["question"];

  const Adiv = document.createElement("div");
  Adiv.setAttribute("class", "quiz-sub");
  for (let i = 0; i < question.answer.length; i++) {
    const h4 = document.createElement("h4");
    h4.innerText;
    const radio = document.createElement("input");
    radio.setAttribute("type", "radio");
    radio.setAttribute("class", "option-radio");
    radio.setAttribute("name", `answer-${question.id}`);

    h4.appendChild(radio);
    h4.appendChild(document.createTextNode(question.answer[i]));
    Adiv.appendChild(h4);
  }
  //end of the radio looping
  const answerDiv = document.createElement("div");
  answerDiv.setAttribute("class", "result-div");
  answerDiv.innerHTML = "answer:";

  div.appendChild(h3);
  div.appendChild(Adiv);
  div.appendChild(answerDiv);
  const form = document.querySelector("#qs-item");
  form.appendChild(div);
  console.log(form);
  return div;
}
function updatelistquiz() {
  clearform();
  for (let i = 0; i < quizData.length; i++) {
    const quizitem = makeQuiz(quizData[i]);
    appenttoform(quizitem);
  }
}
function clearform() {
  const form = document.querySelector("#qs-item");
  form.innerText = "";
}
function returnPage() {
  window.history.back();
}
function appenttoform(quizitem) {
  const app = document.querySelector("#qs-item");
  app.appendChild(quizitem);
}

updatelistquiz();
