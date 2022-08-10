let researchInputTermsIng = [];

function createFilterIngredients(recipes) {
    const ingredientList = document.querySelector(".dropdown-ing-items");
    ingredientList.innerHTML = "";
    let arrayIngredients = [];

    recipes.forEach((recipe) => {
        const ingredients = recipe.ingredients;
        for (let i = 0; i < ingredients.length; i++) {
            let strIngredient = capitalizeFirstLetter(ingredients[i].ingredient);
            if (!arrayIngredients.includes(strIngredient)) { //Si un ingrédient est déjà présent dans la liste, on ne l'ajoute pas
                if (!researchInputTermsIng.includes(strIngredient)) { //Si un tag est selectionné, ne pas afficher son nom dans la liste des ingredients
                    arrayIngredients.push(strIngredient);
                }
            }
        }
    });

    arrayIngredients.map((ingredient) => {
        ingredientList.innerHTML +=
            `<li>${ingredient}</li>`
    });
}