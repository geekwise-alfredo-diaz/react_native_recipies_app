// Native Imports
import React from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'

const Loading = () => {
    return (
        <View style={styles.loaderWrap}>
            <ActivityIndicator size={60} color="#0000ff" />
        </View>
    )
}

const styles = StyleSheet.create({
    loaderWrap: {
        flex: 1,
        justifyContent: "center"
    }
})

export default Loading