const express = require('express');
const router = express.Router();

// Controllers
const { getMeals, addMeals } = require('../controllers/meals')

// Endpoints
router.route('/')
    .get(getMeals)
    .post(addMeals);

module.exports = router;
