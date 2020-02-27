const Meals = require('../models/Meals');

// @desc Gets Meals
// @route GET api/
exports.getMeals = async (req, res, next) => {
    try {
        const meals = await Meals.find();
        return res.status(200).json({
            success: true,
            count: meals.length,
            data: meals
        });
    } catch(err) {
        console.error(err);
        res.status(500).json({error: 'Server Error'});
    }
}

// @route POST api/items
// @desc Create a Post
exports.addMeals = async (req, res, next) => {
    const { id, title, readyInMinutes, image, category, steps, ingredients } = req.body;
    const newMeal = new Meals({
        id, title, readyInMinutes, image, category, steps, ingredients
    });

    newMeal.save().then(meal => res.json(meal));
};