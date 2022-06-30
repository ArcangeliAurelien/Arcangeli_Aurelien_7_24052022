export function recipesFactory(recipes) {
    const { name, ingredients, time, description } = recipes

    const listIng = ingredients.map(i => i.ingredient)
    const quantity = ingredients.map(j => j.quantity)
    const unit = ingredients.map(k => k.unit)

    console.log(unit);
    
    function getRecipeCardDOM() {
        const article = document.createElement("article")
        article.classList.add("cardRecipe")
        article.innerHTML = `
        <a href="..." class="imageCard"></a>
        <div class="info">
            <div class="line1">
                <p class="name">${name}</p>
                <p><i class="far fa-clock"></i>${time}mm</p>
            </div>
            <div class="line2">
                <p class="ing"><b>${listIng}: </b>${quantity} ${unit}</p>
                <div class="description">${description}</div>
            </div>
        </div>`

        return (article)
    }
    
    return { name, ingredients, time, description, listIng, getRecipeCardDOM }

}