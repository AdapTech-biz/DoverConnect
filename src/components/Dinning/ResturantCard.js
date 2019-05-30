import React from 'react';
import { Image, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardItem, Text } from 'native-base';
import { displayMenu } from '../../actions/Dining';


const ResturantCard = (props) => {
    return (
        <TouchableWithoutFeedback onPress={() => props.displayMenu(props.details.name)}>
        <Card style={{ flex: 1 }}>
            <CardItem header bordered>
                <Text>{props.details.name}</Text>
            </CardItem>

            <CardItem>
                <Image style={{ flex: 1, width: null, height: 200 }} resizeMode='contain' source={{ uri: props.details.image }} />
            </CardItem>

            <CardItem footer>
                <Text>
                    View Menu
                </Text>
            </CardItem>
        </Card>
        </TouchableWithoutFeedback>
    );
};

export default connect(null, { displayMenu })(ResturantCard);
