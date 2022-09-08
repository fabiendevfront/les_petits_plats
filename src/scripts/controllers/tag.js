import { tagTemplate } from "../templates/TagTemplate.js";
import { initSearch } from "../app.js";
import { stringReformat } from "../utils/tools.js";
import { researchValue } from "../pages/index.js";

export let arrayTags = [];

/**
 * Add tag in array and display it in DOM
 * @param {Object} - Tag
 * @param {HTMLElement} - Container
*/
export const addTag = (tag, container) => {
    container.innerHTML = "";
    arrayTags.push(tag);
    const jsonObject = arrayTags.map(JSON.stringify);
    const uniqueSet = new Set(jsonObject);
    const uniqueArray = Array.from(uniqueSet).map(JSON.parse);
    arrayTags = uniqueArray;
    arrayTags.forEach((item) => {
        let tagDOM = tagTemplate(item.value, item.category).createTag();
        container.appendChild(tagDOM);
    });
    initSearch.search(researchValue);
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
    initSearch.search(researchValue);
    target.remove();
};