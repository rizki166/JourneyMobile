import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screen/home';
import Login from './src/screen/auth/login';
import Register from './src/screen/auth/register';
import { NativeBaseProvider, Box } from 'native-base';
import Profile from './src/screen/profile';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name='Profile' component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
