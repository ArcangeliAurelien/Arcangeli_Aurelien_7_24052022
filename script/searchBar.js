/* INTERACTION AVEC LA BARRE DE RECHERCHE PRINCIPALE */
const searchInput = document.getElementById("searchInput")

searchInput.addEventListener("keyup", function () {
    search()
})

/* INTERACTION AVEC LA BARRE DE RECHERCHE DU BOUTON INGREDIENTS */
const ingSearch = document.getElementById("searchIng")

ingSearch.addEventListener("keyup", function () {
    const ingTags = document.querySelectorAll(".dropdown-ing-items li")
    ingSearch.style.opacity = "1"
    ingSearch.style.fontWeight = "bold"

    ingTags.forEach(tag => {
        if (tag.textContent.toLowerCase().indexOf(ingSearch.value.toLowerCase()) > -1) {
            tag.style.display = "block"
        } else {
            tag.style.display = "none"
        }
    })
})

/* INTERACTION AVEC LA BARRE DE RECHERCHE DU BOUTON IAPPAREILS */
const appSearch = document.getElementById("searchApp")

appSearch.addEventListener("keyup", function () {
    const appTags = document.querySelectorAll(".dropdown-app-items li")
    appSearch.style.opacity = "1"
    appSearch.style.fontWeight = "bold"
    
    appTags.forEach(tag => {
        if (tag.textContent.toLowerCase().indexOf(appSearch.value.toLowerCase()) > -1) {
            tag.style.display = "block"
        } else {
            tag.style.display = "none"
        }
    })
})

/* INTERACTION AVEC LA BARRE DE RECHERCHE DU BOUTON USTENSILES */
const ustSearch = document.getElementById("searchUst")

ustSearch.addEventListener("keyup", function () {
    const ustTags = document.querySelectorAll(".dropdown-ust-items li")
    ustSearch.style.opacity = "1"
    ustSearch.style.fontWeight = "bold"

    ustTags.forEach(tag => {
        if (tag.textContent.toLowerCase().indexOf(ustSearch.value.toLowerCase()) > -1) {
            tag.style.display = "block"
        } else {
            tag.style.display = "none"
        }
    })
})