import React from 'react';
import {Header, Body, Title} from 'native-base';
import {StyleSheet} from 'react-native';

const HeaderComponent = () => {
  return (
    <Header>
      <Body style={styles.title}>
        <Title>List app</Title>
      </Body>
    </Header>
  );
};

const styles = StyleSheet.create({
  title: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

export default HeaderComponent;
