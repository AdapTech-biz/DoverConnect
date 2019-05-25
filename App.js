import React, { Component } from 'react';
import { Container, Header, Left, Right, Body, Title, Text, Tab, Tabs, ScrollableTab, StyleProvider } from 'native-base';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import getTheme from './native-base-theme/components';
import platform from './native-base-theme/variables/platform';
import NewsList from './src/components/NewsList';
import EventCalendar from './src/components/EventCalendar';
import Travel from './src/components/Travel';
import DirectoryList from './src/components/DirectoryList';
import rootReducer from './src/reducers';
import PlacesToEat from './src/components/PlacesToEat';

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
                  <Header noLeft hasTabs>
                  <Left />
                    <Body>
                      <Title>Dover AFB</Title>
                    </Body>
                    <Right />
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
