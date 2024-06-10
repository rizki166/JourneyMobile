import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View, KeyboardAvoidingView, Platform, ScrollView, Alert } from 'react-native';
import { TextInput } from 'react-native-paper';
import axios from 'axios';
import * as Animatable from 'react-native-animatable';

const Register = () => {
    const [fullname, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [isRegistered, setIsRegistered] = useState(false);

    const API_URL = Platform.select({
        ios: 'http://localhost:5000/register',
        android: 'http://10.0.2.2:5000/register',
        default: 'http://192.168.x.x:5000/register'
    });

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
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
                    <Image source={require('../../../../assets/atlas.png')} style={{ display: 'flex', position: 'absolute', left: 0, top: 0 }} />
                    <Image source={require('../../../../assets/leaf 1.png')} style={{ display: 'flex', position: 'absolute', right: 0, top: 0 }} />
                    <Text style={{ fontSize: 30, fontWeight: 'bold', position: 'absolute', top: 50 }}>Register</Text>
                    <View style={{ width: '80%', marginTop: 90, position: 'absolute', top: 100 }}>
                        <TextInput
                            placeholder="Full Name"
                            value={fullname}
                            onChangeText={setFullName}
                            style={{ borderRadius: 4, borderWidth: 1, fontSize: 20, marginBottom: 20 }}
                        />
                        <TextInput
                            placeholder="Email"
                            value={email}
                            onChangeText={setEmail}
                            style={{ borderRadius: 4, borderWidth: 1, fontSize: 20, marginBottom: 20 }}
                        />
                        <TextInput
                            placeholder="Password"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry
                            style={{ borderRadius: 4, borderWidth: 1, fontSize: 20, marginBottom: 20 }}
                        />
                        <TextInput
                            placeholder="Phone"
                            value={phone}
                            onChangeText={setPhone}
                            style={{ borderRadius: 4, borderWidth: 1, fontSize: 20, marginBottom: 30 }}
                        />
                        <TouchableOpacity
                            style={{ backgroundColor: '#3572EF', alignContent: 'center', alignItems: 'center', padding: 15, borderRadius: 10 }}
                            onPress={handleRegister}
                        >
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>Register</Text>
                        </TouchableOpacity>
                    </View>
                    {isRegistered && (
                        <Animatable.View animation="bounceIn" style={{ position: 'absolute', top: '50%', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'green' }}>Registration Successful!</Text>
                        </Animatable.View>
                    )}
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default Register;
