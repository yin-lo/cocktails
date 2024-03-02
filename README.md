# S03 O'Recipes 

Exo de révision complet du début de S03. On y révise les "dernières tendances" du Cockpit !

N'hésitez pas à vous trouver un copilote si besoin pour avancer !

## Installation

- Cloner ce dépôt et l'ouvrir dans VSCode.
- `npm install` une fois dans le projet.

## Objectif 

On veut **deux pages** pour notre application :
- Une page pour la route `/` : 
  - présente la liste des noms des recettes.
  - chaque recette est cliquable, et nous renvoie sur la page de la recette associée.
- Une page pour la route dynamique : `/recipes/:recipeName`
  - présente la page d'UNE recette (celle qui porte le nom `recipeName` demandé par le client), avec :
    - le nom de la recette, son auteur, le temps de préparation, et la liste des ingrédients.
    

## Etape 1 - EJS

- Installer `ejs` via `npm`.
- Noter qu'un dossier `views` a déjà été créé pour vous. Il ne contient pour l'instant qu'une seule page `ejs` : celle de toutes les recettes.
- En revanche, `ejs` **n'est pas branché** à `express`, comme moteur de rendu. A vous de jouer :
  - dans notre `index.js`: 
      - définir `ejs` comme `view engine` pour notre `app`
      - et définir le dossier `views` comme dossier des views. 
- Puis il faut modifier le code de la route `/` afin de :
  - `render` la page `recipes.ejs` présente dans les views
  - en lui fournissant les données à afficher (ie, les `recipes`) !
- Si tout se passe bien, la route `/` devrait maintenant afficher les 4 recettes.

## Etape 2 - Route dynamique 

- Définir une route dynamique `/recipes/:recipeName`
  - Rappel : d'un point du client, il appellera la route `/recipes/sandwich` par exemple !
- Cette route doit : 
  - récupérer la recette associée (donc un objet contenant toutes les infos de la recette en question) depuis la liste des recettes `recipes.json`
    - note : on pense à la fonction `.find` de JS !
  - et renvoyer une page pour cette recette. On aura besoin pour cela : 
    - de créer une page `recipe.ejs` dans le dossier `views`
    - et de passer à cette view la recette qu'on a recupérée précédemment, afin qu'elle affiche les informations de cette recette. Notamment : 
      - le nom de la recette 
      - le temps de préparation
      - l'auteur de la recette
      - la liste des ingrédients (on pense à la boucle `for`) 

## Etape 3 - Partials

- Nos deux pages EJS se ressemblent (même headers, même footer). En terme de code, on peut penser à les factoriser pour faciliter la maintenabilité. En particulier : 
  - le code des hauts de page (`header`) se ressemble => `partials/header.ejs` 
  - le code des bas de page (`footer`) se ressemble => `partials/footer.ejs` 
- On oublie pas : ce qu'on extrait dans un fichier doit ensuite être re-inclu (EJS `include`) dans le fichier ! 

## Etape 4 - Dossier public

Pour le moment, pas très pratique d'ajouter du CSS dans notre app... On va y remédier !

- Créer un dossier `public` et un dossier `public/css` comportant un fichier `style.css`
- Le servir statiquement (on pense à `express.static(...)`)
  - note : on peut déjà testé s'il est bien servi statiquement en le demandant directement depuis le navigateur via son chemin (`http://localhost:3000/css/style.css`)
- Inclure ensuite ce fichier CSS comme fichier de style dans nos pages EJS, en donnant l'adresse serveur du fichier css !
  - note : pour tester, on peut par exemple mettre le titre en `#F0F`, et/ou essayer de placer le `footer` en bas de la page !

## Etape 5 (bonus) - Images

Faire en sorte d'afficher les images de recettes sur les pages ! 

Exploratoire, mais quelques pistes : 
- chercher des images qui vous plaisent sur le world wide web
- les ajouter à un dossier `public/img` (donc déjà servi statiquement !)
- inclure le chemin d'accès au image dans chaque recette au niveau du fichier `recipes.js`
- les inclure correctement dans les fichiers `EJS`
