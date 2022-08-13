// Toggle filters for display tags list and activate input
export const toggleFilter = (filter) => {
    const allFilter = document.querySelectorAll(".filter");
    let listElem = "";
    let placeholder = "";

    if(filter.matches(".filter--ingredients")) {
        listElem = document.querySelector(".filter__list--ingredient");
        placeholder = "Rechercher un ingrédient";
    } else if (filter.matches(".filter--appliances")) {
        listElem = document.querySelector(".filter__list--appliance");
        placeholder = "Rechercher un appareil";
    } else if (filter.matches(".filter--ustensils")) {
        listElem = document.querySelector(".filter__list--ustensil");
        placeholder = "Rechercher un ustensile";
    }

    filter.classList.toggle("active");

    allFilter.forEach((element) => {
        if (element !== filter && element.matches(".active")) {
            element.classList.remove("active");
            element.children[0].placeholder = element.id;
            element.children[1].style.display ="none";
        } else {
            return;
        }
    });

    if (filter.matches(".active")) {
        listElem.style.display = "flex";
        filter.children[0].placeholder = placeholder;
    } else {
        listElem.style.display = "none";
        filter.children[0].placeholder = filter.id;
    }
};
