// Native Imports
import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

// Returns
const ListItem = ({desc}) => {
    return (
        <View style={styles.descWrap}>
            <Text style={styles.desc}>{desc}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    descWrap: {
        borderWidth: 1,
        borderColor: 'black',
        marginHorizontal: 10,
        marginVertical: 5,
        padding: 10
    },
    desc: {
        fontSize: 16
    }
})

export default ListItem

