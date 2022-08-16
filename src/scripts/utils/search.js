import { stringReformat} from "./tools.js";
import { displayRecipesCards, displayFilters, newDataFormat } from "../app.js";
import { getAllFilters } from "./filter.js";

// Primary Search
export const search = (recipesReformated, input) => {
    let filteredRecipes = [];
    const research = stringReformat(input.value);
    const recipesSection = document.querySelector(".recipes");

    filteredRecipes = recipesReformated.filter((recipe) => {
        return (
            recipe.text.includes(research)
        );
    });

    if (research.length >= 3) {
        console.log("Lancement de la recherche !");

        if (filteredRecipes.length) {
            displayRecipesCards(filteredRecipes);
            const filters = getAllFilters(filteredRecipes);
            console.log(filters);
            displayFilters(filters.listUniqueIngredients).ingredients();
            displayFilters(filters.listUniqueAppliances).appliances();
            displayFilters(filters.listUniqueUstensils).ustensils();
        } else {
            recipesSection.innerHTML = `<div class="recipes__error">Aucune recette ne correspond à votre critère…<br>
            Vous pouvez chercher « tarte aux pommes », « poisson », etc.</div>`;
        }
    } else if (!research.length) {
        displayRecipesCards(newDataFormat);
    }
};