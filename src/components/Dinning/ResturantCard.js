import React from 'react';
import { Image } from 'react-native';
import { Card, CardItem, Text } from 'native-base';

const ResturantCard = (props) => {
    return (
        <Card style={{ flex: 1 }}>
            <CardItem header>
                <Text>{props.details.name}</Text>
            </CardItem>

            <CardItem>
                <Image style={{ flex: 1, width: null, height: 200 }} resizeMode='contain' source={{ uri: props.details.image }} />
            </CardItem>

            <CardItem>
                <Text>
                    View Menu
                </Text>
            </CardItem>
        </Card>
    );
};

export default ResturantCard;
