import { filterRecipes } from './filterRecipes.js'
import { recipesFactory } from './recipesFactory.js'

async function getRecipes() {
    const response = await fetch("./data/recipes.json")
    const data = await response.json()

    return { recipes: data.recipes }
}

async function displayData(recipes) {
    const recettesSection = document.querySelector(".recettesSection")
    
    recipes.forEach((recipe) => {
        const model = recipesFactory(recipe)
        const recipeCardDOM = model.getRecipeCardDOM()
        recettesSection.appendChild(recipeCardDOM)
    })
}

async function init() {
    const { recipes } = await getRecipes()
    displayData(recipes)
    filterRecipes(recipes)
}

init()