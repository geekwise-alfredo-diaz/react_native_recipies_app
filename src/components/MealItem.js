// Native Imports
import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'

// Returns an Image of a Meal with Little Detail
const MealItem = ({item, onSelect}) => {
    return (
        <View style={styles.mealItem}>
            <TouchableOpacity onPress={onSelect}>
                <View>
                    <View style={{...styles.mealRow, ...styles.mealHeader}}>
                        <ImageBackground style={styles.bgImage} source={{uri: item.imageUrl}}>
                            <View style={styles.titleContainer}>
                                <Text numberOfLines={1} style={styles.title}>{item.title}</Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{...styles.mealRow, ...styles.mealDetail}}>
                        <Text>{item.duration}m</Text>
                        <Text>{item.complexity.toUpperCase()}</Text>
                        <Text>{item.affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    mealItem: {
        height: 200,
        width: '100%',
        backgroundColor: '#888',
    },
    mealRow: {
        flexDirection: 'row',
    },
    mealHeader: {
        height: '90%',
    },
    mealDetail: {
        paddingHorizontal: 10,
        justifyContent: 'space-around',
    },
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
    },
    titleContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        padding: 5,
    },
    title: {
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
    },
})

export default MealItem;