import React from 'react';
import { Text, TextInput, TouchableOpacity, View, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export const InputJourney = () => {
    return (
        <View style={styles.outerContainer}>
            <View style={styles.container}>
                <Ionicons name="search" size={20} color="gray" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Find Journey"
                    placeholderTextColor="#8e8e93"
                    onChangeText={(text) => { text }}
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Search</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    outerContainer: {
        paddingHorizontal: 10,
        marginTop: 10,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        borderRadius: 25,
        paddingHorizontal: 15,
    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        height: 40,
        paddingHorizontal: 10,
        fontSize: 16,
        color: '#000',
    },
    button: {
        backgroundColor: '#3572EF',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginLeft: 10,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default InputJourney;
