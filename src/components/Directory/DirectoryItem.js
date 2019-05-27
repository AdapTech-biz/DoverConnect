/* eslint-disable import/no-unresolved */
import React from 'react';
import { Image, Text, StyleSheet } from 'react-native';
import { Card, CardItem } from 'native-base';

const DirectoryItem = () => {
    return (
        <Card style={styles.cardStyle}>
            <CardItem style={styles.cardItemStyle} >
                <Text style={styles.contactName}>
                    Contact Name
                </Text>

                <Image
                    style={styles.iconStyle} 
                    source={require('../../images/phone_call.png')} 
                />
            </CardItem>


        </Card>
    );
};

const styles = StyleSheet.create({
    cardStyle: {
        borderRadius: 5,
        padding: 10
    },
    cardItemStyle: {
        justifyContent: 'space-between', 
        flex: 1
    },
    contactName: {
        alignContent: 'flex-start'
    },
    iconStyle: {
        alignContent: 'flex-end'
    }
});

export default DirectoryItem;
