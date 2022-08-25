/**
 * Tag Template
 * @param {String} - Tag value
 * @param {String} - Tag category
 * @returns {Function}
 */
export const tagTemplate = (tag, category) => {
    /**
     * Create tag template
     * @returns {HTMLElement}
     */
    const createTag = () => {
        const tagItem = document.createElement("li");
        tagItem.classList.add("tag-item");
        tagItem.classList.add(`tag-item--${category}`);
        tagItem.innerHTML = tag;

        return tagItem;
    };

    return { createTag };
};
