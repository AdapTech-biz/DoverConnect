import React, { Component } from 'react';
import { FlatList, Image } from 'react-native';
import { Container, Content, Input, Left } from 'native-base';
import DirectoryItem from './DirectoryItem';


class DirectoryList extends Component {
    render() {
        return (
            <Container>
                <Content style={{backgroundColor: '#6AB7FF'}}>
                    
                    <FlatList 
                        data={[{ key: 'a' }, { key: 'b' }, 
                                { key: 'c' }, { key: 'd' }, 
                                { key: 'e' }, { key: 'f' }]}
                        renderItem={({ item }) => <DirectoryItem key={item.key} />}
                    />
                </Content>
            </Container>
        );
    }
}

export default DirectoryList;
