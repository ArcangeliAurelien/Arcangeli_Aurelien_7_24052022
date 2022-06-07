export function recipesFactory(data) {
    const { id, name, servings, ingredients, time, description, appliance, ustensils } = data

    const listIng = ingredients.map(i => i.ingredient)
    
    function getRecipeCardDOM() {
        const article = document.createElement("article")
        article.classList.add("cardRecipe")
        article.innerHTML = `
        <a href="..." class="imageCard"></a>
        <div class="info">
            <p class="name">${name}</p>
            <p><i class="far fa-clock"></i>${time}mm</p>
            <div>${listIng}</div>
            <div class="description">${description}</div>
        </div>`

        return (article)
    }
    
    return { name, ingredients, time, description,listIng, getRecipeCardDOM }

}