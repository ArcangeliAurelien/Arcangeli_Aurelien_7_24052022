export function recipesFactory(recipes) {
    const { name, ingredients, time, description } = recipes

    const listIng = ingredients.map((el) => {
        const { ingredient } = el
        const quantityRaw = el.quantity
        const unitRaw = el.unit
        const quantityArray = []
        const unitArray = []
        quantityArray.push(quantityRaw)
        unitArray.push(unitRaw)
        const quantity = quantityArray.filter((ele) => ele !== undefined)
        const unit = unitArray.filter((item => item !== undefined))

        return `<li><b>${ingredient}: </b>` + `<span>${quantity} </span>` + `<span>${unit}</span></li>`

    }).join("")
    
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
                    <div class="ing"><ul>${listIng}</ul></div>
                    <div class="description">${description}</div>
                </div>
            </div>`

        return (article)
    }
    
    return { name, ingredients, time, description, listIng, getRecipeCardDOM }

}

export function recetteCard(result) {

    let suggestion = ""

    result.forEach(resultItem => {
        //console.log(resultItem);

        const Ingr = resultItem.ingredients
        const listIng = Ingr.map((el) => {
            const { ingredient } = el
            const quantityRaw = el.quantity
            const unitRaw = el.unit
            const quantityArray = []
            const unitArray = []
            quantityArray.push(quantityRaw)
            unitArray.push(unitRaw)
            const quantity = quantityArray.filter((ele) => ele !== undefined)
            const unit = unitArray.filter((item => item !== undefined))

            return `<li><b>${ingredient}: </b>` + `<span>${quantity} </span>` + `<span>${unit}</span></li>`

        }).join("")

        suggestion +=
            `<article class="cardRecipe">
                            <a href="..." class="imageCard"></a>
                            <div class="info">
                                <div class="line1">
                                    <p class="name">${resultItem.name}</p>
                                    <p><i class="far fa-clock"></i>${resultItem.time}mm</p>
                                </div>
                                <div class="line2">
                                    <div class="ing"><ul>${listIng}</ul></div>
                                    <div class="description">${resultItem.description}</div>
                                </div>
                            </div>
                        </article>`

        return document.querySelector(".recettesSection").innerHTML = suggestion
    })
}