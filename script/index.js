//import { getRecipeCardDOM } from "../script/recipesFactory.js"

async function getRecipes() {
    const response = await fetch("./data/recipes.json")
    const data = await response.json()

    return { recipes: data.recipes }
}

async function displayData() {
    const recettesSection = document.querySelector(".recettesSection")
    
    // recipes.forEach((recipe) => {
    //     const model = recipesFactory(recipe)
    //     const recipeCardDOM = model.getRecipeCardDOM()
    //     recettesSection.appendChild(recipeCardDOM)
    // }) 
}

async function init() {
    const { recipes } = await getRecipes()
    displayData(recipes)
    console.log(recipes);
}

init()