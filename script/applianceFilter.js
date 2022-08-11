let researchInputTermsApp = []

function createFilterAppliance(recipes) {
    const applianceList = document.querySelector(".dropdown-app-items")
    applianceList.innerHTML = ""
    let arrayAppliance = []

    recipes.forEach((recipe) => {
        const appliance = recipe.appliance;
        for (let i = 0; i < appliance.length; i++) {
            let strAppliance = capitalizeFirstLetter(appliance)
            if (!arrayAppliance.includes(strAppliance)) { //Si un ingrédient est déjà présent dans la liste, on ne l'ajoute pas
                if (!researchInputTermsApp.includes(strAppliance)) { //Si un tag est selectionné, ne pas afficher son nom dans la liste des ingredients
                    arrayAppliance.push(strAppliance)
                }
            }
        }
    })

    arrayAppliance.map((appliance) => {
        applianceList.innerHTML +=
            `<li>${appliance}</li>`
    }
    )
}

const btnApp = document.getElementById("dropdown2")
const appExpanded = document.querySelector(".list2")
const appChevronUp = document.querySelector(".up2")

/* OUVRIR DROPDOWN */
btnApp.addEventListener("click", (e) => {
    if (e.target === btnApp) {
        appExpanded.style.display = "block"
    }
})

/* FERMER DROPDOWN */
appChevronUp.addEventListener("click", () => {
    closeApp()
})

function closeApp() {
    appExpanded.style.display = "none"
}

const appList = document.querySelector(".dropdown-app-items")

appList.addEventListener("click", (e) => {
    appSearch.value = ""
    addAppTag(e.target.firstChild.data)
    researchInputTermsApp.push(e.target.firstChild.data)
    search()
})

function addAppTag(data) {
    document.querySelector(".tag_container").innerHTML +=
        `<div class="tag2" id="tag" onclick="removeAppTag(this)">${data} <span data-role="close">&#10006;</span></div>`
}

function removeAppTag(e) {
    researchInputTermsApp.splice(researchInputTermsApp.indexOf(e.data), 1) //Supprime le tag des termes à rechercher
    e.remove()
    search()
}