import React from 'react';
import { Text, TextInput, TouchableOpacity, View, StyleSheet } from "react-native";

export const InputJourney = () => {
    return (
        <View >
            <Text style={{ fontSize: 25, fontWeight: 'bold', marginLeft: 10 }}> Journey</Text>
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="Find Journey"
                    onChangeText={(text) => { }}
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Search</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        marginHorizontal: 30,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        padding: 5,
    },
    input: {
        height: 40,
        borderColor: 'blue',
        borderWidth: 1,
        width: 250,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        paddingHorizontal: 10,
    },
    button: {
        marginLeft: 10,

        backgroundColor: '#3572EF',
        width: 80,
        height: 30,
        borderRadius: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
});
