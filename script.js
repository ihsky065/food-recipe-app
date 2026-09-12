const optionIdInput = document.getElementById('id-option');

// variables of items inside box container
const foodIdInput = document.getElementById('food-id');
const foodName = document.getElementById('food-name');
const imageBlock = document.getElementById('image-block');
const ingredientsList = document.getElementById('ingredients-list');
const instructionsList = document.getElementById('instructions-list');

// const recipeBoxContainer = document.getElementsByClassName('box-container');
const bodyContainer = document.getElementById('body-container');

async function fetchRecipesData () {
    const response = await fetch('https://dummyjson.com/recipes');

    if (response.ok) {
        const data = await response.json();
        return data;
    } else {
        throw new Error('Error fetching food recipes data');
    }
}

function displayRecipeData () {
    fetchRecipesData ()
    .then((recipeData) => {
        bodyContainer.innerHTML = formatRecipeData (recipeData);
    })
    .catch((error) => {
        console.log('Error', error);
    })
}

displayRecipeData();

function formatRecipeData (recipeData) {
    const recipes = recipeData.recipes;

    // for (const recipe of recipes) {
    //     const divContainer = document.createElement('div');
    //     divContainer.innerHTML =`
    //     <div class="box-container">
    //         <div class="left-section">
    //             <h4 id="food-id">Food ID: <b>${recipe.id}</b></h4>
    //             <p>Name:</p>
    //             <p id="food-name"><b>${recipe.name}</b></p>
    //             <img src="${recipe.image}" alt="food example" width="160px">
    //         </div>
    //         <div class="right-section">
    //             <div class="text-content-first">
    //             <p class="content-subtitle"><b>Ingredients:</b></p>
    //             <ul id="ingredients-list">
    //                 ${recipe.ingredients}
    //             </ul>
    //             </div>
    //             <div class="text-content-second">
    //             <p class="content-subtitle"><b>Instructions:</b></p>
    //             <ol id="instructions-list">
    //                 ${recipe.instructions}
    //             </ol>
    //         </div>
    //         </div>
    //     </div> 
    //     `;
    //     bodyContainer.appendChild(divContainer);
    // }
    // return bodyContainer.innerHTML;  

    let formatData = [];

    for (const recipe of recipes) {
        formatData.push (`
        <div class="box-container">
            <div class="left-section">
                <h4 id="food-id">Food ID: <b>${recipe.id}</b></h4>
                <p>Name:</p>
                <p id="food-name"><b>${recipe.name}</b></p>
                <img src="${recipe.image}" alt="food example" width="160px">
            </div>
            <div class="right-section">
                <div class="text-content-first">
                <p class="content-subtitle"><b>Ingredients:</b></p>
                <ul id="ingredients-list">
                    ${recipe.ingredients}
                </ul>
                </div>
                <div class="text-content-second">
                <p class="content-subtitle"><b>Instructions:</b></p>
                <ol id="instructions-list">
                    ${recipe.instructions}
                </ol>
            </div>
            </div>
        </div> 
        `);
    }
    return formatData.join('');  
}