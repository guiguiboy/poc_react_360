import { Text, View, StyleSheet} from "react-360";
import React from 'react';
import {connect} from './Store';

const ProductDescription = props => {

    if (!props.currentProduct){
        return (
            <View style={styles.panelHidden}>
                <Text>Select a product first to view description</Text>
            </View>
        );
    }

    console.log(props.currentProduct.description);
    let description = props.currentProduct.description;
    return (
        <View style={styles.panel}>
            <Text>{ description }</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    panelHidden: {
        // Fill the entire surface
        width: 500,
        height: 50,
        display: "none"
    },
    panel: {
        // Fill the entire surface
        width: 500,
        height: 50,
        backgroundColor: 'black',
        borderColor: '#303050',
        borderWidth: 2,
    },
});

const ConnectedProductDescription = connect(ProductDescription);
export default ConnectedProductDescription;
