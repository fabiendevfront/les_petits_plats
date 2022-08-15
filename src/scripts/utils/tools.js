import { skeletonModel } from "../models/SkeletonModel.js";

// Reformats strings to lower case and removes accents
export const stringReformat = (string) => {
    let stringReformated = string.toLowerCase();
    stringReformated = stringReformated.replace(/[éèêë]/g, "e");
    stringReformated = stringReformated.replace(/[àâ]/g, "a");
    stringReformated = stringReformated.replace(/[ùû]/g, "u");
    stringReformated = stringReformated.replace(/[îï]/g, "i");
    stringReformated = stringReformated.replace(/[ç]/g, "c");
    return stringReformated;
};

// Create a delay to simulate a loading
export const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));


// Display the skeleton loader
export const displaySkeleton = async (recipes, recipesSection) => {
    recipes.forEach((data) => {
        const skeletonCard = skeletonModel(data.recipe).createSkeletonCard();
        recipesSection.appendChild(skeletonCard);
    });
};

// Remove the skeleton cards
export const removeSkeleton = async () => {
    const listSkeleton = document.querySelectorAll(".skeleton-card");
    listSkeleton.forEach((skeleton) => {
        skeleton.remove();
    });
};