import { recipes } from "../data/recipes.js";
import { skeletonModel } from "./models/SkeletonModel.js";
import { recipeModel } from "./models/RecipeModel.js";
import { filterModel } from "./models/FilterModel.js";
import { tagModel } from "./models/TagModel.js";
import { getAllFilters, toggleFilter, searchInTag } from "./utils/filter.js";
import { search } from "./utils/search.js";
import { stringReformat } from "./utils/tools.js";

// Stores recipes data during initialization
export let allRecipes = [];
export let newDataFormat = [];

/**
 * Display the cards of the recipes
 * @param {Array.<Object>} - Recipes list
 */
export const displayRecipesCards = async (recipes) => {
    const recipesSection = document.querySelector(".recipes");
    await displaySkeleton(recipes, recipesSection);
    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    await sleep(800);
    await removeSkeleton();
    await recipes.forEach((data) => {
        const recipeCard = recipeModel(data.recipe).createRecipeCard();
        recipesSection.appendChild(recipeCard);
    });
};

/**
 * Display the filters of the tags
 * @param {Array} - Items list
 * @returns {Function}
 */
export const displayFilters = (listItems) => {

    const ingredients = () => {
        filterModel(listItems, "ingredient").createFiltersList();
    };

    const appliances = () => {
        filterModel(listItems, "appliance").createFiltersList();
    };

    const ustensils = () => {
        filterModel(listItems, "ustensil").createFiltersList();
    };

    return { ingredients, appliances, ustensils };
};

// Display the skeleton loader
const displaySkeleton = async (recipes, recipesSection) => {
    recipes.forEach((data) => {
        const skeletonCard = skeletonModel(data.recipe).createSkeletonCard();
        recipesSection.appendChild(skeletonCard);
    });
};

// Remove the skeleton cards
const removeSkeleton = async () => {
    // Recover the skeleton cards
    const listSkeleton = document.querySelectorAll(".skeleton-card");
    // Browse through the skeleton cards
    listSkeleton.forEach((skeleton) => {
        // Deletes the skeleton card that has been traveled
        skeleton.remove();
    });
};

/**
 * Reformat recipes data for research
 * @param {Array.<Object>} - Recipes list
 * @returns {Array.<Object>} Reformated recipes
 */
const reformatData = (recipes) => {
    let newDataFormat = [];
    recipes.forEach(recipe => {
        const txt = recipe.name.concat(" ", recipe.description)
            .concat(" ", recipe.appliance)
            .concat(" ", recipe.ustensils.toString())
            .concat(" ", recipe.ingredients.map((element) => element.ingredient).toString());
        newDataFormat.push({recipe: recipe, text: stringReformat(txt)});
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
        search(newDataFormat, initElem);
    } else if (initElem.matches(".filter__input")) {
        searchInTag(initElem);
    }
});

// Initialisation on load page
const init = () => {
    allRecipes = [...recipes];
    newDataFormat = reformatData(allRecipes);
    displayRecipesCards(newDataFormat);

    const allFilters = getAllFilters(allRecipes);
    displayFilters(allFilters.listUniqueIngredients).ingredients();
    displayFilters(allFilters.listUniqueAppliances).appliances();
    displayFilters(allFilters.listUniqueUstensils).ustensils();
};

// Init App
init();