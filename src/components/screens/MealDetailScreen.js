// Native Imports
import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native'

// Icon 
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

// Components
import HeaderButton from '../HeaderButton'
import ListItem from '../ListItem'

export default function MealDetailScreen({navigation}) {
    const item = navigation.getParam('item')
    const uri = `https://spoonacular.com/recipeImages/${item.image}`

    return (
        <ScrollView>
            <Image source={{uri}} style={styles.image} />
            <View style={styles.details}>
                <Text>{item.readyInMinutes}m</Text>
            </View>
            <Text style={styles.alignedTitle}>Ingredients</Text>
            {item.ingredients.map(ingredient => <ListItem desc={ingredient} key={ingredient} />)}
            <Text style={styles.alignedTitle}>Steps</Text>
            {item.steps.map(step => <ListItem desc={step} key={step} />)}
        </ScrollView>
    )
}

// Changes Title of Screen to Corresponding Category
MealDetailScreen.navigationOptions = (navData) => {
    const mealItem = navData.navigation.getParam('item');

    return {
        headerTitle: () => <Text numberOfLines={1} style={styles.headerTitle}>{mealItem.title}</Text>,
        headerRight: () => (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item
                        buttonStyle={styles.headerButton}
                        title="Fav"
                        iconName="md-star"
                        onPress={()=>console.log("Mark as favorite")}
                    />
                </HeaderButtons>
            )
    }
}

const styles = StyleSheet.create({
    screen: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    headerTitle: {
        color: 'white',
        fontSize: 20,
        width: 230,
    },
    image: {
        width: '100%',
        height: 200,
    },
    details: {
        flexDirection: 'row',
        padding: 7,
        justifyContent: 'space-around',
    },
    alignedTitle: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 15,
    }
})