const {Router} = require("express");
const controller = require("./controller.js");

const router = Router();

// affichage de la Homepage
router.get("/",controller.displayHomepage);

// affichage du formulaire d'ajout d'un cocktail
router.get("/addCocktail",controller.displayAddCocktail);

// réception du formulaire
router.post("/addCocktail",controller.addCocktail);

// affichage d'un cocktail
router.get("/cocktail",controller.displayCocktail);

// affichage de la recherche de cocktail
router.get("/search",controller.displaySearch);

// réception de la recherche
router.post("/search",controller.getCocktails);

module.exports = router;