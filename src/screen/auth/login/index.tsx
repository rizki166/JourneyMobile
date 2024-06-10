import { useNavigation, NavigationProp } from '@react-navigation/native'; // Import NavigationProp
import axios from 'axios';
import React, { useState } from 'react';
import { Alert, Image, Text, TouchableOpacity, View, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { TextInput } from 'react-native-paper';

// Definisikan tipe untuk navigation
type RootStackParamList = {
    Home: undefined;
    Login: undefined;
    Register: undefined;
};

type NavigationType = NavigationProp<RootStackParamList>;

const Login = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const navigation = useNavigation<NavigationType>(); // Gunakan useNavigation dengan tipe NavigationType

    const API_URL = Platform.select<string>({
        ios: 'http://localhost:5000/login',
        android: 'http://10.0.2.2:5000/login',
        default: 'http://192.168.x.x:5000/login'
    })!;

    const handleLogin = async () => {
        try {
            const response = await axios.post(API_URL, {
                email,
                password
            });
            console.log('API response:', response.data);
            if (response.data.status) {
                setIsLoggedIn(true);
                navigation.navigate('Home');
            } else {
                Alert.alert('Error', response.data.message as string);
            }
            console.log(setIsLoggedIn, "test")
        } catch (error: any) {
            console.error('API request error:', error.response ? error.response.data : error.toString());
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
                    <Text style={{ fontSize: 30, fontWeight: 'bold', position: 'absolute', top: 50 }}>Login</Text>
                    <View style={{ width: '80%', marginTop: 10, position: 'absolute', top: 100 }}>
                        <Text style={{ marginTop: 20, fontSize: 25, fontWeight: 'bold' }}>Email</Text>
                        <TextInput
                            placeholder="email"
                            value={email}
                            onChangeText={setEmail}
                            style={{ borderRadius: 4, borderWidth: 1, fontSize: 20, marginBottom: 20 }}
                        />
                        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Password</Text>
                        <TextInput
                            placeholder="Password"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry
                            style={{ borderRadius: 4, borderWidth: 1, fontSize: 20, marginBottom: 30 }}
                        />
                        <TouchableOpacity style={{ backgroundColor: '#3572EF', alignContent: 'center', alignItems: 'center', padding: 15, borderRadius: 10 }} onPress={handleLogin}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>Login</Text>
                        </TouchableOpacity>
                        <Text style={{ textAlign: 'center', marginTop: 20, fontSize: 16, fontWeight: 'bold' }}>
                            Don't have an account?
                            {/* <Text style={{ color: '#3572EF', fontWeight: 'bold', fontSize: 16 }} onPress={() => navigation.navigate('SignUp')}> Sign Up</Text> */}
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

export default Login;
