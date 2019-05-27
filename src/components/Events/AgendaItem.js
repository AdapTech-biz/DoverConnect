import React, { Component } from 'react';
import { Card, CardItem, Text } from 'native-base';
import HTML from 'react-native-render-html'; 


class AgendaItem extends Component {
    render() {
        return (
            <Card> 
                <CardItem style={{ backgroundColor: '#f0dc82' }} bordered header>
                    <Text>
                       {this.props.title}
                    </Text>
                    
                </CardItem>

                <CardItem cardBody style={{ padding: 10 }}>
                    <HTML html={this.props.description} />                            
                </CardItem>
            </Card>
        );
    }
}

export default AgendaItem;
