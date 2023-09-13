//Global variable
const card = document.querySelector("#display-card");

//Create object for the card details
let recipeDetails = [
  {
    id: "2335",
    title: "burger",
    time: "30min",
    steps: "procedure",
  },
];

//data fetch form local storage
updateForm();
getFromLocalSorage();

// Function to get data from localStorage
function getFromLocalSorage() {
  const str = localStorage.getItem("recipe-list");
  if (!str) {
    recipeDetails = [];
  } else {
    recipeDetails = JSON.parse(str);
  }
  updateUi();
}

// function to save data in local storage
function setToLocalStorage() {
  const str = JSON.stringify(recipeDetails);
  localStorage.setItem("recipe-list", str);
  updateUi();
}

//function to display UI
function updateUi() {
  clearApp();
  for (let i = 0; i < recipeDetails.length; i++) {
    const cardDiv = displayCardDiv(recipeDetails[i]);
    appendTohtml(cardDiv);
  }
}

//function to append the html division
function appendTohtml(cardDiv) {
  card.appendChild(cardDiv);
}

//function to clear the UI
function clearApp() {
  card.innerHTML = "";
}

//code for creating card
function displayCardDiv(recipe) {
  //   const totalRecipe = document.createElement("div"); //main division
  const cardBox = document.createElement("div"); //main division
  cardBox.setAttribute("class", "recipe-card");
  //adding id attribute to div
  const id = `eat-${recipe["id"]}`;
  cardBox.setAttribute("id", id);

  const imageBox = document.createElement("div"); //left side image division
  const contentBox = document.createElement("div"); //right side content division

  cardBox.appendChild(imageBox, contentBox);

  const pictureDiv = document.createElement("div"); //to display picture division
  imageBox.appendChild(pictureDiv);

  const headerBox = document.createElement("div"); //flex header division
  headerBox.setAttribute("class", "flex-box");

  const stepsBox = document.createElement("div"); //main division

  contentBox.appendChild(headerBox, stepsBox, DeleteBtn);

  const title = document.createElement("h2"); //button to delete card
  h2.innerText = recipe["title"];

  const time = document.createElement("p"); //button to delete card
  p.innerText = recipe["time"];

  headerBox.appendChild(title, time);

  const DeleteBtn = document.createElement("button"); //button to delete card

  DeleteBtn.addEventListener("click", function () {
    remove(recipe["id"]);
  });

  return cardBox;
}

//remove function
function remove(recipeId) {
  const filterArrray = favMovies.filter((recipe) => recipe.id != recipeId);
  recipeDetails = filterArrray;
  setToLocalStorage();
}

//function to add form data
function updateForm() {
  const form = document.querySelector("#recipe-form");
  form.addEventListener("submit", function (r) {
    r.preventDefault();
    console.log("title");
    getFormElements();
  });
}

//function to add form elements
function getFormElements() {
  // fetch form data
  const title = document.querySelector("#recipe-name").value;
  const time = document.querySelector("#time-taken").value;
  const steps = document.querySelector("#steps-todo").value;
  const image = document.querySelector("#recipe-img").value;

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
  recipeDetails.push(recipe);
  setToLocalStorage();
}
