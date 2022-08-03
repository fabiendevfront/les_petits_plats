import { recipes } from "../../data/recipes.js";
import { recipeTemplate } from "../templates/RecipeTemplate.js";

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

const init = () => {
    allRecipes = [...recipes];
    displayRecipesCards(allRecipes);
};

// Init App
init();