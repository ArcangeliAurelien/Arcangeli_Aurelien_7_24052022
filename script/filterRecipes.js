export function buttonFilterRecipes(recipes) {

                /* CREER LA LISTE DES DROPDOWN */

    let array1 = []
    let array2 = []
    let array3 = []

    recipes.forEach(element => {
        const ingredients = element.ingredients
        ingredients.forEach(el1 => array1.push(el1.ingredient))

        const ustensils = element.ustensils
        ustensils.forEach(el2 => array2.push(el2))

        const appareils = element.appliance
        array3.push(appareils)
    });

    const arrayIng = array1.filter( (ele1, pos) => array1.indexOf(ele1) === pos)
    //console.log(arrayIng);
    const arrayUst = array2.filter((ele2, pos) => array2.indexOf(ele2) === pos)
    //console.log(arrayUst);
    const arrayApp = array3.filter((ele3, pos) => array3.indexOf(ele3) === pos)
    //console.log(arrayApp);

    const dropdown1 = document.querySelector("#dropdown1")
    const dropdown2 = document.querySelector("#dropdown2")
    const dropdown3 = document.querySelector("#dropdown3")
    const list1 = document.querySelector(".list1")
    const list2 = document.querySelector(".list2")
    const list3 = document.querySelector(".list3")

    const ing = document.getElementById("ing")
    const app = document.getElementById("app")
    const ust = document.getElementById("ust")

    arrayIng.forEach(item => {
        let li = document.createElement("li")
        li.innerHTML = item
        ing.appendChild(li)
    })
    arrayApp.forEach(item => {
        let li = document.createElement("li")
        li.innerHTML = item
        app.appendChild(li)
    })
    arrayUst.forEach(item => {
        let li = document.createElement("li")
        li.innerHTML = item
        ust.appendChild(li)
    })

    const dropdown = document.querySelectorAll(".dropdown")

    dropdown.forEach(btn => {
        btn.addEventListener("click", (event) => {
            if (event.target === dropdown1) {
                list1.style.display = "block"
            }
            if (event.target === dropdown2) {
                list2.style.display = "block"
            }
            if (event.target === dropdown3) {
                list3.style.display = "block"
            }
        })
    })

    const up = document.querySelectorAll(".up")
    const up1 = document.querySelector(".up1")
    const up2 = document.querySelector(".up2")
    const up3 = document.querySelector(".up3")

    up.forEach(arrowUp => {
        arrowUp.addEventListener("click", (event) => {
            if (event.target === up1) {
                list1.style.display = "none"
            }
            if (event.target === up2) {
                list2.style.display = "none"
            }
            if (event.target === up3) {
                list3.style.display = "none"
            }
        })
    })

}

/* --------------------------------------------------------------------------------------------- */

                /* BOUTONS DES TAGS */
                    
export function filtreTag(recipes) {
    const li = document.querySelectorAll("li")
    const tag_container = document.querySelector(".tag_container")
    let suggestion = ""

    let array1 = []
    let array2 = []
    let array3 = []

    recipes.forEach(element => {
        const ingredients = element.ingredients
        ingredients.forEach(el1 => array1.push(el1.ingredient))

        const ustensils = element.ustensils
        ustensils.forEach(el2 => array2.push(el2))

        const appareils = element.appliance
        array3.push(appareils)
    });

    const arrayIng = array1.filter((ele1, pos) => array1.indexOf(ele1) === pos)
    //console.log(arrayIng);
    const arrayUst = array2.filter((ele2, pos) => array2.indexOf(ele2) === pos)
    //console.log(arrayUst);
    const arrayApp = array3.filter((ele3, pos) => array3.indexOf(ele3) === pos)
    //console.log(arrayApp);

    li.forEach(item => {
        item.addEventListener("click", () => {
            if (arrayIng.includes(item.textContent)) {
                const tag = `<div class="tag1" id="tag">${item.textContent} <span data-role="close">&#10006;</span></div>`
                tag_container.insertAdjacentHTML("beforeend", tag)

                const result = recipes.filter(recipe => (recipe.ingredients).map(i => i.ingredient).includes(item.textContent))
                //console.log(result);
                result.forEach(resultItem => {
                    console.log(resultItem);
                    suggestion += 
                        `<article class="cardRecipe">
                            <a href="..." class="imageCard"></a>
                            <div class="info">
                                <div class="line1">
                                    <p class="name">${resultItem.name}</p>
                                    <p><i class="far fa-clock"></i>${resultItem.time}mm</p>
                                </div>
                                <div class="line2">
                                    <div class="ing">${resultItem.listIng}</div>
                                    <div class="description">${resultItem.description}</div>
                                </div>
                            </div>
                        </article>`
                    
                    return document.querySelector(".recettesSection").innerHTML = suggestion
                })

            } else if (arrayApp.includes(item.textContent)) {
                const tag = `<div class="tag2" id="tag">${item.textContent} <span data-role="close">&#10006;</span></div>`
                tag_container.insertAdjacentHTML("beforeend", tag)

                const result = recipes.filter(recipe => recipe.appliance.includes(item.textContent))
                //console.log(result);
                result.forEach(resultItem => {
                    console.log(resultItem);
                    suggestion +=
                        `<article class="cardRecipe">
                            <a href="..." class="imageCard"></a>
                            <div class="info">
                                <div class="line1">
                                    <p class="name">${resultItem.name}</p>
                                    <p><i class="far fa-clock"></i>${resultItem.time}mm</p>
                                </div>
                                <div class="line2">
                                    <div class="ing">${resultItem.listIng}</div>
                                    <div class="description">${resultItem.description}</div>
                                </div>
                            </div>
                        </article>`

                    return document.querySelector(".recettesSection").innerHTML = suggestion
                })
            } else if (arrayUst.includes(item.textContent)) {
                const tag = `<div class="tag3" id="tag">${item.textContent} <span data-role="close">&#10006;</span></div>`
                tag_container.insertAdjacentHTML("beforeend", tag)
                
                const result = recipes.filter(recipe => (recipe.ustensils).includes(item.textContent))
                //console.log(result);
                result.forEach(resultItem => {
                    console.log(resultItem);
                    suggestion +=
                        `<article class="cardRecipe">
                            <a href="..." class="imageCard"></a>
                            <div class="info">
                                <div class="line1">
                                    <p class="name">${resultItem.name}</p>
                                    <p><i class="far fa-clock"></i>${resultItem.time}mm</p>
                                </div>
                                <div class="line2">
                                    <div class="ing">${resultItem.listIng}</div>
                                    <div class="description">${resultItem.description}</div>
                                </div>
                            </div>
                        </article>`

                    return document.querySelector(".recettesSection").innerHTML = suggestion
                })
            }
            
            
        })
    })

    tag_container.addEventListener("click", (event) => {
        if (event.target !== event.currentTarget) {
            if (event.target.dataset.role === "close") {
                event.target.parentNode.remove()
            }
        }
    })
}

/* --------------------------------------------------------------------------------------------- */

                /* BARRE DE RECHERCHE PRINCIPALE */


export function filterRecipesInput(recipes) {
    const searchInput = document.getElementById("searchInput")

    searchInput.addEventListener("input", () => {
        const input = searchInput.value

        const result = recipes.filter(item => item.name.toLocaleLowerCase().includes(input.toLocaleLowerCase()))
        let suggestion = ""

        result.forEach(resultItem => {
            //console.log(resultItem);
            suggestion += `
            <article class="cardRecipe">
                <a href="..." class="imageCard"></a>
                <div class="info">
                    <p class="name">${resultItem.name}</p>
                    <p><i class="far fa-clock"></i>${resultItem.time}mm</p>
                    <div>${resultItem.ingredients}</div>
                    <div class="description">${resultItem.description}</div>
                </div>
            </article>`
        })

        //console.log(result);
        const recettesSection = document.querySelector(".recettesSection")
        recettesSection.innerHTML = suggestion
    })
}