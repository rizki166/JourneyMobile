import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { useNavigation, StackNavigationProp } from '@react-navigation/native';

// Tipe navigasi untuk tipe RootStackParamList
type RootStackParamList = {
    Home: undefined;
};

// Tipe untuk navigasi
type NavigationType = StackNavigationProp<RootStackParamList>;

const Home: React.FC = () => {
    const navigation = useNavigation<NavigationType>();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogout = () => {
        setIsLoggedIn(false);
        navigation.navigate('Login'); // Navigasi ke halaman login setelah logout
    };

    return (
        <View style={styles.container}>
            {isLoggedIn ? (
                <>
                    {/* Tambahkan komponen-komponen lain di sini jika diperlukan setelah login */}
                    <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                        <Text style={styles.buttonText}>Logout</Text>
                    </TouchableOpacity>
                </>
            ) : (
                <>
                    <Image source={require('../../../assets/alam.jpeg')} style={styles.image} />
                    <View style={styles.overlay}>
                        <TouchableOpacity style={styles.buttonLogin} onPress={() => navigation.navigate('Login')}>
                            <Text style={styles.buttonText}>Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonRegister} onPress={() => navigation.navigate('Register')}>
                            <Text style={styles.buttonText}>Register</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>The Journey</Text>
                        <Text style={styles.subtitle}>you ever dreamed of</Text>
                        <Text style={styles.description}>
                            The Journey you ever dreamed of. We made a tool so you can easily keep & share your travel memories. But there is a lot more
                        </Text>
                    </View>
                </>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EDEDED',
    },
    image: {
        width: '100%',
        height: 250,
    },
    overlay: {
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: '100%',
        gap: 10,
        paddingHorizontal: 10,
        marginTop: 15,
    },
    buttonRegister: {
        color: 'white',
        backgroundColor: '#3572EF',
        width: 100,
        borderRadius: 4,
        paddingVertical: 5,
        paddingHorizontal: 20,
        marginHorizontal: 5,
    },
    buttonLogin: {
        borderColor: 'white',
        borderWidth: 1,
        width: 100,
        borderRadius: 4,
        paddingVertical: 5,
        paddingHorizontal: 20,
        marginHorizontal: 5,
    },
    buttonText: {
        display: 'flex',
        textAlign: 'center',
        fontSize: 14,
        color: 'white',
    },
    textContainer: {
        position: 'absolute',
        width: '100%',
        marginTop: 120,
        marginLeft: 5,
        paddingHorizontal: 20,
    },
    title: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
    },
    subtitle: {
        color: 'white',
        fontSize: 20,
        marginBottom: 2,
        fontWeight: 'bold',
    },
    description: {
        color: 'white',
        fontSize: 12,
        width: '100%',
    },
    logoutButton: {
        backgroundColor: '#3572EF',
        width: 100,
        borderRadius: 4,
        paddingVertical: 5,
        paddingHorizontal: 20,
        alignSelf: 'center',
        marginTop: 20,
    },
});

export default Home;
