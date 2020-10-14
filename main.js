let ourForm = document.getElementById("ourForm");
let ourInput = document.getElementById("ourInput");
let ourList = document.getElementById("ourList");

ourForm.addEventListener("submit", (e) => {
  e.preventDefault();
  createItem(ourInput.value);
});

function createItem(Item) {
  let ourHtml = `<li>${Item}<button onclick="deleteItem(this)">Remove</button></li>`;
  ourList.insertAdjacentHTML("beforeend", ourHtml);
  ourInput.value = ""; //fresh start on input field
  ourInput.focus(); //focus on the input field
}

function deleteItem(deleteElement) {
  deleteElement.parentElement.remove(); //
}
