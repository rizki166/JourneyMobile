import React, { useState } from 'react';
import { Alert, Image, Text, TouchableOpacity, View, KeyboardAvoidingView, Platform, ScrollView, StyleSheet } from 'react-native';
import { TextInput, IconButton } from 'react-native-paper';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import axios from 'axios';
import { storeToken } from '../../../libs/call/token';


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
    const [secureTextEntry, setSecureTextEntry] = useState<boolean>(true);
    const navigation = useNavigation<NavigationType>();

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
                await storeToken(response.data.data);
                setIsLoggedIn(true);
                navigation.navigate('Home');
            } else {
                Alert.alert('Error', response.data.message as string);
            }
        } catch (error: any) {
            console.error('API request error:', error.response ? error.response.data : error.toString());
            Alert.alert('Error', 'An error occurred. Please try again.');
        }
    };

    const toggleSecureEntry = () => {
        setSecureTextEntry(!secureTextEntry);
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
                    <Text style={styles.title}>Login</Text>
                    <View style={styles.formContainer}>
                        <TextInput
                            placeholder="Email"
                            value={email}
                            onChangeText={setEmail}
                            style={styles.input}
                        />
                        <View style={styles.passwordInput}>
                            <TextInput
                                placeholder="Password"
                                value={password}
                                onChangeText={setPassword}
                                secureTextEntry={secureTextEntry}
                                style={styles.input}
                            />
                            <IconButton
                                icon={secureTextEntry ? 'eye' : 'eye-off'}
                                onPress={toggleSecureEntry}
                                style={styles.iconButton}
                                color="#3572EF"
                            />
                        </View>
                        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                            <Text style={styles.loginButtonText}>Login</Text>
                        </TouchableOpacity>
                        <Text style={styles.signUpText}>
                            Don't have an account?
                            <Text style={styles.signUpLink} onPress={() => navigation.navigate('Register')}> Sign Up</Text>
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

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
        fontFamily: 'Roboto',
    },
    passwordInput: {
        width: '100%',
        height: 50,
        borderRadius: 5,
        fontSize: 20,
        marginBottom: 20,
        fontFamily: 'Roboto',
    },
    iconButton: {
        position: 'absolute',
        right: 10,
    },
    loginButton: {
        backgroundColor: '#3572EF',
        paddingVertical: 15,
        paddingHorizontal: 60,
        borderRadius: 10,
        marginBottom: 30,
        width: '100%',
    },
    loginButtonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Roboto',
    },
    signUpText: {
        textAlign: 'center',
        fontSize: 16,
    },
    signUpLink: {
        color: '#3572EF',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default Login;
