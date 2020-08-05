const express = require("express");
const fetch = require("node-fetch");

const app = express();

app.get("/", (req, res) => {});

app.listen(5000, () => {
  console.log("listening on port http://localhost:5000");
});

app.get("/query-recipe", async (req, res) => {
  const api_url =
    "https://api.spoonacular.com/recipes/complexSearch?apiKey=b38f2bf5d5594b849034db3301a1c7de";
  const feth_response = await feth_response(api_url);
  const json = await feth_response.json();
  res.json(json);
});
