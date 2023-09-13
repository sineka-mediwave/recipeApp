let recipeItems = [
  {
    id: 1,
    title: "burger",
    time: "30",
  },
];

displayCardDiv();
function displayCardDiv() {
  const cardBox = document.createElement("div"); //main division
  cardBox.setAttribute("class", "recipe-card");
  //adding id attribute to div
  //   const id = `eat-${recipe["id"]}`;
  //   cardBox.setAttribute("id", id);

  const title = document.createElement("h2"); //button to delete card
  title.innerText = recipeItems[0]["title"];

  const time = document.createElement("p"); //button to delete card
  time.innerText = recipeItems[0]["time"];

  const card = document.querySelector("#display-card");
  card.appendChild(cardBox);
  cardBox.appendChild(title, time);
}
