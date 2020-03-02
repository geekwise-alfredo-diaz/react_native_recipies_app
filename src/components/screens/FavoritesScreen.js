// Native Imports
import React, { useState, useEffect } from 'react';

// Axios
import axios from 'axios'

// Components
import MealList from '../MealList'
import HeaderButton from '../HeaderButton'
import Loading from '../Loading'

// Icons
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

// Returns Favorite Meals
export default function FavoritesScreen({navigation}) {
    const [ meals, updateMeals ] = useState([])

    useEffect(() => {
        getMeals();
    }, [])
    
    const getMeals = () => {
        axios.get(`https://g-f-meals-express-db.herokuapp.com/api/meals?cat=mexican`)
        .then(res => {updateMeals(res.data.data.slice(0, 4))})
        .catch(err => console.log(err));
    }

    const renderMeals = () => {
        if(meals.length > 1) {
            return <MealList data={meals} navigation={navigation} />
        } else {
            return <Loading />
        }
    }
    return renderMeals();
}

FavoritesScreen.navigationOptions = navData => {
    return {
        headerLeft: () =>
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item buttonStyle={{fontSize: 30}} title='Menu' iconName='ios-menu' onPress={()=>navData.navigation.openDrawer()}/>
            </HeaderButtons>
    }
}