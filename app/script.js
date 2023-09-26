const appdiv = document.querySelector("#app");
appdiv.style.display = "none";
// const category = [
//   {
//     name: "Computer Science",
//     value: "computer",
//   },
//   {
//     name: "biology",
//     value: "bio",
//   },
// ];
const category = [
  {
    id: 1234,
    name: "Computer Science",
    value: "Computer_Science",
  },
  {
    id: 2345,
    name: "English",
    value: "English",
  },
];
let selectedValue;
const quizForm = document.getElementById("quizForm");
const categorySelect = document.getElementById("option");
document.getElementById("submit").addEventListener("click", function (e) {
  e.preventDefault();
  selectedValue = categorySelect.value;
  const selectedIndex = category.findIndex(
    (item) => item.value == selectedValue
  );
  const getId = category[selectedIndex].id;
  console.log(getId);
  dropdownClick(getId);
});

function dropdownClick(getId) {
  const appdiv = document.querySelector("#app");
  const quizdiv = document.querySelector("#quizForm");
  // window.location.href = `index.html?type=${selectedValue}`;
  appdiv.style.display = "block";
  quizdiv.style.display = "none";
  saveToLocalStorage(getId);
  updateQuizListUI(getId);
}
for (let sub of category) {
  const option = document.createElement("option");
  option.value = sub.value;
  option.innerHTML = sub.name;

  categorySelect.appendChild(option);
}
const Question = [
  {
    id: 300,
    question: " 1.In which decade was the Internet first implemented?",
    options: [
      { id: 10, text: "1940s", isCorrect: false },
      { id: 20, text: " 1950s", isCorrect: false },
      { id: 30, text: "1960s", isCorrect: true },
      { id: 40, text: " 1980s", isCorrect: false },
    ],
    category: 1234,
  },
  {
    id: 301,
    question:
      "1.Which institution is to house India’s first technology business incubation centre based on green technology? ",
    options: [
      { id: 10, text: " IIT Madras", isCorrect: false },
      { id: 20, text: " NIT Srinagar", isCorrect: false },
      { id: 30, text: " IIT Roorkee", isCorrect: false },
      { id: 40, text: "NIT Tiruchirappalli", isCorrect: true },
    ],
    category: 2345,
  },
];
// const English = [

//     answer: "[B] NIT Srinagar",
//   },
//   {
//     id: "6",
//     question:
//       "2.Who is the head of the ‘Parliamentary committee on official languages’?",
//     options: [
//       "[A] Rajnath Singh",
//       "[B] Amit Shah",
//       "[C] Nitin Gadkari",
//       "[D] Piyush Goyal",
//     ],
//     answer: "[B] Amit Shah",
//   },
// ];
// const questionCollection = {
//   computer: computer,
//   bio: bio,
// };
// const questionCollection = {
//   Computer_Science: Computer_Science,
//   English: English,
// };
// const urlParams = new URLSearchParams(window.location.search);
// const myType = urlParams.get("type");
// console.log(questionCollection[myType]);
function makeQuizDiv(quiz) {
  const div = document.createElement("div");
  div.setAttribute("id", `question-${quiz.id}`);
  div.setAttribute("class", "quiz-app");
  const h2 = document.createElement("h2");
  h2.innerText = quiz.question;
  const subDiv = document.createElement("div");
  subDiv.setAttribute("class", "subdiv");
  const resDiv = document.createElement("div");
  resDiv.setAttribute("class", "res-div");
  button.addEventListener("click", function () {
    const selectedOption = document.querySelector(
      `input[name="answer-${quiz.id}"]:checked`
    );
    if (selectedOption) {
      const selectedAnswer = selectedOption.value;
      const correctAnswer = quiz.options.find((option) => option.isCorrect);
      console.log(selectedAnswer);
      console.log(correctAnswer.id);
      if (selectedAnswer == correctAnswer.id) {
        resDiv.innerHTML = "Correct Answer!";
        resDiv.style.color = "green";
      } else {
        resDiv.innerHTML = "Sorry, correct answer is " + correctAnswer.text;
        resDiv.style.color = "red";
      }
    } else {
      resDiv.innerHTML = "Please select an option.";
      resDiv.style.color = "yellow";
    }
  });
  //   if (selectedOption) {
  //     const selectedAnswer = selectedOption.value;
  //     if (selectedAnswer === quiz.answer) {
  //       resDiv.innerHTML = "Correct Answer!";
  //       resDiv.style.color = "green";
  //     } else {
  //       resDiv.innerHTML = "Sorry,correct answer is ";
  //       resDiv.style.color = "red";
  //     }
  //   } else {
  //     resDiv.innerHTML = "Please select an option.";
  //     resDiv.style.color = "yellow";
  //   }
  // });
  for (let i = 0; i < quiz.options.length; i++) {
    const label = document.createElement("label");
    const radio = document.createElement("input");
    radio.setAttribute("type", "radio");
    radio.setAttribute("name", `answer-${quiz.id}`);
    radio.setAttribute("class", "radioBtn");
    radio.value = quiz.options[i]["id"];
    label.appendChild(radio);
    label.appendChild(document.createTextNode(quiz.options[i]["text"]));
    subDiv.appendChild(label);
  }
  div.appendChild(h2);
  div.appendChild(subDiv);
  div.appendChild(resDiv);
  div.appendChild(button);
  div.appendChild(back);
  return div;
}
const button = document.createElement("button");
button.setAttribute("class", "btn");
button.innerHTML = "Check Answer";
function appendToApp(quizDiv) {
  const app = document.querySelector("#app");
  app.appendChild(quizDiv);
}
function updateQuizListUI(getId) {
  const qn = Question.filter((item) => item.category == getId);
  console.log(qn);
  const app = document.querySelector("#app");
  app.innerHTML = "";
  for (let i = 0; i < qn.length; i++) {
    const quizDiv = makeQuizDiv(qn[i]);
    appendToApp(quizDiv);
  }
}
const back = document.createElement("button");
back.setAttribute("class", "back");
back.innerHTML = "Back";
back.addEventListener("click", goBack);
function goBack() {
  const appdiv = document.querySelector("#app");
  const quizdiv = document.querySelector("#quizForm");
  appdiv.style.display = "none";
  quizdiv.style.display = "block";
}

function saveToLocalStorage(getId) {
  localStorage.setItem("selected_category", getId);
}
function getStorage() {
  return localStorage.getItem("selected_category");
}
function checkedCategory() {
  const storeCategory = getStorage();
  if (storeCategory) {
    dropdownClick(storeCategory);
  }
}
checkedCategory();
//
// function getStorage() {
//   // window.addEventListener('load',)
//   const get = localStorage.getItem("Quiz-Categories");
//   //   updateQuizListUI(get);
//   // }
//   if (get) {
//     selectedValue = get;
//     document.querySelector("#submit").click();
//   }
// }

// function saveToLocalStorage() {
//   const categorySelect = document.getElementById("option");
//   let selectedValue = categorySelect.value;
//   const selectedIndex = category.findIndex(
//     (item) => item.value == selectedValue
//   );
//   const getId = category[selectedIndex].id;
//   // let selectedValue = categorySelect.value;
//   // setLocalStorageItem("selectedCategory", selectedValue);
//   localStorage.setItem("Quiz-Categories", getId);
// }

// function getToLocalStorage() {
//   // let selectedValue = categorySelect.value;
//   // const selectedIndex = category.findIndex(
//   //   (item) => item.value == selectedValue
//   // );
//   // const getId = category[selectedIndex].id;
//   // localStorage.getItem("Quiz-Categories", getId);
// }
// // {
//   id: 2,
//   question: "2.Where are the contents of your computer's hard drive indexed?",
//   options: ["(A) Yahoo!", "(B) Google", "(C) MSN", "(D) None of the above"],
//   answer: "(D) None of the above",
// },
// {
//   id: 3,
//   question: " 3.ISP stands for:",
//   options: [
//     "(A) Internet Survey Period",
//     "(B) Integrated Service Provider",
//     "(C) Internet Security Protocol",
//     "(D) Internet Service Provider",
//   ],
//   answer: "(D) Internet Service Provider",
// },
// {
//   id: 4,
//   question: " 4.Internet Explorer is a:",
//   options: [
//     "(A) Any person browsing the net",
//     "(B) Web Browser",
//     "(C) Graphing Package",
//     "(D) News Reader",
//   ],
//   answer: "(B) Web Browser",
// },
// saveToLocalStorage();
// saveToLocalStorage();
