class RecipesFactory {
    constructor(data) {
        this.description = data.description;
        this.name = data.name;
        this.time = data.time;
        this.ingredients = data.ingredients
    }
    
    getRecipeCardDOM() {
        const article = document.createElement("article")
        const descriptionLimit = 300

        article.classList.add("cardRecipe")

        let listIng = ""

        this.ingredients.forEach(ing => {
            let ingredient = ing.ingredient
            let unit = ing.unit
            let quantity = ing.quantity

            if (unit === undefined) {
                unit = ""
            }
            if (quantity === undefined) {
                quantity = ""
            }

            listIng += `<li><b>${ingredient}: </b>` + `<span>${quantity} </span>` + `<span>${unit}</span></li>`
        });

        article.innerHTML = `
            <a href="..." class="imageCard"></a>
            <div class="info">
                <div class="line1">
                    <p class="name">${this.name}</p>
                    <p><i class="far fa-clock"></i> ${this.time}mm</p>
                </div>
                <div class="line2">
                    <div class="ing"><ul>${listIng}</ul></div>
                    <div class="description">${this.description.substring(0, descriptionLimit).concat("...")}</div>
                </div>
            </div>`

        return article
    }

    static createRecipeCard(recipes) {
        const recettesSection = document.querySelector(".recettesSection")
        recettesSection.innerHTML = ""

        recipes.forEach(recipe => {
            const recipeCard = new RecipesFactory(recipe)
            const recipeCardDOM = recipeCard.getRecipeCardDOM()
            recettesSection.appendChild(recipeCardDOM)
        })
    }
}