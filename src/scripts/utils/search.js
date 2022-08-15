import { stringReformat } from "./tools.js";
import { displayRecipesCards, newDataFormat } from "../app.js";

// Primary Search
export const search = (recipesReformated, input) => {
    let filteredRecipes = [];
    const research = stringReformat(input.value);
    const recipesContainer = document.querySelector(".recipes");

    filteredRecipes = recipesReformated.filter((recipe) => {
        return (
            recipe.text.includes(research)
        );
    });

    if (research.length >= 3) {
        console.log("Lancement de la recherche !");

        if (filteredRecipes.length) {
            recipesContainer.innerHTML = "";
            displayRecipesCards(filteredRecipes);
        } else {
            recipesContainer.innerHTML = `<div class="recipes__error">Aucune recette ne correspond à votre critère…<br>
            Vous pouvez chercher « tarte aux pommes », « poisson », etc.</div>`;
        }
    } else {
        displayRecipesCards(newDataFormat);
    }
};