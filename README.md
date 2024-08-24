**Brève explication des fonctionnalités clés de Nest.js**
**I. Qu'est ce que Nest.js**
NestJS est un framework pour construire des applications serveur (backend) en Node.js. Il est conçu pour être scalable (facile à agrandir), testable, et maintenable. NestJS utilise TypeScript par défaut, ce qui nous permet d'avoir un code plus structuré et moins sujet aux erreurs.

**II. Comment Créer un Projet Nest.js:**

On ouvre notre Terminal pour exécuter la commande suivante:
**sudo npm i -g @nestjs/cli**
cette commande vas installer NestJS CLI (outil en ligne de commande).
Ensuite la commande suivante qui servira à créer le répertoire du projet et y mettre les fichiers de base que le projet a besoin.
**nest new my-project**

**III. Les avantages de Nest.js:**

1. Structure claire et organisée :
   NestJS utilise une architecture modulaire basée sur les modules, ce qui aide à organiser ton code de manière propre et compréhensible. Chaque fonctionnalité de l'application peut être séparée en modules, ce qui rend le développement plus facile à gérer.

2. TypeScript intégré :
   NestJS est construit avec TypeScript, ce qui apporte des avantages comme la vérification de types et une meilleure gestion des erreurs. Cela permet d'éviter des bugs courants et de rendre ton code plus fiable.

**IV. Les Fonctionnalité clés de Nest.js :**

1. Les Modules:
   Modules sont comme des sections de notre application. Par exemple, si on a une application de gestion d'utilisateur, on pourrait avoir un module User qui gère tout ce qui est lié aux utilisateurs.
   Chaque module est un fichier TypeScript qui regroupe des fonctionnalités (contrôleurs, services, etc.) liées à une partie spécifique de notre application.

2. Les Contrôleurs (Controllers) :

   Les contrôleurs sont responsables de gérer les requêtes HTTP (par exemple, GET, POST). Ils reçoivent les requêtes, appellent les services nécessaires, et renvoient une réponse.
   Par exemple, si on veux récupérer la liste des utilisateurs, nous allons créer un contrôleur qui écoute une requête GET et retourne les données.

3. Les Services :

   Les services sont des classes qui contiennent la logique métier de notre application. Nous pouvons y faire des calculs, récupèrer des données depuis une base de données, etc.
   Les contrôleurs utilisent les services pour effectuer des actions spécifiques.

4. Les Décorateurs :

   Les décorateurs sont des fonctions spéciales utilisées dans NestJS pour ajouter des métadonnées à des classes, méthodes ou propriétés. Par exemple, @Controller() pour définir un contrôleur, ou @Get() pour indiquer qu'une méthode doit gérer une requête GET.

**V. Exécution:**

Pour Exécuter tout ceci on ouvre un Terminal, on se place dans le répertoire du projet et on exécute la commande suivante:
**npm run start**
Ainsi nous pouvons aller sur notre navigateur et taper http://localhost:3000 (si l'application est exécuter sur le port 3000) ou on utilise Postman.
