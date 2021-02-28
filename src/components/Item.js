import React from 'react';
import {ListItem, Thumbnail, Text, Left, Body} from 'native-base';

const ItemComponent = ({avatar_url, login, node_id, id}) => {
  return (
    <ListItem avatar>
      <Left>
        <Thumbnail source={{uri: avatar_url}} />
      </Left>
      <Body>
        <Text>{login}</Text>
        <Text note>
          User ID: {id} and NODE_ID: {node_id}
        </Text>
      </Body>
    </ListItem>
  );
};

export default ItemComponent;
