import React from 'react';
import {Container} from 'native-base';

import {Provider} from 'react-redux';
import {store} from './src/data/store';

import HeaderComponent from './src/components/Header';
import List from './src/components/List';

const App: () => React$Node = () => {
  return (
    <>
      <Provider store={store}>
        <Container>
          <HeaderComponent />
          <List />
        </Container>
      </Provider>
    </>
  );
};

export default App;
