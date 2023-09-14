//Inialize the global vaiable
const cardBody = document.querySelector("#display-card");

let recipeItems = [];

const recipeCount = document.querySelector("#count");
recipeCount.innerText = "cardCount";
console.log("print");

// Main function
updateForm();
getFromLocalSorage();

function updateForm() {
  const form = document.querySelector("#recipe-form");
  form.addEventListener("submit", function (r) {
    r.preventDefault();
    updateFormElements();
  });
}

function updateFormElements() {
  // fetch form data
  const title = document.querySelector("#recipeName").value;
  const time = document.querySelector("#timeTaken").value;
  const steps = document.querySelector("#stepsTodo").value;
  const image = document.querySelector("#recipeImg").value;

  const recipe = {
    id: new Date().getTime(),
    title: title,
    time: time,
    steps: steps,
    image: image,
  };
  addRecipe(recipe);
}

//function to add recipe
function addRecipe(recipe) {
  recipeItems.push(recipe);
  setToLocalStorage();
}

// function to save data in local storage
function setToLocalStorage() {
  const str = JSON.stringify(recipeItems);
  localStorage.setItem("Recipes", str);
  updateUi();
}

// Function to get data from localStorage
function getFromLocalSorage() {
  const str = localStorage.getItem("Recipes");
  if (!str) {
    recipeItems = [];
  } else {
    recipeItems = JSON.parse(str);
  }
  updateUi();
}

function updateUi() {
  clearApp();
  for (let i = 0; i < recipeItems.length; i++) {
    const recipeDiv = displayCard(recipeItems[i]);
    cardBody.appendChild(recipeDiv);
  }
}

//function to append the html division
function appendToApp(recipe) {
  cardBody.appendChild(recipe);
}

//function to clear the UI
function clearApp() {
  cardBody.innerHTML = "";
}

updateUi();
// creating card using HTML tags
function displayCard(recipe) {
  const cardBox = document.createElement("div");
  cardBox.setAttribute("class", "recipe-card");
  const id = `item-${recipe["id"]}`;
  cardBox.setAttribute("id", id);

  const imageBox = document.createElement("div");
  imageBox.setAttribute("class", "imageBox");

  const img = document.createElement("img");
  img.setAttribute("class", "img");
  img.src = recipe["image"];
  imageBox.append(img);

  const contentBox = document.createElement("div");
  contentBox.setAttribute("class", "contentBox");
  cardBox.append(imageBox, contentBox);

  const headerBox = document.createElement("div"); //flex header division
  headerBox.setAttribute("class", "flex-box");
  const title = document.createElement("h2");
  title.innerText = recipe["title"];
  const time = document.createElement("div"); //flex header division
  time.setAttribute("class", "flex");
  headerBox.append(title, time);

  const labelTt = document.createElement("h3");
  labelTt.innerText = "Time Taken :";
  const min = document.createElement("p");
  min.innerText = recipe["time"];
  time.append(labelTt, min);

  const stepsBox = document.createElement("div"); //flex header division
  const labelSt = document.createElement("h3");
  labelSt.innerText = "Steps Todo :";
  const steps = document.createElement("p");
  steps.setAttribute("class", "stepsTodo");
  steps.innerText = recipe["steps"];
  stepsBox.append(labelSt, steps);

  const DeleteBtn = document.createElement("button"); //button to delete card
  DeleteBtn.textContent = "delete";
  DeleteBtn.addEventListener("click", function () {
    remove(recipe["id"]);
    console.log("remove");
  });
  contentBox.append(headerBox, stepsBox, DeleteBtn);

  return cardBox;
}

//Function to remove
function remove(recipeId) {
  const filterArrray = recipeItems.filter((recipe) => recipe.id != recipeId);
  recipeItems = filterArrray;
  setToLocalStorage();
}
