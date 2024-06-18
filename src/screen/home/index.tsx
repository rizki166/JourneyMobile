import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { InputJourney } from '../../component/input/inputJouney';
import CardJourney from '../../component/card/cardJourney';
import { useNavigation } from '@react-navigation/native';
// import { Navbar } from '../../component/navbar';

//screen 
import { Bookmark } from '../bookmarks';
import Profile from '../profile';
import { NewJurnal } from '../newJurnal';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//screen name
const bookmarkName = 'Bookmark';
const profileName = 'Profile';
const newJurnalName = 'newJurnal';

const Tab = createBottomTabNavigator()
export default function Home() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            {/* <Navbar /> */}
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <InputJourney />
                <CardJourney />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    scrollContainer: {
        marginTop: 30,
    },
});


