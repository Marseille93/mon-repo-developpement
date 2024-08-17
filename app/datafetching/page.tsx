import next from "next";
import Link from "next/link";

export default function page() {
    return(
        <div>
            <h1>Récupération de données coté Serveur:</h1>
            <p>Pour récupérer les données coté serveur on crée une fonction asynchrone qui vas utiliser fetch pour recupérer nos données depuis notre api pour retouner le resultat de la requete s'il n'y as pas d'erreur au format json</p>
            <h3>Avantages</h3>
            <p>Récupération des données avant le rendu : Les données sont prêtes avant que la page ne soit envoyée au client, ce qui peut améliorer l'expérience utilisateur en évitant les temps de chargement supplémentaires.
Contrôle sur la mise en cache : Vous pouvez configurer précisément comment et quand les données sont mises en cache, ce qui est utile pour équilibrer entre performances et fraîcheur des données.

En utilisant cette approche, vous pouvez récupérer des données côté serveur efficacement dans vos applications Next.js, tout en ayant un contrôle précis sur le comportement de mise en cache et de revalidation des requêtes.
</p>
<Link href="./datafetching/serverFetching" className="btn btn-primary">Résultat</Link>


<h1>Récupération de données coté Client:</h1>
            <p>Pour récupérer les données coté client c'est à dire dans un composant client nous allons toujours utiliser fetch mais en plus nous allons utiliser UseState pour gérer l'etat des données et UseEffect </p>
            <h3>Avantages</h3>
            <p>Mise à jour dynamique des données :<br/>Les données peuvent être récupérées et mises à jour en temps réel, sans avoir besoin de recharger la page entière. Cela est particulièrement utile pour les applications où les données changent fréquemment (comme les flux de réseaux sociaux ou les tableaux de bord en temps réel).<br/>
            Moins de charge sur le serveur :<br/>En déchargeant la récupération de données côté client, vous réduisez la charge initiale sur le serveur, car les données ne sont pas pré-rendues côté serveur. Cela peut aussi améliorer les temps de réponse du serveur pour les premières requêtes.<br/>
            En résumé, la récupération de données côté client offre plus de dynamisme et de flexibilité dans la gestion des données et l'interaction utilisateur
</p>
<Link href="./datafetching/clientFetching" className="btn btn-primary">Résultat</Link>


<h1>Mise en cache:</h1>
<p>La mise en cache est d'une importance capitale elle permet de ne pas à chaque fois envoyer des requetes au serveurs car une fois une requete demandé le resultat sera stocké pour que si jamais l'utilisateur veut accéder à ces éléments de nouveau nous aurons qu'à les recupérer dans la cache.<br/> Par défaut avec Nextjs 14 la mise en cache des données est désactivé
Ainsi pour l'activer on ajoute juste cette instruction dans fetch next:revalidate:5,, </p>
<Link href="./datafetching/cacheFetching" className="btn btn-primary">Résultat</Link>
        </div>
        
    );   
}