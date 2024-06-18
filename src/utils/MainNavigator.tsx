import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../screen/home";
import Login from "../screen/auth/login";
import Register from "../screen/auth/register";
import Profile from "../screen/profile";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
    )
}

const MainNavigator = () => {
    return <StackNavigator />
}

export default MainNavigator;
