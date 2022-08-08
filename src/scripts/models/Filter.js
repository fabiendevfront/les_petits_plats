/**
 * Creates a photographer card or profil.
 * @param {Object} - Items list
 * @param {String} - Filters category
 * @returns {Function} - Create HTML Element
 */
export const filterTemplate = (data, category) => {
    /**
     * filters template
     * @returns {HTMLElement}
     */
    const createFilterItem = () => {
        const filterList = document.createElement("ul");
        filterList.classList.add("filter__list");
        filterList.classList.add(`filter__list--${category}`);
        let filterItems = "";
        data.forEach((element) => {
            filterItems += `<li class="filter__item filter__item--${category}">${element}</li>`;
        });

        filterList.innerHTML = filterItems;
        return filterList;
    };

    return { createFilterItem };
};
