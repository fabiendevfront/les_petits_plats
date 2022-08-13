/**
 * Filters Models
 * @returns {Function} - Get all filters, Create HTML Element
 */
export const filterModel = () => {
    /**
     * Get all filters
     * @param {Object} - Recipes list
     * @returns {Object} Array of filters
     */
    const getAllFilters  = (recipes) => {
        let ingredients = [];
        let appliances = [];
        let ustensils = [];

        recipes.forEach((recipe) => {
            recipe.ingredients.forEach((element) => {
                ingredients.push(element.ingredient);
            });

            appliances.push(recipe.appliance);

            recipe.ustensils.forEach((element) => {
                ustensils.push(element);
            });
        });

        const listUniqueIngredients = [...new Set(ingredients)].sort();
        const listUniqueAppliances = [...new Set(appliances)].sort();
        const listUniqueUstensils = [...new Set(ustensils)].sort();

        return {listUniqueIngredients, listUniqueAppliances, listUniqueUstensils};
    };

    /**
     * filters template
     * @param {Object} - Items list
     * @param {String} - Filters category
     * @returns {HTMLElement}
     */
    const createFiltersList = (data, category) => {
        const filterList = document.createElement("ul");
        filterList.classList.add("filter__list");
        filterList.classList.add(`filter__list--${category}`);
        let filterItems = "";
        data.forEach((element) => {
            filterItems += `<li class="filter__item filter__item--${category}">${element}</li>`;
        });

        filterList.innerHTML = filterItems;
        return filterList;
    };

    return { getAllFilters, createFiltersList };
};
