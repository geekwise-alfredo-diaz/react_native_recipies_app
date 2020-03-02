// Native Imports
import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Switch } from 'react-native'

// Components
import HeaderButton from '../HeaderButton'

// Icons
import { HeaderButtons, Item } from 'react-navigation-header-buttons'


const FiltersScreen = ({navigation}) => {
    const [ isGlutenFree, setIsGlutenFree ] = useState(false)
    const [ isLactoseFree, setIsLactoseFree ] = useState(false)
    const [ isVegan, setIsVegan ] = useState(false)
    const [ isVegetarian, setIsVegetarian ] = useState(false)


    // const appliedFilters = () => {
    //     return {
    //         glutenFree: isGlutenFree,
    //         lactoseFree: isLactoseFree,
    //         vegan: isVegan,
    //         vegetarian: isVegetarian,
    //     }
    // }

    // useEffect(() => {
    //     // navigation.setParams({save: 'test'});
    //     console.log('test');
    // })

    const renderSwitch = (func, val) => {
        return (
            <Switch 
            trackColor={{true: 'purple'}}
            thumbColor={{true: 'purple'}}
            value={val}
            onValueChange={newVal => func(newVal)}
            />
        )
    }

    return (
        <View style={styles.screen}>
            <Text style={styles.alignedTitle}>Available Filters / Restricitons</Text>
            <View style={styles.filterContainer}>
                <Text style={styles.filterText}>Gluten-free</Text>
                {renderSwitch(setIsGlutenFree, isGlutenFree)}
            </View>
            <View style={styles.filterContainer}>
                <Text style={styles.filterText}>Lactose-free</Text>
                {renderSwitch(setIsLactoseFree, isLactoseFree)}
            </View>
            <View style={styles.filterContainer}>
                <Text style={styles.filterText}>Vegan</Text>
                {renderSwitch(setIsVegan, isVegan)}
            </View>
            <View style={styles.filterContainer}>
                <Text style={styles.filterText}>Vegetarian</Text>
                {renderSwitch(setIsVegetarian, isVegetarian)}
            </View>
        </View>
    )
}

FiltersScreen.navigationOptions = navData => {
    return {
        headerLeft: () =>
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item buttonStyle={{fontSize: 30}} title='Menu' iconName='ios-menu' onPress={()=>navData.navigation.openDrawer()}/>
            </HeaderButtons>,
        headerRight: () =>
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item buttonStyle={{fontSize: 30}} title='Save' iconName='ios-save' onPress={()=>alert('Saved Preferences')}/>
        </HeaderButtons>
    }
}

const styles = StyleSheet.create({
    screen: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    alignedTitle: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 15,
        marginBottom: 20,
    },
    filterContainer: {
        width: 270,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10
    },
    filterText: {
        fontSize: 18,
    }
})

export default FiltersScreen