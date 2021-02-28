import React from 'react';
import {ListItem, Thumbnail, Text, Left, Body} from 'native-base';

const ItemComponent = () => {
  return (
    <ListItem avatar>
      <Left>
        <Thumbnail source={{uri: 'Image URL'}} />
      </Left>
      <Body>
        <Text>Kumar Pratik</Text>
        <Text note>Doing what you like will always keep you happy . .</Text>
      </Body>
    </ListItem>
  );
};

export default ItemComponent;
