import { stringReformat } from "./tools.js";
import { newDataFormat } from "../app.js";
import { displayFilters } from "../app.js";

/**
 * Toggle filters for display tags list and activate input
 * @param {HTMLElement} - Target filter
 */
export const toggleFilter = (filter) => {
    const allFilter = document.querySelectorAll(".filter");
    let listElem = "";
    let placeholder = "";

    if(filter.matches(".filter--ingredients")) {
        listElem = document.querySelector(".filter__list--ingredient");
        placeholder = "Rechercher un ingrédient";
    } else if (filter.matches(".filter--appliances")) {
        listElem = document.querySelector(".filter__list--appliance");
        placeholder = "Rechercher un appareil";
    } else if (filter.matches(".filter--ustensils")) {
        listElem = document.querySelector(".filter__list--ustensil");
        placeholder = "Rechercher un ustensile";
    }

    filter.classList.toggle("active");

    allFilter.forEach((element) => {
        if (element !== filter && element.matches(".active")) {
            element.classList.remove("active");
            element.children[0].placeholder = element.id;
            element.children[1].style.display ="none";
        } else {
            return;
        }
    });

    if (filter.matches(".active")) {
        listElem.style.display = "flex";
        filter.children[0].placeholder = placeholder;
    } else {
        listElem.style.display = "none";
        filter.children[0].value = "";
        filter.children[0].placeholder = filter.id;
        const allFilters = getAllFilters(newDataFormat);
        displayFilters(allFilters.listUniqueIngredients).ingredients();
        displayFilters(allFilters.listUniqueAppliances).appliances();
        displayFilters(allFilters.listUniqueUstensils).ustensils();
    }
};

/**
 * Get all filters
 * @param {Array.<Object>} - Recipes list
 * @returns {Array} Array of filters
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
 * Search in list of tags
 * @param {HTMLElement} - Target input
 */
export const searchInFilter = (input) => {
    const listTags = input.nextElementSibling;
    listTags.innerHTML = "";
    const allFilters = getAllFilters(newDataFormat);
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

export const filtersClose = () => {
    const allFilter = document.querySelectorAll(".filter");
    allFilter.forEach((element) => {
        if (element.matches(".active")) {
            toggleFilter(element);
        }
    });
};


