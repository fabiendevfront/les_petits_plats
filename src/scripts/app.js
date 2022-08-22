import { recipes } from "../data/recipes.js";
import { reformatRecipes } from "./utils/tools.js";
import { displayRecipesCards, displayFilters } from "./pages/index.js";
import { getAllFilters } from "./controllers/filter.js";
import { searchEngine } from "./controllers/search.js";

// Stores datas during initialization
export let reformatedRecipes = [];
export let allFilters = [];
export let initSearch = {};

// Initialisation on load page
const init = () => {
    reformatedRecipes = reformatRecipes([...recipes]);
    displayRecipesCards(reformatedRecipes);

    allFilters = getAllFilters(reformatedRecipes);
    displayFilters(allFilters.listUniqueIngredients).ingredients();
    displayFilters(allFilters.listUniqueAppliances).appliances();
    displayFilters(allFilters.listUniqueUstensils).ustensils();

    initSearch = searchEngine(reformatedRecipes, allFilters);
};

// Init App
init();