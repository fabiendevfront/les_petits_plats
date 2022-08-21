import { reformatedRecipes } from "../app.js";
import { tagTemplate } from "../templates/TagTemplate.js";
import { searchByTag } from "./search.js";

export let arrayTags = [];

/**
 * Add tag in array and display it in DOM
 * @param {HTMLElement} - Target
 * @param {HTMLElement} - Container
 * @returns {HTMLElement}
*/
export const addTag = (target, container) => {
    arrayTags.push(target.innerHTML);
    const tagDOM = tagTemplate(target).createTag();
    container.appendChild(tagDOM);
    searchByTag(arrayTags, reformatedRecipes);

    return tagDOM;
};

/**
 * Remove tag in array and remove it in DOM
 * @param {HTMLElement} - Target
 */
export const removeTag = (target) => {
    const indexTarget = arrayTags.indexOf(target.innerHTML);
    if (indexTarget !== -1) {
        arrayTags.splice(indexTarget, 1);
    }
    searchByTag(arrayTags, reformatedRecipes);
    target.remove();
};