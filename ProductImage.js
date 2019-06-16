import {asset, StyleSheet, Text, View, Image} from "react-360";
import React from 'react';
import {connect} from './Store';

const ProductImage = props => {

    if (!props.currentProduct){
        return (
            <View style={styles.panel}>
                <Text>Select a product first</Text>
            </View>
        );
    }
    const imagePath = asset(props.currentProduct.image)
    return (
        <View style={styles.panel}>
            <Image style={styles.image} source={{uri: imagePath.uri }} />
        </View>
    );
};

const styles = StyleSheet.create({
    panel: {
        // Fill the entire surface
        width: 280,
        height: 280,
        backgroundColor: 'red',
        borderColor: '#303050',
        borderWidth: 2,
    },
    image: {
        width: '100%',
        height: 280,
    },
});

const ConnectedProductImage = connect(ProductImage);
export default ConnectedProductImage;
