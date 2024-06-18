import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View, KeyboardAvoidingView, Platform, ScrollView, Alert, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import axios from 'axios';

type Props = {};

const Register: React.FC<Props> = () => {
    const [fullname, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [isRegistered, setIsRegistered] = useState(false);

    const API_URL = Platform.select({
        ios: 'http://localhost:5000/register',
        android: 'http://10.0.2.2:5000/register',
        default: 'http://192.168.x.x:5000/register'
    })!;

    const handleRegister = async () => {
        try {
            const response = await axios.post(API_URL, {
                fullname,
                email,
                password,
                phone
            });

            console.log('API response:', response.data);

            if (response.data.status) {
                setIsRegistered(true);
                setTimeout(() => {
                    Alert.alert('Success', response.data.message);
                    setIsRegistered(false);
                }, 2000);
            } else {
                console.log('Registration failed response:', response.data);
                Alert.alert('Error', response.data.message);
            }
        } catch (error) {
            console.error('API request error:', error.response ? error.response.data : error.message);
            Alert.alert('Error', 'An error occurred. Please try again.');
        }
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.inner}>
                    <Image source={require('../../../../assets/atlas.png')} style={styles.backgroundImage} />
                    <Image source={require('../../../../assets/leaf 1.png')} style={styles.leafImage} />
                    <Text style={styles.title}>Register</Text>
                    <View style={styles.formContainer}>
                        <TextInput
                            placeholder="Full Name"
                            value={fullname}
                            onChangeText={setFullName}
                            style={styles.input}
                        />
                        <TextInput
                            placeholder="Email"
                            value={email}
                            onChangeText={setEmail}
                            style={styles.input}
                        />
                        <TextInput
                            placeholder="Password"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry
                            style={styles.input}
                        />
                        <TextInput
                            placeholder="Phone"
                            value={phone}
                            onChangeText={setPhone}
                            style={styles.input}
                        />
                        <TouchableOpacity
                            style={styles.registerButton}
                            onPress={handleRegister}
                        >
                            <Text style={styles.registerButtonText}>Register</Text>
                        </TouchableOpacity>
                        {isRegistered && (
                            <View style={styles.successMessage}>
                                <Text style={styles.successMessageText}>Registration Successful!</Text>
                            </View>
                        )}
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    inner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundImage: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        opacity: 0.5,
    },
    leafImage: {
        position: 'absolute',
        right: 0,
        top: 0,
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        marginTop: 50,
        marginBottom: 30,
        fontFamily: 'Roboto',
        color: 'black',
    },
    formContainer: {
        width: '80%',
        alignItems: 'center',
    },
    input: {
        width: '100%',
        height: 50,
        borderRadius: 5,
        borderWidth: 1,
        fontSize: 20,
        marginBottom: 20,
        paddingHorizontal: 15,
    },
    registerButton: {
        backgroundColor: '#3572EF',
        paddingVertical: 15,
        paddingHorizontal: 60,
        borderRadius: 10,
        marginBottom: 30,
        width: '100%',
    },
    registerButtonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },
    successMessage: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#4CAF50',
        borderRadius: 5,
    },
    successMessageText: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
    },
});

export default Register;
