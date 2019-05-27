import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { numToMonth } from '../../helperFunctions';

const AgendaDayHeader = (props) => {
    return (
        <View>
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
    textStyle: {
        fontSize: 30,
        alignSelf: 'center'
    }
});

export default AgendaDayHeader;
