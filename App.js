import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Left, Icon,
        Right, Body, Tab, Tabs,
        ScrollableTab, StyleProvider } from 'native-base';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import getTheme from './native-base-theme/components';
import platform from './native-base-theme/variables/platform';
import NewsList from './src/components/News/NewsList.js';
import EventCalendar from './src/components/Events/EventCalendar.js';
import Travel from './src/components/Space-A/Travel.js';
import DirectoryList from './src/components/Directory/DirectoryList.js';
import rootReducer from './src/reducers';
import PlacesToEat from './src/components/Dinning/PlacesToEat.js';

class App extends Component {
  render() {
    const store = createStore(
      rootReducer,
      applyMiddleware(thunk)
    );
    
    return (
      <Provider store={store}>  
        <StyleProvider style={getTheme(platform)}>
          <Container>
                  <Header hasTabs>
                  <Left />
                    <Body style={{ flex: 1 }} >
                      <Image source={require('./src/images/app_logo.png')} />
                    </Body>
                    <Right>
                      <Icon name='megaphone' />
                      </Right>
                  </Header>
                  <Tabs renderTabBar={() => <ScrollableTab />}>
                    <Tab heading="News">
                      <NewsList />
                    </Tab>
                    <Tab heading="Events">
                    <EventCalendar />
                    </Tab>
                    <Tab heading="Travel">
                      <Travel />
                    </Tab>
                    <Tab heading="Contacts">
                    <DirectoryList />
                    </Tab>
                    <Tab heading="Dining">
                    <PlacesToEat />
                    </Tab>
                  </Tabs>
          </Container>
        </StyleProvider>
      </Provider> 
    );
  }
}

export default App;
