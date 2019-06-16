import {asset, Environment, StyleSheet, Text, View, VrButton} from "react-360";
import React from 'react';
import {connect, setCurrentCategory} from './Store';

const Menu = props => {
    if (!props.categories) {
        return (
            <View>
                <Text>Failed to retrieve product list...</Text>
            </View>
        );
    }
    if (props.currentCategory) {
        ////////Throws an error if a VrButton is returned, so added a cptly different component...
        /*return (
            <BackButton source="menu"/>
        );*/
    }
    var style = styles.panel

    return (
        <View style={style}>
            {props.categories.map((category) => (
                <VrButton
                    style={styles.categoryButton}
                    onClick={(evt) => selectCategory(category, evt)}
                >
                    <Text style={styles.hello2Text}>{category.title}    </Text>
                </VrButton>
            ))}
        </View>
    );
};


function selectCategory(category, evt) {
    setCurrentCategory(category.title);
    Environment.setBackgroundImage(
        asset('countryside.jpg'),
        {format: '2D'},
    );
}

function selectBack() {
    //setCurrentCategory(null);
    Environment.setBackgroundImage(
        asset('360_world.jpg'),
        {format: '2D'},
    );
}

const styles = StyleSheet.create({
    panel: {
        // Fill the entire surface
        width: 300,
        height: 600,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderColor: '#303050',
        borderWidth: 2,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch'
    },
    greetingBox: {
        padding: 20,
        backgroundColor: '#000000',
        borderColor: '#639dda',
        borderWidth: 2,
    },
    greeting: {
        fontSize: 30,
    },

    hello2View: {
        width: 1000,
        height: 600,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderColor: '#303050',
        borderWidth: 3,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
    },
    hello2Text: {
        borderColor: '#639dda',
        fontSize: 50,
        color: '#00FF00'
    },
    categoryButton: {
        height: 120,
        width: 800
    }
});

const ConnectedMenu = connect(Menu);
export default ConnectedMenu;