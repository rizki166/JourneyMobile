import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './home';
import { Bookmark } from './bookmarks';
import Profile from './profile';
import { NewJurnal } from './newJurnal';


const homeName = 'Home';
const bookmarkName = 'Bookmark';
const profileName = 'Profile';
const newJurnalName = 'NewJurnal';

const Tab = createBottomTabNavigator();

export default function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            switch (route.name) {
              case homeName:
                iconName = 'home';
                break;
              case bookmarkName:
                iconName = 'bookmark';
                break;
              case profileName:
                iconName = 'person';
                break;
              case newJurnalName:
                iconName = 'journal';
                break;
              default:
                iconName = 'circle';
                break;
            } 
              

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name={homeName} component={Home} />
        <Tab.Screen name={bookmarkName} component={Bookmark} />
        <Tab.Screen name={profileName} component={Profile} />
        <Tab.Screen name={newJurnalName} component={NewJurnal} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
