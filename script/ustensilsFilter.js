let researchInputTermsUst = []

function createFilterUstensils(recipes) {
    const ustensilList = document.querySelector(".dropdown-ust-items")
    ustensilList.innerHTML = ""
    let arrayUstensils = []

    recipes.forEach((recipe) => {
        const ustensils = recipe.ustensils;
        for (let i = 0; i < ustensils.length; i++) {
            let strUstensils = capitalizeFirstLetter(ustensils[i])
            if (!arrayUstensils.includes(strUstensils)) { //Si un ingrédient est déjà présent dans la liste, on ne l'ajoute pas
                if (!researchInputTermsUst.includes(strUstensils)) { //Si un tag est selectionné, ne pas afficher son nom dans la liste des ingredients
                    arrayUstensils.push(strUstensils)
                }
            }
        }
    })

    arrayUstensils.map((ustensil) => {
        ustensilList.innerHTML +=
            `<li>${ustensil}</li>`
    }
    )
}

const btnUst = document.getElementById("dropdown3")
const ustExpanded = document.querySelector(".list3")
const ustChevronUp = document.querySelector(".up3")

/* OUVRIR DROPDOWN */
btnUst.addEventListener("click", (e) => {
    if (e.target === btnUst) {
        ustExpanded.style.display = "block"
    }
})

/* FERMER DROPDOWN */
ustChevronUp.addEventListener("click", () => {
    closeUst()
})

function closeUst() {
    ustExpanded.style.display = "none"
}

const ustList = document.querySelector(".dropdown-ust-items")

ustList.addEventListener("click", (e) => {
    ustSearch.value = ""
    addUstTag(e.target.firstChild.data)
    researchInputTermsUst.push(e.target.firstChild.data)
    search()
})

function addUstTag(data) {
    document.querySelector(".tag_container").innerHTML +=
        `<div class="tag3" id="tag" onclick="removeUstTag(this)">${data} <span data-role="close">&#10006;</span></div>`
}

function removeUstTag(e) {
    researchInputTermsUst.splice(researchInputTermsUst.indexOf(e.data), 1) //Supprime le tag des termes à rechercher
    e.remove()
    search()
}