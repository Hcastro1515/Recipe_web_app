const express = require("express");
const cors = require("cors");
const { response } = require("express");

const APP_ID = "b8f84e0d";
const APP_KEY = "5d5f9698cd7e2903f0ced64ae0770565";
// var search = "";

const api_url = `https://api.edamam.com/search?q=pizza&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Hello",
  });
});

app.post("/search-recipe/:searchKey", (req, res) => {
  const searchedKey = req.params.searchKey;
  console.log(searchedKey);
  console.log("request", req.body);
});

app.listen(5000, () => {
  console.log("Listening on port http://localhost:5000");
});
