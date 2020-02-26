// Native Imports
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Performance
import { enableScreens } from 'react-native-screens'

// Navigation
import MealsNavigator from './src/components/navigation/MealsNavigator'

enableScreens();

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    // </View>
    <MealsNavigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
