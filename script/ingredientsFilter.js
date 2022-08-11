let researchInputTermsIng = []

function createFilterIngredients(recipes) {
    const ingredientList = document.querySelector(".dropdown-ing-items")
    ingredientList.innerHTML = ""
    let arrayIngredients = []

    recipes.forEach((recipe) => {
        const ingredients = recipe.ingredients;
        for (let i = 0; i < ingredients.length; i++) {
            let strIngredient = capitalizeFirstLetter(ingredients[i].ingredient)
            if (!arrayIngredients.includes(strIngredient)) { //Si un ingrédient est déjà présent dans la liste, on ne l'ajoute pas
                if (!researchInputTermsIng.includes(strIngredient)) { //Si un tag est selectionné, ne pas afficher son nom dans la liste des ingredients
                    arrayIngredients.push(strIngredient)
                }
            }
        }
    });

    arrayIngredients.map((ingredient) => {
        ingredientList.innerHTML +=
            `<li>${ingredient}</li>`
    });
}

const btnIng = document.getElementById("dropdown1")
const ingExpanded = document.querySelector(".list1")
const ingChevronUp = document.querySelector(".up1")

/* OUVRIR DROPDOWN */
btnIng.addEventListener("click", (e) => {
    if (e.target === btnIng) {
        ingExpanded.style.display = "block"
    }
})

/* FERMER DROPDOWN */
ingChevronUp.addEventListener("click", () => {
    closeIng()
})

function closeIng() {
    ingExpanded.style.display = "none"
}

const ingList = document.querySelector(".dropdown-ing-items")

ingList.addEventListener("click", (e) => {
    ingSearch.value = ""
    addIngTag(e.target.firstChild.data)
    researchInputTermsIng.push(e.target.firstChild.data)
    search()
})

function addIngTag(data) {
    document.querySelector(".tag_container").innerHTML += 
        `<div class="tag1" id="tag" onclick="removeIngTag(this)">${data} <span data-role="close">&#10006;</span></div>`
}

function removeIngTag(e) {
    researchInputTermsIng.splice(researchInputTermsIng.indexOf(e.data), 1) //Supprime le tag des termes à rechercher
    e.remove()
    search()
}