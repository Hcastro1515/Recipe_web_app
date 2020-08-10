const form = document.querySelector("form");
const loadingElement = document.querySelector(".loading");
const placeholder = document.querySelector(".placeholder");
const placeholderImage = document.querySelector(".placeholderImage");
loadingElement.style.display = "none";

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  placeholder.innerHTML = "";
  const formData = new FormData(form);
  const recipe = formData.get("recipe-name");
  const recipePicked = {
    recipe,
  };
  placeholderImage.style.display = "none";
  loadingElement.style.display = "";
  console.log(recipePicked.recipe);
  getRecipeSearched(recipePicked.recipe);
  form.reset();
});

const getRecipeSearched = (searched) => {
  const API_URL = `http://localhost:5000/search-recipe/${searched}`;
  fetch(API_URL, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  })
    .then(async (response) => {
      const result = await response.json();
      const resultArray = result.hits;
      addDataToPage(resultArray);
    })
    .catch((error) => {
      console.log(error);
    });
};

const addDataToPage = (data) => {
  try {
    data.forEach((item) => {
      //create dom elements
      const cardDiv = document.createElement("div");
      const cardImageContaiener = document.createElement("div");
      const cardDataContainer = document.createElement("div");
      const image = document.createElement("img");
      const cardLabel = document.createElement("h4");
      const cardHealthLabel = document.createElement("div");

      //appending child to it's container

      //giving each element a class
      cardDiv.className = "card-body";
      cardImageContaiener.className = "card-image_container";
      cardDataContainer.className = "card-data_container";
      cardHealthLabel.className = "card-health_label";
      cardLabel.className = "card-label";
      image.className = "card-image_container";

      //assignments
      image.src = item.recipe.image;
      cardLabel.innerHTML = item.recipe.label;
      cardHealthLabel.innerHTML = item.recipe.healthLabels;

      cardImageContaiener.appendChild(image);
      cardDataContainer.appendChild(cardLabel);
      cardDataContainer.appendChild(cardHealthLabel);

      cardDiv.appendChild(cardImageContaiener);
      cardDiv.appendChild(cardDataContainer);
      placeholder.appendChild(cardDiv);

      console.log(item)
    });
  } catch (error) {
    console.log(error);
  }
  loadingElement.style.display = "none";
  placeholderImage.style.display = "none";
};
