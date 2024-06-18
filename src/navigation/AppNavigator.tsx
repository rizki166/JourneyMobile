import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screen/auth/login';
import Register from '../screen/auth/register';
import DetailJourney from '../screen/detailJourney';
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator initialRouteName="Login">
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Register" component={Register} />
    <Stack.Screen name="DetailJourney" component={DetailJourney} />
    <Stack.Screen name="Main" component={TabNavigator} options={{ headerShown: false }} />
  </Stack.Navigator>
);

export default AppNavigator;
