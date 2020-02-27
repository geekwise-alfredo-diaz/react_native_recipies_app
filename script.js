const axios = require('axios');

// Api Key
const key = 'fcf71feb447b440790ebfee427cf24b2'

// Base Url
const burl = 'https://api.spoonacular.com'

// Select Category and Number of Recepies From That Category
const category = 'mexican'
const numOfCatItems = 1

// Meals That Will Display
let generalMeals;

// Step [3]
// For Each Meal GET Corresponding Steps
const outPutSteps = generalMeals => {
    let index = 0;
    for(let i = 0; i < generalMeals.length; i++){
        let id = generalMeals[i].id
        // console.log(id, 'init')
        axios.get(`${burl}/recipes/${id}/information?apiKey=${key}&includeNutrition=false`)
        .then(res => {
            // console.log(id, res.data.extendedIngredients[0].original, i);
            updateSteps(res.data.extendedIngredients, i, index);
            index++;
        });
    }
}

// Step [4]
// For Each Meal ADD Corresponding Steps
const updateSteps = (extendedIngredients, asyncInd, index) => {
    let filteredSteps = [];
    for(let i = 0; i < extendedIngredients.length; i++) {
        filteredSteps.push(extendedIngredients[i].original)
    }
    generalMeals[asyncInd]['steps'] = filteredSteps;
    if(index === generalMeals.length - 1) {
        outPutIngredients(generalMeals);
    }
}

// Step [2]
// Returns GeneralMeals and Adds the Corresponding Category as Key
const updategeneralMeals = data => {
    generalMeals = data;
    // Adds category
    for(let i = 0; i < generalMeals.length; i++) {
        generalMeals[i].category = category;
    }
    outPutSteps(generalMeals);
}

// Step [1]
// Gets a Certain Amount of Meals of a Category
axios.get(`${burl}/recipes/search?query=${category}&number=${numOfCatItems}&apiKey=${key}`)
    .then(res => updategeneralMeals(res.data.results))
    .catch(err => console.log(err));

// Step [6]
// For Each Meal GET Corresponding Ingredients
const updateIngredients = (ingredients, asyncInd, index) => {
    let filteredIngredients = [];

    for(let i = 0; i < ingredients.length; i++) {
        filteredIngredients.push(ingredients[i].name)
    }
    generalMeals[asyncInd]['ingredients'] = filteredIngredients;

    if(index === generalMeals.length - 1) {
        showgeneralMeals();
    }
}

// Step [5]
// For Each Meal ADD Corresponding Ingredients
const outPutIngredients = generalMeals => {
    let index = 0;
    generalMeals.forEach((item, ind) => {
        axios.get(`${burl}/recipes/${item.id}/ingredientWidget.json?apiKey=${key}`)
        .then(res => {
            updateIngredients(res.data.ingredients, ind, index);
            index++;
        });
    });
}

// Display Meals
const showgeneralMeals = () => {
    console.log(JSON.stringify(generalMeals));
}