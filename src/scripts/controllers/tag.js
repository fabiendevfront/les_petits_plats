import { tagTemplate } from "../templates/TagTemplate.js";
import { initSearch } from "../app.js";

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
    // initSearch.searchByTag(arrayTags);
    initSearch.search();
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
    // initSearch.searchByTag(arrayTags);
    initSearch.search();
    target.remove();
};