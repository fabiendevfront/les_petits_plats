import { stringReformat } from "./tools.js";

// Primary Search
export const search = (allRecipes) => {
    console.log(allRecipes);
    // const searchInput = document.querySelector(".search__input");
    // const recipesContainer = document.querySelector(".recipes");

    // searchInput.addEventListener("input", (event) => {
    //     const research = stringReformat(event.target.value);
    //     console.log(research);
    //     let filteredRecipies = allRecipes.filter((recipe) => {
    //         const recipeIngredients = recipe.ingredients.map((element) => element.ingredient).toString();
    //         return (
    //             stringReformat(recipe.name).includes(research) ||
    //             stringReformat(recipeIngredients).includes(research) ||
    //             stringReformat(recipe.description).includes(research)
    //         );
    //     });
    //     console.log(filteredRecipies);

    //     if (research.length >= 3) {
    //         console.log("Lancement de la recherche !");
    //     }
    // });
};