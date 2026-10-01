# Rick-et-Morty-React
L'objectif était de créer un site web sur la série Rick et Morty avec le framework React. Sur la page d'accueil, on pouvait voir 5 personnages aléatoires et les 5 derniers personnages mis en favoris, une page sur les épisodes, une page de détails des personnages et une sur tous les personnages qui l'ont avait en favoris. Les favoris étaient sauvegardés dans une base de données et en locale avec redux.

Pour récupérer les données, on a utilisé l'API Rick et Morty. Pour la base de données, j'ai utilisé firebase.

Par manque de temps, je n'ai pas implémenté la sauvegarde des favoris.

Pour faire cela, j'ai utilisé Visual Studio Code.

Ce projet est le partiel de notre cours de développement avec framework.

## Développement local

Le projet nécessite Node.js et npm. Installez les dépendances verrouillées, puis
lancez le serveur de développement :

```bash
npm ci
npm start
```

Les vérifications disponibles sont :

```bash
CI=true npm test -- --runInBand
npm run build
```

Les pages publiques et les favoris locaux fonctionnent sans configuration
supplémentaire. Pour activer la connexion et l'inscription, copiez `.env.example`
vers `.env.local` et renseignez la configuration Web de votre projet Firebase.
L'application affiche un avertissement et désactive les formulaires
d'authentification lorsque cette configuration est absente.
