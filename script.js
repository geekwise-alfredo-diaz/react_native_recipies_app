const axios = require('axios');

// Api Key
const key = '87b2e5b0df0840228f56ee087474c79c'

// Base Url
const burl = 'https://api.spoonacular.com'

// Select Category and Number of Recepies From That Category
const category = 'italian'
const numOfCatItems = 10

// Meals That Will Display
let generalItems;

// 3 Sent in order 0 - arr length
const outPutSteps = generalItems => {
    let index = 0;
    for(let i = 0; i < generalItems.length; i++){
        let id = generalItems[i].id
        // console.log(id, 'init')
        axios.get(`${burl}/recipes/${id}/information?apiKey=${key}&includeNutrition=false`)
        .then(res => {
            // console.log(id, res.data.extendedIngredients[0].original, i);
            updateSteps(res.data.extendedIngredients, i, index);
            index++;
        });
    }
}

// 4 extendedIngredients of one
const updateSteps = (extendedIngredients, asyncInd, index) => {
    let filteredSteps = [];
    for(let i = 0; i < extendedIngredients.length; i++) {
        filteredSteps.push(extendedIngredients[i].original)
    }
    generalItems[asyncInd]['steps'] = filteredSteps;
    if(index === generalItems.length - 1) {
        outPutIngredients(generalItems);
    }
}

// 2
const updateGeneralItems = data => {
    generalItems = data;
    // Adds category
    for(let i = 0; i < generalItems.length; i++) {
        generalItems[i].category = category;
    }
    outPutSteps(generalItems);
}

// 1
axios.get(`${burl}/recipes/search?query=${category}&number=${numOfCatItems}&apiKey=${key}`)
    .then(res => updateGeneralItems(res.data.results))
    .catch(err => console.log(err));

// 6
const updateIngredients = (ingredients, asyncInd, index) => {
    let filteredIngredients = [];

    for(let i = 0; i < ingredients.length; i++) {
        filteredIngredients.push(ingredients[i].name)
    }
    generalItems[asyncInd]['ingredients'] = filteredIngredients;

    if(index === generalItems.length - 1) {
        showGeneralItems();
    }
}

// 5
const outPutIngredients = generalItems => {
    let index = 0;
    generalItems.forEach((item, ind) => {
        axios.get(`${burl}/recipes/${item.id}/ingredientWidget.json?apiKey=${key}`)
        .then(res => {
            updateIngredients(res.data.ingredients, ind, index);
            index++;
        });
    });
}


const showGeneralItems = () => {
    console.log(generalItems);
}