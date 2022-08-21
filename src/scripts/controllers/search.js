import { reformatedRecipes, allFilters } from "../app.js";
import { stringReformat } from "../utils/tools.js";
import { displayRecipesCards, displayFilters } from "../pages/index.js";

// Primary Search
export const search = (recipesReformated, input) => {
    let filteredRecipes = [];
    const research = stringReformat(input.value);

    filteredRecipes = recipesReformated.filter((recipe) => {
        return (
            recipe.searchBar.includes(research)
        );
    });

    console.log(allFilters);
    console.log(filteredRecipes);

    if (research.length >= 3) {
        displayRecipesCards(filteredRecipes);
        displayFilters(allFilters.listUniqueIngredients).ingredients();
        displayFilters(allFilters.listUniqueAppliances).appliances();
        displayFilters(allFilters.listUniqueUstensils).ustensils();
    } else if (!research.length) {
        displayRecipesCards(reformatedRecipes);
    }
};

/**
 * Search in list of tags
 * @param {HTMLElement} - Target input
 */
export const searchInFilter = (input) => {
    const listTags = input.nextElementSibling;
    listTags.innerHTML = "";
    const research = stringReformat(input.value);
    let filteredTags = [];

    if (input.id === "ingredients") {
        filteredTags = allFilters.listUniqueIngredients.filter((ingredient) => {
            return stringReformat(ingredient).includes(research);
        });
        displayFilters(filteredTags).ingredients();
    } else if (input.id === "appliances") {
        filteredTags = allFilters.listUniqueAppliances.filter((appliance) => {
            return stringReformat(appliance).includes(research);
        });
        displayFilters(filteredTags).appliances();
    } else if (input.id === "ustensils") {
        filteredTags = allFilters.listUniqueUstensils.filter((ustensil) => {
            return stringReformat(ustensil).includes(research);
        });
        displayFilters(filteredTags).ustensils();
    }
};

export const searchByTag = (arrayTags, reformatedRecipes) => {
    console.log(arrayTags);
    console.log(reformatedRecipes);
    let filteredRecipes = [];
    const joinTags = arrayTags.join(" ");
    console.log(stringReformat(joinTags));
    filteredRecipes = reformatedRecipes.filter((recipe) => {
        return (
            recipe.searchTags.includes(stringReformat(joinTags))
        );
    });
    console.log(filteredRecipes);

    displayRecipesCards(filteredRecipes);

    displayFilters(allFilters.listUniqueIngredients).ingredients();
    displayFilters(allFilters.listUniqueAppliances).appliances();
    displayFilters(allFilters.listUniqueUstensils).ustensils();
};