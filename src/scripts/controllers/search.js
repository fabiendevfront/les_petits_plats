import { displayRecipesCards, displayFilters } from "../pages/index.js";
import { getAllFilters } from "./filter.js";
import { stringReformat } from "../utils/tools.js";
import { arrayTags } from "./tag.js";

/**
* Search Engine
* @param {Array.<Object>} - Reformated recipes data
* @param {Array.<Object>} - All filters
* @return {Function}
*/
export const searchEngine = (originalRecipes, originalFilters) => {
    let filteredFilters = [];

    /**
    * Search function (v1) by form/tag and update DOM
    * @param {String} - Research value
    */
    const search = (researchValue) => {
        let results = [];

        if (researchValue.length >= 3) {
            results = originalRecipes.filter((recipe) => {
                return (
                    recipe.searchBar.includes(researchValue)
                );
            });
        } else {
            results = originalRecipes;
        }

        if (arrayTags.length) {
            arrayTags.forEach((tag) => {
                results = results.filter((recipe) => {
                    return (
                        recipe.searchTags.includes(stringReformat(tag.value))
                    );
                });
            });
        }

        filteredFilters = getAllFilters(results);
        updateDOM (results, filteredFilters);
    };

    /**
     * Search in filters for tags
     * @param {String} - Target input value
     * @param {HTMLElement} - Current list of tags
     * @param {String} - Category of filter
     */
    const searchInFilter = (research, currentListTags, category) => {
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

    /**
     * Search in filters for tags
     * @param {Array.<Object>} - Recipes data
     * @param {Array.<Object>} - Filters list
     */
    const updateDOM = (recipes, filters) => {
        displayRecipesCards(recipes);
        displayFilters(filters.listUniqueIngredients).ingredients();
        displayFilters(filters.listUniqueAppliances).appliances();
        displayFilters(filters.listUniqueUstensils).ustensils();
    };

    return { search, searchInFilter, updateDOM };
};





