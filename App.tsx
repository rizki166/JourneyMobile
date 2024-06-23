
import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { store } from './src/store';
import { NativeBaseProvider, extendTheme } from 'native-base';
import { TabNavigator, CustomHeaderTitle, theme } from './src/navigation/TabNavigator'; 
import Login from './src/screen/auth/login';
import Register from './src/screen/auth/register';
import DetailJourney from './src/screen/detailJourney';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NativeBaseProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="TabNavigator" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="TabNavigator" component={TabNavigator} options={{ headerTitle: () => <CustomHeaderTitle /> }} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="DetailJourney" component={DetailJourney} />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
};

export default App;
