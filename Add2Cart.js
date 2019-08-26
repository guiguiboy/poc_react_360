import {asset, Text, View, StyleSheet, Image, VrButton} from "react-360";
import React from 'react';
import {connect, setNotification} from './Store';

const Add2Cart = props => {

    if (!props.currentProduct){
        return (
            <View style={styles.panelHidden}>
                <Text>Select a product first to add it in the cart</Text>
            </View>
        );
    }

    const image = asset('cart.jpg', {format: '2D'});
    const product = props.currentProduct;

    return (
        <View style={styles.panel}>
            <VrButton onClick={(evt) => triggerAdd2Cart(product, evt)}>
                <Image style={styles.image} source={{uri: image.uri }} />
            </VrButton>
        </View>
    );
};

function triggerAdd2Cart(product, evt) {
    setNotification('Ajouté au panier !');
}

const styles = StyleSheet.create({
    panelHidden: {
        // Fill the entire surface
        width: 0,
        height: 0,
    },
    panel: {
        // Fill the entire surface
        width: 60,
        height: 60,
        backgroundColor: 'black',
        borderColor: '#303050',
        borderWidth: 2,
    },
    image: {
        width: 60,
        height: 60,
    },
});

const ConnectedAdd2Cart = connect(Add2Cart);
export default ConnectedAdd2Cart;
