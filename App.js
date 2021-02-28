import React from 'react';
import {Container} from 'native-base';

import HeaderComponent from './src/components/Header';
import List from './src/components/List';

const App: () => React$Node = () => {
  return (
    <Container>
      <HeaderComponent />
      <List />
    </Container>
  );
};

export default App;
