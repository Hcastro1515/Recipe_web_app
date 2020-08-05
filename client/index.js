console.log("Hello world");

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
  getData(recipePicked);
  form.reset();
});

const getData = (searched) => {
  const API_URL = `http://localhost:5000/search-recipe/${searched}`;
  fetch(API_URL, {
    method: "POST",
    body: JSON.stringify(searched),
    headers: {
      "content-type": "application/json",
    },
  });
};
