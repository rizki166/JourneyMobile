import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { store } from './src/store';
import { NativeBaseProvider, extendTheme } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Home from './src/screen/home';
import { Bookmark } from './src/screen/bookmarks';
import Profile from './src/screen/profile';
import { NewJurnal } from './src/screen/newJurnal';
import Login from './src/screen/auth/login';
import Register from './src/screen/auth/register';
import DetailJourney from './src/screen/detailJourney';

const theme = extendTheme({
  colors: {
    primary: '#3498db',
    secondary: 'black',
  },
  fonts: {
    body: 'Roboto',
    heading: 'Roboto-Bold',
  },
});


const CustomHeaderTitle = () => (
  <Image
    source={require('./assets/icon.png')}
    style={{ width: 30, height: 30 }}
    resizeMode="contain"
  />
);

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    initialRouteName="Home"
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;

        switch (route.name) {
          case 'Home':
            iconName = 'home';
            break;
          case 'NewJurnal':
            return <MaterialIcons name="edit" size={size} color={color} />;
          case 'Bookmark':
            iconName = 'bookmark';
            break;
          case 'Profile':
            iconName = 'person';
            break;
          default:
            iconName = 'circle';
            break;
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: theme.colors.primary,
      inactiveTintColor: theme.colors.secondary,
    }}
  >
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="NewJurnal" component={NewJurnal} />
    <Tab.Screen name="Bookmark" component={Bookmark} />
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator>
);

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
