/**
 * Reformat recipes data for research
 * @param {Array.<Object>} - Recipes list
 * @returns {Array.<Object>} - Reformated recipes
 */
export const reformatRecipes = (recipes) => {
    let newDataFormat = [];
    recipes.forEach(recipe => {
        const searchBar = recipe.name.concat(" ", recipe.description)
            .concat(" ", recipe.ingredients.map((element) => element.ingredient).toString());
        const searchTags = recipe.ingredients.map((element) => element.ingredient).toString()
            .concat(" ", recipe.appliance)
            .concat(" ", recipe.ustensils.toString());
        newDataFormat.push({recipe: recipe, searchBar: stringReformat(searchBar), searchTags: stringReformat(searchTags)});
    });
    return newDataFormat;
};

/**
 * Reformats strings to lower case and removes accents
 * @param {String} - String
 * @returns {String} - Reformated string
 */
export const stringReformat = (string) => {
    let stringReformated = string.toLowerCase();
    stringReformated = stringReformated.replace(/[éèêë]/g, "e");
    stringReformated = stringReformated.replace(/[àâ]/g, "a");
    stringReformated = stringReformated.replace(/[ùû]/g, "u");
    stringReformated = stringReformated.replace(/[îï]/g, "i");
    stringReformated = stringReformated.replace(/[ç]/g, "c");
    stringReformated = stringReformated.replace(/[,.!?]/g, " ");
    return stringReformated;
};

// Create a delay to simulate a loading
export const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));