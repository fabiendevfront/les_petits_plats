/**
 * Filter Template
 * @param {Array} - Filter list
 * @param {String} - Filter category
 * @returns {Function}
 */
export const filterTemplate = (data, category) => {
    /**
     * Create filter template
     * @returns {HTMLElement}
     */
    const createFiltersList = () => {
        const filterList = document.querySelector(`.filter__list--${category}`);
        let filterItems = "";
        if (data.length) {
            data.forEach((element) => {
                filterItems += `<li class="filter__item filter__item--${category}">${element}</li>`;
            });
        } else {
            filterItems = `<li class="filter__item filter__item--${category}">Aucun résultat</li>`;
        }

        filterList.innerHTML = filterItems;
        return filterList;
    };

    return { createFiltersList };
};
