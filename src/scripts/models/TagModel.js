import { listTags } from "../app.js";

/**
 * Tag Model
 * @returns {Function}
 */
export const tagModel = (target) => {
    const tagsContainer = document.querySelector(".tags__list");
    let category = "";
    let arrayTags = listTags;

    if(target.matches(".filter__item--ingredient")) {
        category = "ingredient";
    } else if (target.matches(".filter__item--appliance")) {
        category = "appliance";
    } else if (target.matches(".filter__item--ustensil")) {
        category = "ustensil";
    }

    /**
     * filters template
     * @param {HTMLElement} - Target
     * @returns {HTMLElement}
     */
    const addTag = () => {
        arrayTags.push(target.innerHTML);
        const tagTemplate = createTag();
        tagsContainer.appendChild(tagTemplate);

        return tagTemplate;
    };

    /**
     * filters template
     * @param {HTMLElement} - Target
     * @returns {HTMLElement}
     */
    const removeTag = () => {
        const indexTarget = arrayTags.indexOf(target.innerHTML);
        if (indexTarget !== -1) {
            arrayTags.splice(indexTarget, 1);
        }
        target.remove();
    };

    /**
     * filters template
     * @param {HTMLElement} - Target
     * @returns {HTMLElement}
     */
    const createTag = () => {
        const tagItem = document.createElement("li");
        tagItem.classList.add("tag-item");
        tagItem.classList.add(`tag-item--${category}`);
        tagItem.innerHTML = target.innerHTML;

        return tagItem;
    };

    return {
        addTag, createTag, removeTag,
        get arrayTags() {
            return arrayTags;
        },
    };
};
