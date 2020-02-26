// Native Imports
import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TouchableNativeFeedback, Platform } from 'react-native'

const CategoryGridTile = props => {
    // Check if andriod supports TouchableNativeFeedback
    let TouchableCmp = TouchableOpacity;
    if(Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }
    
    return (
        <View style={styles.itemWrap}>
            <TouchableCmp style={{flex: 1}} onPress={props.onSelect}>
                <View style={{backgroundColor: props.item.item.color, ...styles.container}}>
                    <Text numberOfLines={1} style={styles.title} key={props.item.item.id}>{props.item.item.title}</Text>
                </View>
            </TouchableCmp>
        </View>
    )
}

const styles = StyleSheet.create({
    itemWrap: {
        flex: 1,
        height: 150,
        margin: 20,
        borderRadius: 10,
        overflow: 'hidden'
    },
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 10,
        elevation: 3,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 17
    }
})

export default CategoryGridTile;