import { tagTemplate } from "../templates/TagTemplate.js";
import { initSearch } from "../app.js";
import { stringReformat } from "../utils/tools.js";

export let arrayTags = [];

/**
 * Add tag in array and display it in DOM
 * @param {Object} - Tag
 * @param {HTMLElement} - Container
*/
export const addTag = (tag, container) => {
    container.innerHTML = "";
    arrayTags.push(tag);
    arrayTags = [...new Set(arrayTags)];
    arrayTags.forEach((item) => {
        let tagDOM = tagTemplate(item.value, item.category).createTag();
        container.appendChild(tagDOM);
    });
    initSearch.search();
};

/**
 * Remove tag in array and remove it in DOM
 * @param {HTMLElement} - Tag target
 */
export const removeTag = (target) => {
    const tag = stringReformat(target.innerHTML);
    const index = arrayTags.findIndex(i => i.value === tag);
    if (index !== -1) {
        arrayTags.splice(index, 1);
    }
    initSearch.search();
    target.remove();
};