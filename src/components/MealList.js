// Native Imports
import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'

// Components
import MealItem from './MealItem'

// Returns a FlatList of MealItems
const MealList = ({data, navigation}) => {
    const renderMealItems = itemData => {
        return (
            <MealItem item={itemData.item}
                onSelect={()=>navigation.navigate({routeName: 'MealDetail', params: {item: itemData.item}})} 
            />
        )
    }

    return (
        <View style={styles.screen}>
            <FlatList style={{width: '100%'}} data={data} keyExtractor={item => item.id.toString()} renderItem={renderMealItems}/>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        padding: 10,
    },
})

export default MealList