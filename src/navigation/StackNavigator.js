import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { Welcome, Login, Register } from '../screens';
import { WELCOME_ROUTE, SIGNIN_ROUTE, REGISTER_ROUTE} from './routes';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen component={Welcome} name={WELCOME_ROUTE} />
      <Stack.Screen component={Login} name={SIGNIN_ROUTE} />
      <Stack.Screen component={Register} name={REGISTER_ROUTE} />

    </Stack.Navigator>
  );
}

export default StackNavigator;