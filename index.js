const express = require('express');
const recipes = require('./data/recipes');

const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('public'));

app.get('/', (req, res) => {
	// res.send(`Exemple de recette : ${recipes[0].name}`);

	res.render('recipes.ejs', { recipes });
});

app.get('/recipes/:recipeName', (req, res) => {
	const foundRecipe = recipes.find((e) => e.name === req.params.recipeName);

	res.render('recipe.ejs', { foundRecipe });
});

const port = 3000;
app.listen(port, () => {
	console.log(`Listening at http://localhost:${port}`);
});
