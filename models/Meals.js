const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MealSchema = new Schema({
    id: {
        type: Number,
        // required: true,
    },
    title: {
        type: String,
        // required: true,
    },
    readyInMinutes: {
        type: Number,
        // required: true,
    },
    image: {
        type: String,
        // required: true,
    },
    category: {
        type: String,
        // required: true,
    },
    steps: {
        type: Array,
        // required: true,
    },
    ingredients: {
        type: Array,
        // required: true,
    }
})

module.exports = Meal = mongoose.model('meal', MealSchema)

