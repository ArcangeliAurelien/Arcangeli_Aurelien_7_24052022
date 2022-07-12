import { recipesFactory } from './recipesFactory.js'
import { buttonFilterRecipes, filterRecipesInput, filtreTag } from './filterRecipes.js'

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
    buttonFilterRecipes(recipes)
    filterRecipesInput(recipes)
    filtreTag(recipes)
}

init()

// let array1 = ['8', '22', '25', '39', '43', '44', '50'];
// let array2 = ['8', '22', '25', '39', '44'];
// let array3 = ['8', '22', '25'];
// let array4 = ['8', '22', '26'];
// let concatArray = [...array1, ...array2, ...array3, ...array4];
// const newArray = [...new Set(concatArray)]
// console.log(newArray);