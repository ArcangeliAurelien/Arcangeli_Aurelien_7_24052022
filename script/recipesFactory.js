export function recipes(data) {
    const { id, name, servings, ingredients, time, description, appliance, ustensils } = data
    
    function getRecipeCardDOM() {
        const article = document.createElement("article")
        article.innerHTML = `
        <a href="..."></a>
        <div class="info">
            <div>${name}</div>
            <div>${time}</div>
            <div>${ingredients}</div>
            <div>${description}</div>
        </div>`

        return (article)
    }
    
    return { name, ingredients, time, description, getRecipeCardDOM }

}