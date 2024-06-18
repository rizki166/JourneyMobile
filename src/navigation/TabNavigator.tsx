
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screen/home';
import Profile from '../screen/profile';
import { Bookmark } from '../screen/bookmarks';
import { NewJurnal } from '../screen/newJurnal';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

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
                    case 'Profile':
                        iconName = 'person';
                        break;
                    case 'Bookmark':
                        iconName = 'bookmark';
                        break;
                    case 'NewJurnal':
                        iconName = 'journal';
                        break;
                    default:
                        iconName = 'circle';
                        break;
                }

                return <Ionicons name={iconName} size={size} color={color} />;
            },
        })}
    >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Bookmark" component={Bookmark} />
        <Tab.Screen name="NewJurnal" component={NewJurnal} />
    </Tab.Navigator>
);

export default TabNavigator;
