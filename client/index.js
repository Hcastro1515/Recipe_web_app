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
      console.log(item.recipe.label);
      const textElement = document.createElement("h1");
      textElement.innerHTML = item.recipe.label;
      placeholder.appendChild(textElement);
    });
  } catch (error) {
    console.log(error);
  }
  loadingElement.style.display = "none";
  placeholderImage.style.display = "none";
};
