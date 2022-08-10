let researchInputTermsApp = [];

function createFilterAppliance(recipes) {
    const applianceList = document.querySelector(".dropdown-app-items");
    applianceList.innerHTML = "";
    let arrayAppliance = [];

    recipes.forEach((recipe) => {
        const appliance = recipe.appliance;
        for (let i = 0; i < appliance.length; i++) {
            let strAppliance = capitalizeFirstLetter(appliance);
            if (!arrayAppliance.includes(strAppliance)) { //Si un ingrédient est déjà présent dans la liste, on ne l'ajoute pas
                if (!researchInputTermsApp.includes(strAppliance)) { //Si un tag est selectionné, ne pas afficher son nom dans la liste des ingredients
                    arrayAppliance.push(strAppliance);
                }
            }
        }
    });

    arrayAppliance.map((appliance) => {
        applianceList.innerHTML +=
            `<li>${appliance}</li>`
    }
    );
}