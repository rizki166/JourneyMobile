
import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NativeBaseProvider, extendTheme } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Home from '../screen/home';
import { NewJurnal } from '../screen/newJurnal';
import { Bookmark } from '../screen/bookmarks';
import Profile from '../screen/profile';
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
        source={require('../../assets/icon.png')}
        style={{ width: 30, height: 30 }}
        resizeMode="contain"
    />
);

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
            tabBarActiveTintColor: theme.colors.primary,
            tabBarInactiveTintColor: theme.colors.secondary,
        })}
    >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="NewJurnal" component={NewJurnal} />
        <Tab.Screen name="Bookmark" component={Bookmark} />
        <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
);

export { TabNavigator, CustomHeaderTitle, theme };
