/* eslint-disable import/no-unresolved */
import React, { Component } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { 
    Text, 
    Card, 
    CardItem,
    Thumbnail,
    Left,
    Body
    } from 'native-base';


class NewsCard extends Component {
    renderImage() {
        if (this.props.article.enclosure !== undefined) {
            return this.props.article.enclosure._attributes.url;
        }
        return 'https://i1.wp.com/thefrontline.org.uk/wp-content/uploads/2018/10/placeholder.jpg?ssl=1';
    }
    
    render() {
        // console.log((this.props.article));
        return (
                <TouchableOpacity >
                    <Card>
                       <CardItem> 
                           <Left>
                                <Thumbnail source={require('../../images/dover_logo.png')} />
                                <Body>
                                    <Text>{this.props.article.title._text}</Text>
                                    <Text note>10 Jun 2019</Text>
                                </Body>
                           </Left>
                       </CardItem>

                       <CardItem>
                           <Image 
                                source={{ uri: this.renderImage() }}
                                style={{ height: 200, width: null, flex: 1 }}
                           />
                       </CardItem>

                       <CardItem>
                           <Text>
                           {this.props.article.description._text.replace(/(<([^>]+)>)/ig, '').substring(0, 175)}
                           ...Read More
                           </Text>
                           
                       </CardItem>
                   </Card>
                </TouchableOpacity>

        );
    }
}

export default NewsCard;
