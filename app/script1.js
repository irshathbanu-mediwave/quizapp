const computerData = [
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
    id: 3,
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
    id: 4,
    question: "What year was JavaScript launched?",
    answer: ["1996", "1995", "1994", "none of the above"],
    correct: "1995",
  },
];
const englishdata = [
  {
    id: 11,
    question: "Thomas did not the vegetables because he was busy.",
    answer: [" bring", "bought", "had bought", "was bringing"],
    correct: "bring",
  },
];
const questionCollection = {
  computer: computerData,
  English: englishdata,
};
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

  return div;
  //   const form = document.getElementById("qs-item");
  //   const button = document.createElement("button");
  //   button.setAttribute("type", "submit");
  //   button.innerHTML = "checkanswer";

  //   console.log(button);
  //   Totaldiv.appendChild(form);
  //   form.appendChild(button);
  //   Cdiv.appendChild(button);
  //   console.log(form);
}
// const button = document.createElement("button");
// button.innerHTML = "checked Answer";
// const form = document.getElementById("qs-item");
// form.appendChild(button);
// // Cdiv.appendChild(button);
function updatelistquiz() {
  clearform();
  for (let i = 0; i < computerData.length; i++) {
    const quizitem = makeQuiz(computerData[i]);
    appenttoform(quizitem);
  }
}
const urlParams = new URLSearchParams(window.location.search);
const myType = urlParams.get("type");
console.log(questionCollection[myType]);
// edited;

function clearform() {
  const form = document.querySelector("#qs-item");
  form.innerText = "";
}
function returnPage() {
  window.location.href = "index.html";
}
function appenttoform(quizitem) {
  const app = document.querySelector("#qs-item");
  app.appendChild(quizitem);
}
function checkanswer() {
  const form = document.getElementById("qs-item");
  form.submit();
}
// function correctanswer() {
//   for (let i = 0; i < quizData.correct.length; i++) {
//     const diva = document.querySelector("#footer");
//     const para = document.createElement("p");
//     para.setAttribute("id", "answer");
//     para.innerHTML = quizData.correct[i];
//     diva.appendChild(para);
//   }
// }
updatelistquiz();
