import { skeletonTemplate } from "../templates/SkeletonTemplate.js";

/**
 * Display the skeleton loader
 * @param {Array.<Object>} - Reformated recipes
 * @param {HTMLElement} - Container
 */
export const displaySkeleton = async (recipes, recipesSection) => {
    recipes.forEach((data) => {
        const skeletonCard = skeletonTemplate(data.recipe).createSkeletonCard();
        recipesSection.appendChild(skeletonCard);
    });
};

/*
* Remove the skeleton cards
*/
export const removeSkeleton = async () => {
    const listSkeleton = document.querySelectorAll(".skeleton-card");
    listSkeleton.forEach((skeleton) => {
        skeleton.remove();
    });
};