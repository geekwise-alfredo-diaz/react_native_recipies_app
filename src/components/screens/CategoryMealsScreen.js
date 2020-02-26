// Native Imports
import React from 'react';

// Components
import MealList from '../MealList'

// Dummy Data
import { MEALS } from '../../data/dummyData'

// Returns Meals Based of Category
const CategoryMeals = ({navigation}) => {
    // Grabs All Items Belonging to a Category
    const catId = navigation.getParam('categoryId');
    const displayedMeals = MEALS.filter(
        meal => meal.categoryIds.indexOf(catId) >= 0
    );

    return <MealList data={displayedMeals} navigation={navigation}/>
}

// Changes Title of Screen to Corresponding Category
CategoryMeals.navigationOptions = (navData) => {
    const catTitle = navData.navigation.getParam('categoryTitle');

    return {
        headerTitle: catTitle
    }
}

export default CategoryMeals