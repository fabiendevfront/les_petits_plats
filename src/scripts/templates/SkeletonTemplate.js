/**
 * Creates a photographer card or profil.
 * @param {Object} - recipe data
 * @returns {Function} - Create HTML Element
 */
export const skeletonTemplate = () => {

    /**
     * Recipe card template
     * @returns {HTMLElement}
     */
    const createSkeletonCard = () => {
        const skeletonCard = document.createElement("article");
        skeletonCard.classList.add("skeleton-card");
        const skeletonInfos =  `
            <div class="skeleton-card__picture"></div>
            <div class="skeleton-card__content">
                <div class="skeleton-card__head">
                    <h2 class="skeleton-card__title"></h2>
                    <div class="skeleton-card__duration"></div>
                </div>
                <div class="skeleton-card__body">
                    <div class="skeleton-card__ingredients"></div>
                    <p class="skeleton-card__instruction"></p>
                </div>
            </div>
        `;
        skeletonCard.innerHTML = skeletonInfos;
        return skeletonCard;
    };

    return { createSkeletonCard };
};