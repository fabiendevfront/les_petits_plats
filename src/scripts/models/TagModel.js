/**
 * Filters Models
 * @returns {Function} - Get all filters, Create HTML Element
 */
export const tagModel = (target) => {
    const tagsContainer = document.querySelector(".tags__list");
    let listTags = [];
    let category = "";

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
        listTags.push(target.innerHTML, category);
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
        listTags = listTags.filter(item => !(item.value === target.innertHTML));
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

    return { addTag, createTag, removeTag };
};
