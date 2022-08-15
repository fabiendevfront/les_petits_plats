import { recipes } from "../data/recipes.js";
import { recipeModel } from "./models/RecipeModel.js";
import { filterModel } from "./models/FilterModel.js";
import { tagModel } from "./models/TagModel.js";
import { getAllFilters, toggleFilter, searchInTag } from "./utils/filter.js";
import { search } from "./utils/search.js";
import { stringReformat } from "./utils/tools.js";

// Stores recipes data during initialization
export let allRecipes = [];
export let newDataFormat = [];

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
    const allFilters = getAllFilters(allRecipes);

    const ingredientsSection = document.querySelector(".filter--ingredients");
    const ingredients = allFilters.listUniqueIngredients;
    const ingredientsDOM = filterModel(ingredients, "ingredient").createFiltersList();
    ingredientsSection.appendChild(ingredientsDOM);

    const appliancesSection = document.querySelector(".filter--appliances");
    const appliances = allFilters.listUniqueAppliances;
    const appliancesDOM = filterModel(appliances, "appliance").createFiltersList();
    appliancesSection.appendChild(appliancesDOM);

    const ustensilsSection = document.querySelector(".filter--ustensils");
    const ustensils = allFilters.listUniqueUstensils;
    const ustensilsDOM = filterModel(ustensils, "ustensil").createFiltersList();
    ustensilsSection.appendChild(ustensilsDOM);
};

const reformatData = (recipes) => {
    let newDataFormat = [];
    recipes.forEach(recipe => {
        const txt = recipe.name.concat(" ", recipe.description)
            .concat(" ", recipe.appliance)
            .concat(" ", recipe.ustensils.toString())
            .concat(" ", recipe.ingredients.map((element) => element.ingredient).toString());
        newDataFormat.push({recette: recipe, texte: stringReformat(txt)});
    });
    return newDataFormat;
};

// Event click delegation
document.addEventListener("click", (event) => {
    event.preventDefault();
    const initElem = event.target;

    if (initElem.matches(".filter")) {
        toggleFilter(initElem);
    } else if (initElem.matches(".filter__item")) {
        tagModel(initElem).addTag();
    } else if (initElem.matches(".tag-item")) {
        tagModel(initElem).removeTag();
    } else {
        return;
    }
});

// Event keyboard delegation
document.addEventListener("input", (event) => {
    event.preventDefault();
    const initElem = event.target;

    if (initElem.matches(".search__input")) {
        search(newDataFormat);
    } else if (initElem.matches(".filter__input")) {
        searchInTag(initElem);
    }
});

// Initialisation on load page
const init = () => {
    allRecipes = [...recipes];
    displayRecipesCards(allRecipes);
    displayFilters(allRecipes);
    newDataFormat = reformatData(allRecipes);
};

// Init App
init();