import { recipesFactory } from "./recipesFactory.js";

export function buttonFilterRecipes(recipes) {
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

    dropdown1.addEventListener("click", () => {
        list1.style.display = "block"
    })
    dropdown2.addEventListener("click", () => {
        list2.style.display = "block"
    })
    dropdown3.addEventListener("click", () => {
        list3.style.display = "block"
    })

    const chevronUp2 = document.querySelector(".up2")

    if (list2 === "active") {
        chevronUp2.addEventListener("click", () => {
            console.log("clic");
        })
    }

}

export function filterRecipes(recipes) {
    const searchInput = document.getElementById("searchInput")
    
    searchInput.addEventListener("keyup", () => {
        const input = searchInput.value

        const result = recipes.filter(item => item.name.toLocaleLowerCase().includes(input.toLocaleLowerCase()))
        let suggestion = ""

        result.forEach(resultItem => {
            suggestion += `
                <a href="..." class="imageCard"></a>
                <div class="info">
                    <p class="name">${resultItem.name}</p>
                    <p><i class="far fa-clock"></i>${resultItem.time}mm</p>
                    <div>${resultItem.ingredients}</div>
                    <div class="description">${resultItem.description}</div>
                </div>
            `
        })
        //recipesFactory(result)
        //console.log(result);
        const recettesSection = document.querySelector(".recettesSection")
        recettesSection.innerHTML = suggestion
    })
}