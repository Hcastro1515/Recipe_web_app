const express = require("express");
const cors = require("cors");
const request = require("request");

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("Listening on port http://localhost:5000");
});

app.get("/", (req, res) => {
  res.json({
    message: "Hello",
  });
});

app.get("/search-recipe/:searchKey", (req, res) => {
  const searchedKey = req.params.searchKey;
  getRecipeDataFromAPI(searchedKey);
});

function getRecipeDataFromAPI(recipeKey) {
  const api_url = `https://api.edamam.com/search?q=${recipeKey}&app_id=ae974cde&app_key=32d21aa39aab70de0693ee92316b75f0&from=0&to=10&calories=591-722&health=alcohol-free`;
  request(api_url, (error, response, body) => {
    const json = JSON.parse(body);
    console.log(json.hits);
  });
}
