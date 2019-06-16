import {StyleSheet, Text, View, VrButton} from "react-360";
import React from 'react';
import {connect, setCurrentProduct} from './Store';

const ProductList = props => {
    if (!props.currentCategory) {
        return (
            <View>
                <Text>Select a category...</Text>
            </View>
        );
    }
    let selectedCategory = props.categories.find((el) => {
        return el.title === props.currentCategory
    })

    return (
        <View>
            <Text>Select an item in category {props.currentCategory}</Text>
            {selectedCategory.items.map((item) => (
                <VrButton
                    onClick={(evt) => selectItem(item, evt)}
                >
                    <Text>{item.title}    </Text>
                </VrButton>
            ))}
        </View>
    );
};

function selectItem(product)
{
    setCurrentProduct(product)
}

/////TODO : affiche une PLP

const styles = StyleSheet.create({
    list: {
        // Fill the entire surface
        width: 1000,
        height: 600,
        backgroundColor: 'rgba(224,233,25,0.62)',
        borderColor: '#50120e',
        borderWidth: 3,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        padding: 10,
    },
});

const ConnectedProductList = connect(ProductList);
export default ConnectedProductList;
