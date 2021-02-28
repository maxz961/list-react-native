import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {List, Content} from 'native-base';
import {fetchUsers} from '../data/actions/users';

import ItemComponent from './Item';

const ListComponent = () => {
  const dispatch = useDispatch();
  const {users} = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <Content>
      <List>
        {users.map((user) => (
          <ItemComponent key={user.id} {...user} />
        ))}
      </List>
    </Content>
  );
};

export default ListComponent;
