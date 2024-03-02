const express = require('express');
const recipes = require('./data/recipes');

const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('data'));

app.get('/', (req, res) => {
	// res.send(`Exemple de recette : ${recipes[0].name}`);

	res.render('recipes.ejs', {recipes});
});

const port = 3000;
app.listen(port, () => {
	console.log(`Listening at http://localhost:${port}`);
});
