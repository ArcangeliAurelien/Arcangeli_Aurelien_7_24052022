function init(data) {
    RecipesFactory.createRecipeCard(data)
    createFilterIngredients(data);
    createFilterAppliance(data);
    createFilterUstensils(data);
    
    if (data.length === 0) {
        document.getElementById("recettesSection").innerHTML =
            `<div>Aucune recette ne correspond à votre critère.</div>`;
    }
}

init(recipesData);