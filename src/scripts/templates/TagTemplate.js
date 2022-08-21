/**
 * Tag Model
 * @returns {Function}
 */
export const tagTemplate = (target) => {
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
    const createTag = () => {
        const tagItem = document.createElement("li");
        tagItem.classList.add("tag-item");
        tagItem.classList.add(`tag-item--${category}`);
        tagItem.innerHTML = target.innerHTML;

        return tagItem;
    };

    return { createTag };
};
