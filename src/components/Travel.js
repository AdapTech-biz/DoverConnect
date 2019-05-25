import React, { Component } from 'react';
import { WebView } from 'react-native';

class Travel extends Component {
    render() {
        return (
            <WebView
                source={{ uri: 'https://m.facebook.com/DoverPaxTerminal/' }}
                style={{ flex: 1 }}
            />
        );
    }
}

export default Travel;
