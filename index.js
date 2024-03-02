const express = require("express");
const recipes = require("./data/recipes");

const app = express();

app.get("/", (req, res) => {
  res.send(`Exemple de recette : ${recipes[0].name}`); // Pour l'instant, on n'envoie pas grand chose...
});

const port = 3000;
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
