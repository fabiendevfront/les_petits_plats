import { getFiltersContainerInfos } from "../pages/index.js";

/**
 * Toggle filters for display tags list and activate input
 * @param {HTMLElement} - Target filter
 */
export const toggleFilter = (filter, filterInfos, allFilters) => {

    filter.classList.toggle("active");

    allFilters.forEach((element) => {
        if (element !== filter && element.matches(".active")) {
            element.classList.remove("active");
            element.children[0].placeholder = element.id;
            element.children[1].style.display ="none";
        } else {
            return;
        }
    });

    if (filter.matches(".active")) {
        filterInfos.container.style.display = "flex";
        filter.children[0].placeholder = filterInfos.placeholder;
    } else {
        filterInfos.container.style.display = "none";
        filter.children[0].value = "";
        filter.children[0].placeholder = filter.id;
    }
};

/**
 * Get all filters items
 * @param {Array.<Object>} - Recipes list
 * @returns {Array.<Object>} Object array of filters items
 */
export const getAllFilters  = (recipes) => {
    let ingredients = [];
    let appliances = [];
    let ustensils = [];

    recipes.forEach((item) => {
        item.recipe.ingredients.forEach((element) => {
            ingredients.push(element.ingredient);
        });

        appliances.push(item.recipe.appliance);

        item.recipe.ustensils.forEach((element) => {
            ustensils.push(element);
        });
    });

    const listUniqueIngredients = [...new Set(ingredients)].sort();
    const listUniqueAppliances = [...new Set(appliances)].sort();
    const listUniqueUstensils = [...new Set(ustensils)].sort();

    return {listUniqueIngredients, listUniqueAppliances, listUniqueUstensils};
};

/**
 * Close filters if open
 * @param {NodeList} - All filters
 */
export const filtersClose = (allFilters) => {
    allFilters.forEach((element) => {
        if (element.matches(".active")) {
            const filterInfos = getFiltersContainerInfos(element);
            toggleFilter(element, filterInfos, allFilters);
        }
    });
};

