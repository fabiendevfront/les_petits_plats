import { recipes } from "../data/recipes.js";
import { recipeModel } from "./models/RecipeModel.js";
import { filterModel } from "./models/FilterModel.js";
import { toggleFilter } from "./utils/filter.js";
import { search } from "./utils/search.js";

// Stores recipes data during initialization
export let allRecipes = [];

// Display the cards of the recipes
const displayRecipesCards = async (recipes) => {
    const recipesSection = document.querySelector(".recipes");
    await recipes.forEach((data) => {
        const recipeCard = recipeModel(data).createRecipeCard();
        recipesSection.appendChild(recipeCard);
    });
};

// Display the filters of the tags
const displayFilters = (allRecipes) => {
    const allFilters = filterModel().getAllFilters(allRecipes);

    const ingredientsSection = document.querySelector(".filter--ingredients");
    const ingredients = allFilters.listUniqueIngredients;
    const ingredientsDOM = filterModel().createFiltersList(ingredients, "ingredient");
    ingredientsSection.appendChild(ingredientsDOM);

    const appliancesSection = document.querySelector(".filter--appliances");
    const appliances = allFilters.listUniqueAppliances;
    const appliancesDOM = filterModel().createFiltersList(appliances, "appliance");
    appliancesSection.appendChild(appliancesDOM);

    const ustensilsSection = document.querySelector(".filter--ustensils");
    const ustensils = allFilters.listUniqueUstensils;
    const ustensilsDOM = filterModel().createFiltersList(ustensils, "ustensil");
    ustensilsSection.appendChild(ustensilsDOM);
};

// Event delegation for toggle filters and displays tags list
const filters = document.querySelector(".filters");
console.log(filters);

filters.addEventListener("click", (event) => {
    event.preventDefault();
    const initElem = event.target;

    if (initElem.matches(".filter")) {
        toggleFilter(initElem);
    } else {
        return;
    }
});

// Initialisation on load page
const init = () => {
    allRecipes = [...recipes];
    displayRecipesCards(allRecipes);
    displayFilters(allRecipes);
    search(allRecipes);
};

// Init App
init();