const app = {
	init() {
		// L'événement "input" se déclenche quand il y a un changement dans le champs input
		document.querySelector('form').addEventListener('input', app.getCocktails);
	},

	async getCocktails(event) {
		// Bloque le comportement par défaut du formulaire
		event.preventDefault();

		// event.target.value contient la valeur tapée dans le champs "input"
		console.log(event.target.value);

		// envoie des lettres tapées au serveur pour récupérer la liste des cocktails qui correspondent
		const objectToSend = {
			search: event.target.value,
		};

		// fetch va nous permettre de transférer les données à notre serveur.
		// le deuxième argument précise que la requête va être en POST, son contenu est du JSON et la clef body va contenir l'objet à envoyer au format JSON
		const response = await fetch('http://localhost:3001/search', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json', // je précise que le content type de ma requête est JSON
			},
			body: JSON.stringify(objectToSend), // je transfère des données à mon serveur
		});
		console.log(response);
	},
};

app.init();
