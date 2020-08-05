console.log("Hello world");

const form = document.querySelector("form");
const loadingElement = document.querySelector(".loading");
const placeholder = document.querySelector(".placeholder");

loadingElement.style.display = "none";




form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const recipe = formData.get("recipe-name");

  const recipePicked = {
    recipe,
  };

  placeholder.style.display = "none";
  loadingElement.style.display = "";
  const api_url = "/query-recipe";
  const fetchresponse = await fetch_response(api_url);
  const json = await fetchresponse.json();
  console.log(json);
  form.reset();
});

