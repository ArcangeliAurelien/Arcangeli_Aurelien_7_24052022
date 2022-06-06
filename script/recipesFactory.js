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
            <div>
                <i class="far fa-clock"></i>
                <p>${time}mm</p>
            </div>
            <div>${listIng}</div>
            <div class="description">${description}</div>
        </div>`

        return (article)
    }
    
    return { name, ingredients, time, description,listIng, getRecipeCardDOM }

}