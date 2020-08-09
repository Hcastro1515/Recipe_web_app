const form = document.querySelector("form");
const loadingElement = document.querySelector(".loading");
const placeholder = document.querySelector(".placeholder");
loadingElement.style.display = "none";

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const recipe = formData.get("recipe-name");

  const recipePicked = {
    recipe,
  };
  placeholder.style.display = "none";
  loadingElement.style.display = "";
  console.log(recipePicked.recipe);
  getRecipeSearched(recipePicked.recipe);
  form.reset();
});

const getRecipeSearched = (searched) => {
  console.log(searched);
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
      showData(resultArray);
    })
    .catch((error) => {
      console.log(error);
    });
};

const showData = (data) => {
  try {
    data.forEach((item) => {
      console.log(item.recipe.label);
      const textElement = document.createElement("h1");
      textElement.innerHTML = item.recipe.label;
      loadingElement.style.display = "none";
      placeholder.style.display = "none";
      placeholder.appendChild(textElement);
    });
  } catch (error) {
    console.log(error);
  }
};
