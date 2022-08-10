let researchInputTermsUst = [];

function createFilterUstensils(recipes) {
    const ustensilList = document.querySelector(".dropdown-ust-items");
    ustensilList.innerHTML = "";
    let arrayUstensils = [];

    recipes.forEach((recipe) => {
        const ustensils = recipe.ustensils;
        for (let i = 0; i < ustensils.length; i++) {
            let strUstensils = capitalizeFirstLetter(ustensils[i]);
            if (!arrayUstensils.includes(strUstensils)) { //Si un ingrédient est déjà présent dans la liste, on ne l'ajoute pas
                if (!researchInputTermsUst.includes(strUstensils)) { //Si un tag est selectionné, ne pas afficher son nom dans la liste des ingredients
                    arrayUstensils.push(strUstensils);
                }
            }
        }
    });

    arrayUstensils.map((ustensil) => {
        ustensilList.innerHTML +=
            `<li>${ustensil}</li>`
    }
    );
}