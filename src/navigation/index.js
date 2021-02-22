import React from 'react';
import {NavigationContainer } from '@react-navigation/native';

import StackNavigator from './StackNavigator';
import TabsNavigator from './bottomNavigator';

import {useSelector} from 'react-redux';

const RootNavigator = () => {
  const isLoggedIn = useSelector((state) => state.loginReducer.isLoggedIn);
  console.log('--isLoggedIn--', isLoggedIn);
  return (
    <NavigationContainer>
      {isLoggedIn ? <TabsNavigator /> : <StackNavigator />}
    </NavigationContainer>
  );
}

export default RootNavigator;