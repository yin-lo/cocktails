const express = require('express');
const app = express();

// Configuration du moteur de rendu
app.set('views', './app/views'); // Indication du dossier contenant les fichiers .ejs
app.set('view engine', 'ejs'); // Indication du moteur de rendu (nous utilisons EJS)

// Par défaut, un serveur est sécurisé et refuse toute réception de données envoyées au travers d'un POST
// Nous allons pouvoir paramétrer l'autorisation de réceptionner des types (Content Type)
// Nous allons principalement travailler autour de deux types de contenu : le JSON et les formulaires

// Autorisation du json :
app.use(express.json());

// Autorisation des données provenant de formulaires :
app.use(express.urlencoded({ extended:"true" }));

// Gestion des fichiers statiques
app.use(express.static('public'));

// Gestion des routes
const router = require('./app/router.js');
app.use(router);

const PORT = 3001;
app.listen(PORT, () => {
	console.log(`site accessible sur : http://localhost:${PORT}`);
});
