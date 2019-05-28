/* eslint-disable import/no-unresolved */
import React, { Component } from 'react';
import { Image, TouchableWithoutFeedback, Linking } from 'react-native';
import { 
    Text, 
    Card, 
    CardItem,
    Thumbnail,
    Left,
    Body,
    Icon,
    View
    } from 'native-base';
import { dateParser } from '../../helperFunctions';


class NewsCard extends Component {
    openLink(url) {
        Linking.openURL(url).catch((err) => console.error('An error occurred', err));
    }

    renderImage() {
        if (this.props.article.enclosure !== undefined) {
            return this.props.article.enclosure._attributes.url;
        }
        return 'https://i1.wp.com/thefrontline.org.uk/wp-content/uploads/2018/10/placeholder.jpg?ssl=1';
    }
    
    render() {
        return (
             
                    <Card>
                       <CardItem bordered header> 
                           <Left>
                                <Thumbnail source={require('../../images/dover_logo.png')} />
                                <Body>
                                    <Text>{this.props.article.title._text}</Text>
                                    <Text note>{dateParser(this.props.article.pubDate._text)}</Text>
                                </Body>
                           </Left>
                       </CardItem>

                       <CardItem button onPress={() => this.openLink(this.props.article.link._text)}>
                           <Image 
                                source={{ uri: this.renderImage() }}
                                style={{ height: 200, width: null, flex: 1 }}
                           />
                       </CardItem>

                       <CardItem cardBody button onPress={() => this.openLink(this.props.article.link._text)} style={{ paddingHorizontal: 10 }}>
                           <Text>
                            {this.props.article.description._text.replace(/(<([^>]+)>)/ig, '').substring(0, 175).trim()}
                            ...Read More
                           </Text>
                       </CardItem>
                       <CardItem footer>
                           <View style={{flex: 1,flexDirection: 'row', justifyContent: 'space-evenly' }}>
                                <Icon name='chatboxes' />
                                <Icon name='share-alt' />
                                <Icon name='heart' />
                           </View>
                       </CardItem>
                   </Card>

        );
    }
}

export default NewsCard;
