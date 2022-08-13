import { recipes } from "../data/recipes.js";
import { recipeModel } from "./models/RecipeModel.js";
import { filterModel } from "./models/FilterModel.js";
import { tagModel } from "./models/TagModel.js";
import { toggleFilter } from "./utils/filter.js";
import { search } from "./utils/search.js";
import { stringReformat } from "./utils/tools.js";

// Stores recipes data during initialization
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

// const reformatData = (recipes) => {
//     let newDataFormat = [];
//     recipes.forEach((recipe) => {
//         let recipeElements = [];
//         recipeElements.push(recipe.name);
//         recipeElements.push(recipe.description);
//         recipeElements.push(recipe.appliance);
//         recipeElements.push(recipe.ustensils.toString());
//         recipeElements.push(recipe.ingredients.map((element) => element.ingredient).toString());
//         newDataFormat.push(recipeElements.join());
//     });
//     return newDataFormat;
// };

const  reformatData = (recipes) => {
    let newDataFormat = [];
    recipes.forEach(recipe => {
        const txt = recipe.name.concat(" ", recipe.description)
            .concat(" ", recipe.appliance)
            .concat(" ", recipe.ustensils.toString())
            .concat(" ", recipe.ingredients.map((element) => element.ingredient).toString());
        newDataFormat.push(recipe, stringReformat(txt));
    });
    return newDataFormat;
};

// Event delegation
document.addEventListener("click", (event) => {
    event.preventDefault();
    const initElem = event.target;
    console.log(event.target);

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

// Initialisation on load page
const init = () => {
    const allRecipes = [...recipes];
    displayRecipesCards(allRecipes);
    displayFilters(allRecipes);
    newDataFormat = reformatData(allRecipes);
    console.log(newDataFormat);
    search(newDataFormat);
};

// Init App
init();