import React, { Component } from 'react';
import { Card, CardItem, Text } from 'native-base';
import HTML from 'react-native-render-html'; 


class AgendaItem extends Component {
    render() {
        return (
            <Card> 
                <CardItem>
                    <Text>
                       {this.props.title}
                    </Text>
                    
                </CardItem>

                <CardItem>
                <HTML html={this.props.description} />                            
                </CardItem>
            </Card>
        );
    }
}

export default AgendaItem;
