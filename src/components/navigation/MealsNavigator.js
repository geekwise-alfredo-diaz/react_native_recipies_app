// Native Imports
import React from 'react'

// React Navigation
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer'

// Screens
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
import FavoritesScreen from '../screens/FavoritesScreen'
import FiltersScreen from '../screens/FiltersScreen'

// Icons 
import { Ionicons } from '@expo/vector-icons'

// Navigation Options
const navigationOptions = (title) => {
    if(title) {
        return {
            headerTitle: title,
            headerStyle: {
                backgroundColor: 'purple',
            },
            headerTintColor: 'white',
        }
    }
    return {
        headerStyle: {
            backgroundColor: 'purple',
        },
        headerTintColor: 'white',
    }
}

// Navigation
const MealsNavigator = createStackNavigator(
    {
        Categories: {
            screen: CategoriesScreen,
            navigationOptions: navigationOptions('Meal Categories')
        },
        CategoryMeals: {
            screen: CategoryMealsScreen,
            navigationOptions: navigationOptions()
        },
        MealDetail: {
            screen: MealDetailScreen,
            navigationOptions: navigationOptions()
        },
    },
    {
        mode: 'modal',
    },
);

// Favorites Navigator
const favNav = createStackNavigator(
    {
        Favorites: FavoritesScreen,
        MealDetail: MealDetailScreen
    },
    {
        defaultNavigationOptions: navigationOptions()
    }
)

// Bottom Tab Navigation
const MealsFavTabNavigation = createBottomTabNavigator(
    {
        Meals: {
            screen: MealsNavigator,
            navigationOptions: {
                tabBarIcon: (tabInfo) => <Ionicons name='ios-restaurant' size={20} color={tabInfo.tintColor}/>
            }
        },
        Favorites: {
            screen: favNav,
            navigationOptions: {
                tabBarIcon: (tabInfo) => <Ionicons name='ios-star' size={20} color={tabInfo.tintColor}/>,
            }
        },
    },
    {
        tabBarOptions: {
            activeTintColor: 'orange'
        }
    }
)

// Sidebar Too
const FiltersNavigator = createStackNavigator(
    {
        Filters: FiltersScreen
    },
    {
        defaultNavigationOptions: navigationOptions()
    }
)

// Sidebar Navigation
const MainNavigator = createDrawerNavigator(
    {
        MealsFavs: {
            screen: MealsFavTabNavigation, 
        },
        Filters:  FiltersNavigator,
    },
    {
        contentOptions: {
            activeTintColor: 'orange',
            inactiveTintColor: 'grey',
            itemsContainerStyle: {
                // backgroundColor: 'purple',
                // backgroundColor: 'white',
            },
        },
        drawerWidth: '69%',
        // drawerBackgroundColor: '#920192'
    },
    
)

export default createAppContainer(MainNavigator);