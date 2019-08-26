import {asset, Text, View, StyleSheet} from "react-360";
import React from 'react';
import {connect} from './Store';

const Add2CartNotification = props => {

    if (!props.notification){
        return (
            <View style={styles.panelHidden}>
                <Text>Notification not set</Text>
            </View>
        );
    }

    return (
        <View style={styles.panel}>
            <Text>
                { props.notification }
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    panelHidden: {
        // Hide
        width: 0,
        height: 0,
    },
    panel: {
        // Fill the entire surface
        width: 200,
        height: 50,
        backgroundColor: 'black',
        borderColor: '#303050',
        borderWidth: 2,
    }
});

const ConnectedAdd2CartNotification = connect(Add2CartNotification);
export default ConnectedAdd2CartNotification;
