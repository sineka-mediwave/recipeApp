//Global variable
const card = document.querySelector("#display-card");

//Create object for the card details
let recipeDetails = [];

//data fetch form local storage
displayCardDiv();

//code for creating card
function displayCardDiv() {
  //   const totalRecipe = document.createElement("div"); //main division
  const cardBox = document.createElement("div"); //main division
  cardBox.setAttribute("class", "recipe-card");

  const imageBox = document.createElement("div"); //left side image division
  const contentBox = document.createElement("div"); //right side content division

  cardBox.appendChild(imageBox, contentBox);

  const pictureDiv = document.createElement("div"); //to display picture division
  imageBox.appendChild(pictureDiv);

  const headerBox = document.createElement("div"); //flex header division
  const stepsBox = document.createElement("div"); //main division

  contentBox.appendChild(headerBox, stepsBox);

  const Title = document.createElement("button"); //button to delete card
  const time = document.createElement("button"); //button to delete card
  headerBox.appendChild(Title, time);

  const DeleteBtn = document.createElement("button"); //button to delete card
}
