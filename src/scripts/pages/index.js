import { initSearch } from "../app.js";
import { recipeTemplate } from "../templates/RecipeTemplate.js";
import { filterTemplate } from "../templates/FilterTemplate.js";
import { displaySkeleton, removeSkeleton } from "../controllers/skeleton.js";
import { toggleFilter, filtersClose } from "../controllers/filter.js";
import { addTag, removeTag } from "../controllers/tag.js";
import { stringReformat, sleep } from "../utils/tools.js";

/*
* DOM Selection
*/
const recipesSection = document.querySelector(".recipes");
const tagsContainer = document.querySelector(".tags__list");
const allFilters = document.querySelectorAll(".filter");

/**
 * Displays the skeleton and then the recipe cards
 * @param {Array.<Object>} - Reformated recipes list
 */
export const displayRecipesCards = async (recipes) => {
    recipesSection.innerHTML = "";

    if (recipes.length) {
        await displaySkeleton(recipes, recipesSection);
        await sleep(800);
        await removeSkeleton();
        await recipes.forEach((data) => {
            const recipeCard = recipeTemplate(data.recipe).createRecipeCard();
            recipesSection.appendChild(recipeCard);
        });
    } else {
        recipesSection.innerHTML = `<div class="recipes__error">Aucune recette ne correspond à votre critère…<br>
            Vous pouvez chercher « tarte aux pommes », « poisson », etc.</div>`;
    }
};

/**
 * Display the filters of the tags
 * @param {Array} - Items list
 * @returns {Function}
 */
export const displayFilters = (listItems) => {
    const ingredients = () => {
        filterTemplate(listItems, "ingredient").createFiltersList();
    };

    const appliances = () => {
        filterTemplate(listItems, "appliance").createFiltersList();
    };

    const ustensils = () => {
        filterTemplate(listItems, "ustensil").createFiltersList();
    };

    return { ingredients, appliances, ustensils };
};

/**
 * Get filter container infos for toggle
 * @param {HTMLElement} - Filter
 * @returns {HTMLElement, String}
 */
export const getFiltersContainerInfos = (filter) => {
    let container = "";
    let placeholder = "";

    if (filter.matches(".filter--ingredients")) {
        container = document.querySelector(".filter__list--ingredient");
        placeholder = "Rechercher un ingrédient";
    } else if (filter.matches(".filter--appliances")) {
        container = document.querySelector(".filter__list--appliance");
        placeholder = "Rechercher un appareil";
    } else if (filter.matches(".filter--ustensils")) {
        container = document.querySelector(".filter__list--ustensil");
        placeholder = "Rechercher un ustensile";
    }

    return { container, placeholder};
};

/*
* EVENTS
*/

// Event click delegation
document.addEventListener("click", (event) => {
    event.preventDefault();
    const initElem = event.target;

    if (initElem.matches(".filter")) {
        const filterInfos = getFiltersContainerInfos(initElem);
        toggleFilter(initElem, filterInfos, allFilters);
    } else if (initElem.matches(".filter__item")) {
        addTag(initElem, tagsContainer);
        filtersClose(allFilters);
    } else if (initElem.matches(".tag-item")) {
        removeTag(initElem);
    } else if (!initElem.matches(".filter") && !initElem.matches(".filter__input")) {
        filtersClose(allFilters);
    } else {
        return;
    }
});

// Event keyboard delegation
document.addEventListener("input", (event) => {
    event.preventDefault();
    const initElem = event.target;

    if (initElem.matches(".search__input")) {
        const research = stringReformat(initElem.value);
        initSearch.searchBar(research);
    } else if (initElem.matches(".filter__input")) {
        const research = stringReformat(initElem.value);
        const currentListTags = initElem.nextElementSibling;
        const category = initElem.id;
        initSearch.searchInFilter(research, currentListTags, category);
    } else {
        return;
    }
});