const optionIdInput = document.getElementById('id-option');

// variables of items inside box container
const foodIdInput = document.getElementById('food-id');
const foodName = document.getElementById('food-name');
const imageBlock = document.getElementById('image-block');
const ingredientsList = document.getElementById('ingredients-list');
const instructionsList = document.getElementById('instructions-list');

async function fetchRecipesData () {
    const response = await fetch('https://dummyjson.com/recipes');

    if (response.ok) {
        const data = await response.json();
        return data;
    } else {
        throw new Error('Error fetching food recipes data');
    }
}