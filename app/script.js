let category = ["english", "computerscience"];
const selectInput = document.querySelector("#element");
for (let i = 0; i < category.length; i++) {
  const option = document.createElement("option");
  option.setAttribute("id", "category-${id}");
  option.setAttribute("value", category[i]);
  option.innerText = category[i];
  selectInput.appendChild(option);
}
const quizForm = document.getElementById("quizForm");
const categorySelect = document.getElementById("element");
quizForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const selectedCategory = categorySelect.value;
  if (selectedCategory === "english") {
    window.location.href = "english.html";
  } else if (selectedCategory === "computerscience") {
    window.location.href = "cs.html";
  } else {
    alert("Please select a valid category.");
  }
});
