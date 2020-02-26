// Native Imports
import React from 'react';
import { FlatList } from 'react-native'

// Components
import CategoryGridTile from '../CategoryGridTile'
import HeaderButton from '../HeaderButton'

// Icons
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

// Dummy Data
import { CATEGORIES } from '../../data/dummyData'

// Returns a FlatList of Categories
const CategoriesScreen = ({navigation}) => {
    const renderItems = itemData => {
        return (
            <CategoryGridTile item={itemData} 
                onSelect={() => navigation.navigate({routeName: 'CategoryMeals', params: {
                categoryId: itemData.item.id, categoryTitle: itemData.item.title}})}
            />
        )
    }

    return (
        <FlatList numColumns={2} keyExtractor={item => item.id.toString()} data={CATEGORIES} renderItem={renderItems}/>
    )
}

CategoriesScreen.navigationOptions = navData => {
    return {
        headerLeft: () =>
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item buttonStyle={{fontSize: 30}} title='Menu' iconName='ios-menu' onPress={()=>navData.navigation.openDrawer()}/>
            </HeaderButtons>
    }
}


export default CategoriesScreen;