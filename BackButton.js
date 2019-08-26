import {asset, Environment, StyleSheet, Text, View, VrButton} from "react-360";
import React from 'react';
import {Aisle} from "./index";
import {connect, setCurrentCategory} from './Store';

export class BackButton extends React.Component {

    render() {

        return (
            <View>
                <VrButton onClick={() => resetCategory()}>
                    <Text>Ceci est un retour back</Text>
                </VrButton>
            </View>
        );
    }
};

function resetCategory() {
    setCurrentCategory(null);
    Environment.setBackgroundImage(
        asset('360_world.jpg'),
        {format: '2D'},
    );
}

const ConnectedBackButton = connect(BackButton);
export default ConnectedBackButton;
