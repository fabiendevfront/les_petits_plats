import { getAllFilters } from "./filter.js";
import { stringReformat } from "../utils/tools.js";
import { displayRecipesCards, displayFilters, researchForm } from "../pages/index.js";
import { arrayTags } from "./tag.js";


export const searchEngine = (reformatedRecipes, allFilters) => {
    const originalRecipes = reformatedRecipes;
    const originalFilters = allFilters;
    let filteredFilters = [];
    let results = [];


    // // Primary Search
    // const searchBar = (research) => {
    //     if (research.length >= 3) {
    //         filteredRecipes = originalRecipes.filter((recipe) => {
    //             return (
    //                 recipe.searchBar.includes(research)
    //             );
    //         });
    //         filteredFilters = getAllFilters(filteredRecipes);
    //         updateDOM(filteredRecipes, filteredFilters);
    //     } else {
    //         updateDOM(originalRecipes, originalFilters);
    //     }
    // };

    // const searchByTag = (arrayTags) => {
    //     const joinTags = arrayTags.join(" ");
    //     let tempRecipes = [];
    //     let tempFilters = [];
    //     if (arrayTags.length) {
    //         if (filteredRecipes.length) {
    //             tempRecipes = filteredRecipes.filter((recipe) => {
    //                 return (
    //                     recipe.searchTags.includes(stringReformat(joinTags))
    //                 );
    //             });
    //         } else {
    //             tempRecipes = originalRecipes.filter((recipe) => {
    //                 return (
    //                     recipe.searchTags.includes(stringReformat(joinTags))
    //                 );
    //             });
    //         }
    //         tempFilters = getAllFilters(tempRecipes);
    //         updateDOM(tempRecipes, tempFilters);
    //     } else {
    //         updateDOM(originalRecipes, originalFilters);
    //     }
    // };

    const search = () => {
        if (researchForm.length >= 3) {
            results = originalRecipes.filter((recipe) => {
                return (
                    recipe.searchBar.includes(researchForm)
                );
            });
        } else {
            results = originalRecipes;
        }

        if (arrayTags.length) {
            arrayTags.forEach((tag) => {
                results = results.filter((recipe) => {
                    return (
                        recipe.searchTags.includes(stringReformat(tag))
                    );
                });
            });
        }

        filteredFilters = getAllFilters(results);
        updateDOM (results, filteredFilters);
    };

    /**
     * Search in list of tags
     * @param {HTMLElement} - Target input
     */
    const searchInFilter = (research, currentListTags, category) => {
        console.log(filteredFilters);
        currentListTags.innerHTML = "";
        let tempFilters = [];
        let filteredTags = [];

        if (filteredFilters.length === 0) {
            console.log("Pas de results précédants");
            tempFilters = originalFilters;
        } else {
            console.log("Il  ya des résultats");
            tempFilters = filteredFilters;
        }

        if (category === "ingredients") {
            filteredTags = tempFilters.listUniqueIngredients.filter((ingredient) => {
                return stringReformat(ingredient).includes(research);
            });
            displayFilters(filteredTags).ingredients();
        } else if (category === "appliances") {
            filteredTags = tempFilters.listUniqueAppliances.filter((appliance) => {
                return stringReformat(appliance).includes(research);
            });
            displayFilters(filteredTags).appliances();
        } else if (category === "ustensils") {
            filteredTags = tempFilters.listUniqueUstensils.filter((ustensil) => {
                return stringReformat(ustensil).includes(research);
            });
            displayFilters(filteredTags).ustensils();
        }
    };

    const updateDOM = (recipes, filters) => {
        displayRecipesCards(recipes);
        displayFilters(filters.listUniqueIngredients).ingredients();
        displayFilters(filters.listUniqueAppliances).appliances();
        displayFilters(filters.listUniqueUstensils).ustensils();
    };

    return { search, searchInFilter, updateDOM  };
};





