import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { InputJourney } from '../../component/input/inputJouney';
import CardJourney from '../../component/card/cardJourney';


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


