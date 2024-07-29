// récupération des cocktails
const cocktails = require('../data/cocktails.json');

const controller = {
	displayHomepage(req, res) {
		// ajout des cocktails au locals
		res.locals.cocktails = cocktails;

		res.render('homepage');
	},

	displayAddCocktail(req, res) {
		res.render('addcocktail');
	},

	displaySearch(req, res) {
		res.render('search');
	},

	getCocktails(req, res) {
		// Je récupère les lettres tapées dans le champ input côté front
		const searchText = req.body.search;
		console.log(searchText);
	},

	displayCocktail(req, res) {
		// récupération du cocktail par son nom
		const name = req.query.name;

		res.locals.cocktail = cocktails.find((c) => c.name == name);

		res.render('cocktail');
	},

	addCocktail(req, res) {
		// req.body contient les données du formulaire
		console.log(req.body);
	},
};

module.exports = controller;
