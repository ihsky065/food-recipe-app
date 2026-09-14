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

 let recipeData;

async function displayRecipeData (recipeData) {
    fetchRecipesData ()
    .then((recipeData) => {
       bodyContainer.innerHTML = formatRecipeData (recipeData);
    })
    .catch((error) => {
       console.log('Error', error);
    })
}

displayRecipeData();

let formatData = [];

function formatRecipeData (recipeData) {
    const recipes = recipeData.recipes;

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
        </div> /-/
        `);
    }
    return formatData.join('').split('/-/');
}

function displaySelectedID(recipeData) {  
    const optionIdInput = document.getElementById('id-option');

    if (optionIdInput.value == 'first-option') {
        bodyContainer.innerHTML = `${formatData.slice(0, 6)}`;
    } else if (optionIdInput.value == 'second-option') {
        bodyContainer.innerHTML = `${formatData.slice(6, 12)}`;
    } else if (optionIdInput.value == 'third-option') {
        bodyContainer.innerHTML = `${formatData.slice(12, 18)}`;
    } else if (optionIdInput.value == 'fourth-option') {
        bodyContainer.innerHTML = `${formatData.slice(18, 24)}`;
    } else if (optionIdInput.value == 'firth-option') {
        bodyContainer.innerHTML = `${formatData.slice(24, 30)}`;
    }
}