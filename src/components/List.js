import React from 'react';
import {List, Content} from 'native-base';

import ItemComponent from './Item';

const ListComponent = () => {
  return (
    <Content>
      <List>
        <ItemComponent />
      </List>
    </Content>
  );
};

export default ListComponent;
