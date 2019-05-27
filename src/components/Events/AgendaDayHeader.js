import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { numToMonth } from '../../helperFunctions';

const AgendaDayHeader = (props) => {
    console.log(props.day);
    return (
        <View style={styles.containerViewStyle}>
            <Text style={styles.textStyle}>
               {numToMonth(props.day.month).substring(0, 3)}
            </Text>
            <Text style={styles.textStyle}>
                {props.day.day}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    containerViewStyle: {
        marginLeft: 5,
        marginRight: 5
    },
    textStyle: {
        fontSize: 30,
        alignSelf: 'center'
    }
});

export default AgendaDayHeader;
