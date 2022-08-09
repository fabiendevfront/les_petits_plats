import { recipes } from "../data/recipes.js";
import { recipeTemplate } from "./models/Recipe.js";
import { filterTemplate } from "./models/Filter.js";
import { toggleFilter } from "./utils/filter.js";
import { search } from "./utils/search.js";

// Stores recipes data during initialization
export let allRecipes = [];

// Display the cards of the recipes
const displayRecipesCards = async (recipes) => {
    const recipesSection = document.querySelector(".recipes");
    await recipes.forEach((data) => {
        const recipeCard = recipeTemplate(data).createRecipeCard();
        recipesSection.appendChild(recipeCard);
    });
};

// Display the filters of the tags
const displayFilters = (recipes) => {
    const ingredientsSection = document.querySelector(".filter--ingredients");
    const ingredients = getAllIngredients(recipes);
    const ingredientsDOM = filterTemplate(ingredients, "ingredient").createFilterItem();
    ingredientsSection.appendChild(ingredientsDOM);

    const appliancesSection = document.querySelector(".filter--appliances");
    const appliances = getAllAppliances(recipes);
    const appliancesDOM = filterTemplate(appliances, "appliance").createFilterItem();
    appliancesSection.appendChild(appliancesDOM);

    const ustensilsSection = document.querySelector(".filter--ustensils");
    const ustensils = getAllUstensils(recipes);
    const ustensilsDOM = filterTemplate(ustensils, "ustensil").createFilterItem();
    ustensilsSection.appendChild(ustensilsDOM);
};

// Event delegation for toggle filters and displays tags list
const filters = document.querySelector(".filters");

filters.addEventListener("click", (event) => {
    event.preventDefault();
    const initElem = event.target;

    if (initElem.matches(".filter")) {
        toggleFilter(initElem);
    } else {
        return;
    }
});

// Get all ingredients tags
const getAllIngredients = (recipes) => {
    let ingredients = [];
    recipes.forEach((recipe) => {
        recipe.ingredients.forEach((element) => {
            ingredients.push(element.ingredient);
        });
    });
    const listUniqueIngredients = [...new Set(ingredients)].sort();
    return listUniqueIngredients;
};

// Get all appliances tags
const getAllAppliances = (recipes) => {
    let appliances = [];
    recipes.forEach((recipe) => {
        appliances.push(recipe.appliance);
    });
    const listUniqueAppliances = [...new Set(appliances)].sort();
    return listUniqueAppliances;
};

// Get all ustensils tags
const getAllUstensils = () => {
    let ustensils = [];
    recipes.forEach((recipe) => {
        recipe.ustensils.forEach((element) => {
            ustensils.push(element);
        });
    });
    const listUniqueUstensils = [...new Set(ustensils)].sort();
    return listUniqueUstensils;
};

// Initialisation on load page
const init = () => {
    allRecipes = [...recipes];
    displayRecipesCards(allRecipes);
    displayFilters(allRecipes);
    search(allRecipes);
};

// Init App
init();