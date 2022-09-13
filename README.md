![logo](dist/assets/images/logo.svg)
# Les petits plats - Projet P7 - Développez un algorithme de recherche en JavaScript

Projet réalisé dans le cadre du parcours de développeur d'application Javascript React d'OpenClassrooms.

## Languages & outils

* HTML
* [SASS](https://sass-lang.com/) - Préprocesseur CSS
* JavaScript
* [ESLint](https://eslint.org/) - Outil d'analyse de code
* GIT - Gestion de versions
* [GitHub](https://github.com/) - Hébergement en ligne des dépôts GIT
* Node.js & NPM - Pour l'installation de SASS, ESLint
* [Visual Studio Code](https://code.visualstudio.com/) - Editeur de textes
* [Figma](https://www.figma.com/) - Outil d'UI design
* [Notion](https://www.notion.so/) - Suivi de projet

## Ressources

* [La maquette Figma](https://www.figma.com/file/xqeE1ZKlHUWi2Efo8r73NK)
* [Le fichier JavaScript contenant les recettes](https://github.com/OpenClassrooms-Student-Center/P11-front-end-search-engine)
* [Cas d'utilisation de recherche](https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P6+Algorithms/Cas+d%E2%80%99utilisation+%2303+Filtrer+les+recettes+dans+l%E2%80%99interface+utilisateur.pdf)
* [Exemple de fiche d'investigation](https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P6+Algorithms/Fiche+d%E2%80%99investigation+fonctionnalite%CC%81.pdf)

## Identité

Les petits plats est un site web de recettes de cuisine à l’instar de Marmiton ou 750g.

## Consignes

Développer l'interface du site et implémenter l'algorithme du moteur de recherche pour filtrer les recettes. Creer deux algorithme différents (programmation fonctionnelle et bloucle native).


## Contraintes techniques additionnelles
Ces points doivent absolument être respectés durant le développement :
* La recherche doit pouvoir se faire via le champ principal ou via les tags (ingrédients, ustensiles ou appareil).
* La recherche principale se lance à partir de 3 caractères entrés par l’utilisateur dans la barre de recherche.
* La recherche s’actualise pour chaque nouveau caractère entré.
* La recherche principale affiche les premiers résultats le plus rapidement possible.
* Les champs ingrédients, ustensiles et appareil de la recherche avancée proposent seulement les éléments restant dans les recettes présentes sur la page.
* Les retours de recherche doivent être une intersection des résultats. Si l’on ajoute les tags “coco” et “chocolat” dans les ingrédients, on doit récupérer les recettes qui ont à la fois de la coco et du chocolat.
* Comme pour le reste du site, le code HTML et CSS pour l’interface (avec ou sans Bootstrap) devra passer avec succès le validateur W3C.
* Aucune librairie ne sera utilisée pour le JavaScript du moteur de recherche.

## Compétences évaluées
* Analyser un problème informatique
* Développer un algorithme pour résoudre un problème

## Livrables
* Une fiche d'investigation
* Un dépôt de code sur GitHub qui contient deux branches pour les deux solutions différentes pour la recherche principale.

## Installation du projet

#### Cloner le dépôt :

```bash
git clone git@github.com:fabiendevfront/les_petits_plats.git
```

#### Développement :

```bash
npm install
```
#### Lancement du site :

Ouvrir index.html avec Live Server