import { getAllFilters } from "./filter.js";
import { stringReformat } from "../utils/tools.js";
import { displayRecipesCards, displayFilters } from "../pages/index.js";


export const searchEngine = (reformatedRecipes, allFilters) => {
    const originalRecipes = reformatedRecipes;
    const originalFilters = allFilters;
    let filteredRecipes = [];
    let filteredFilters = [];

    // Primary Search
    const searchBar = (research) => {
        if (research.length >= 3) {
            filteredRecipes = originalRecipes.filter((recipe) => {
                return (
                    recipe.searchBar.includes(research)
                );
            });
            filteredFilters = getAllFilters(filteredRecipes);
            updateDOM(filteredRecipes, filteredFilters);
        } else {
            updateDOM(originalRecipes, originalFilters);
        }
    };

    const searchByTag = (arrayTags) => {
        const joinTags = arrayTags.join(" ");
        console.log(joinTags);
        if (arrayTags.length) {
            if (filteredRecipes.length) {
                filteredRecipes = filteredRecipes.filter((recipe) => {
                    return (
                        recipe.searchTags.includes(stringReformat(joinTags))
                    );
                });
            } else {
                filteredRecipes = originalRecipes.filter((recipe) => {
                    return (
                        recipe.searchTags.includes(stringReformat(joinTags))
                    );
                });
            }
            filteredFilters = getAllFilters(filteredRecipes);
            updateDOM(filteredRecipes, filteredFilters);
        } else {
            updateDOM(originalRecipes, originalFilters);
        }
    };

    /**
     * Search in list of tags
     * @param {HTMLElement} - Target input
     */
    const searchInFilter = (research, currentListTags, category) => {
        console.log(filteredFilters);
        currentListTags.innerHTML = "";
        let tempFilters = [];
        let filteredTags = [];

        if (filteredFilters.length === 0) {
            tempFilters = originalFilters;
        } else {
            tempFilters = filteredFilters;
        }

        if (category === "ingredients") {
            filteredTags = tempFilters.listUniqueIngredients.filter((ingredient) => {
                return stringReformat(ingredient).includes(research);
            });
            console.log(filteredTags);
            displayFilters(filteredTags).ingredients();
        } else if (category === "appliances") {
            filteredTags = tempFilters.listUniqueAppliances.filter((appliance) => {
                return stringReformat(appliance).includes(research);
            });
            displayFilters(filteredTags).appliances();
        } else if (category === "ustensils") {
            filteredTags = tempFilters.listUniqueUstensils.filter((ustensil) => {
                return stringReformat(ustensil).includes(research);
            });
            displayFilters(filteredTags).ustensils();
        }
    };

    const updateDOM = (recipes, filters) => {
        displayRecipesCards(recipes);
        displayFilters(filters.listUniqueIngredients).ingredients();
        displayFilters(filters.listUniqueAppliances).appliances();
        displayFilters(filters.listUniqueUstensils).ustensils();
    };

    return { searchBar, searchByTag, searchInFilter, updateDOM};
};





