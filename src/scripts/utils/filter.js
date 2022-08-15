import { stringReformat } from "./tools.js";
import { allRecipes } from "../app.js";
import { filterModel } from "../models/FilterModel.js";

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
    }
};

/**
 * Get all filters
 * @param {Object} - Recipes list
 * @returns {Object} Array of filters
 */
export const getAllFilters  = (recipes) => {
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
 * Search in list of tags
 * @param {HTMLElement} - Target input
 */
export const searchInTag = (input) => {
    const allFilters = getAllFilters(allRecipes);
    const listTags = input.nextElementSibling;
    listTags.innerHTML = "";
    const research = stringReformat(input.value);
    let category = "";
    let filteredTags = [];

    if (input.id === "ingredients") {
        category = "ingredient";
        filteredTags = allFilters.listUniqueIngredients.filter((ingredient) => {
            return stringReformat(ingredient).includes(research);
        });
    } else if (input.id === "appliances") {
        category = "appliance";
        filteredTags = allFilters.listUniqueAppliances.filter((appliance) => {
            return stringReformat(appliance).includes(research);
        });
    } else if (input.id === "ustensils") {
        category = "ustensil";
        filteredTags = allFilters.listUniqueUstensils.filter((ustensil) => {
            return stringReformat(ustensil).includes(research);
        });
    }

    filterModel(filteredTags, category).createFiltersList();
};


