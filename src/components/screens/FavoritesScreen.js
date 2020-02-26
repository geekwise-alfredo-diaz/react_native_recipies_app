// Native Imports
import React from 'react';

// Components
import MealList from '../MealList'
import HeaderButton from '../HeaderButton'

// Icons
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

// Dummy Data
import { MEALS } from '../../data/dummyData'

// Returns Favorite Meals
export default function FavoritesScreen({navigation}) {
    const favMeals = MEALS.slice(0, 6);

    return <MealList data={favMeals} navigation={navigation} />
}

FavoritesScreen.navigationOptions = navData => {
    return {
        headerLeft: () =>
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item buttonStyle={{fontSize: 30}} title='Menu' iconName='ios-menu' onPress={()=>navData.navigation.openDrawer()}/>
            </HeaderButtons>
    }
}