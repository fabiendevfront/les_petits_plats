/**
 * Recipe template
 * @param {Object} - Recipe data
 * @returns {Function} - Create HTML Element
 */
export const recipeTemplate = (data) => {
    const { name, ingredients, time, description } = data;

    // Path of the recipe cover
    const picture = "dist/assets/images/recipe.jpg";
    const clockIcon = "dist/assets/icons/time.svg";

    /**
     * Create recipe card template
     * @returns {HTMLElement}
     */
    const createRecipeCard = () => {
        const recipeCard = document.createElement("article");
        recipeCard.classList.add("recipe-card");
        const recipeInfos =  `
            <div class="recipe-card__picture">
                <img src="${picture}" alt="Photo de la recette ${name}">
            </div>
            <div class="recipe-card__content">
                <div class="recipe-card__head">
                    <h2 class="recipe-card__title">${name}</h2>
                    <div class="recipe-card__duration">
                        <img src="${clockIcon}" alt="" class="recipe-card__icon">
                        <h3 class="recipe-card__time">${time} min</h3>
                    </div>
                </div>
                <div class="recipe-card__body">
                    <div class="recipe-card__ingredients"></div>
                    <p class="recipe-card__instruction">
                        ${description}
                    </p>
                </div>
            </div>
        `;
        recipeCard.innerHTML = recipeInfos;
        recipeCard.querySelector(".recipe-card__ingredients").appendChild(createIngredients());
        return recipeCard;
    };

    /**
     * Create ingredients list
     * @returns {HTMLElement}
     */
    const createIngredients = () => {
        const ingredientList = document.createElement("ul");
        ingredientList.classList.add("recipe-card__list");
        let ingredientInfos = "";
        ingredients.forEach(ingredient => {
            ingredientInfos += `<li class="recipe-card__ingredient"><strong>${ingredient.ingredient} ${ingredient.quantity || ingredient.unit ? ":" : ""}</strong> ${ingredient.quantity ? ingredient.quantity : ""} ${ingredient.unit ? ingredient.unit : ""}</li>`;
        });
        ingredientList.innerHTML = ingredientInfos;
        return ingredientList;
    };

    return { createRecipeCard };
};
