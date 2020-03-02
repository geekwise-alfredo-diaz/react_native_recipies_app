// Native Imports
import React, { useState, useEffect } from 'react';

// axios
import axios from 'axios'

// Components
import MealList from '../MealList'
import Loading from '../Loading'

// Returns Meals Based of Category
const CategoryMeals = ({navigation}) => {
    // Grabs All Items Belonging to a Category
    const [ meals, updateMeals ] = useState([]);
    const queryTitle = navigation.getParam('queryTitle');

    const getMeals = () => {
        axios.get(`https://g-f-meals-express-db.herokuapp.com/api/meals?cat=${queryTitle}`)
        .then(res => {updateMeals(res.data.data)})
        .catch(err => console.log(err));
    }

    useEffect(() => {
        getMeals();
    }, [])

    const renderItems = () => {
        if (meals.length > 1) {
            return <MealList data={meals} navigation={navigation}/>
        }
        return <Loading />
    }
    return renderItems();
}

// Changes Title of Screen to Corresponding Category
CategoryMeals.navigationOptions = (navData) => {
    const catTitle = navData.navigation.getParam('categoryTitle');

    return {
        headerTitle: catTitle
    }
}

export default CategoryMeals