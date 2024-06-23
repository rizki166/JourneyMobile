
import AsyncStorage from '@react-native-async-storage/async-storage';


const storeToken = async (token: string) => {
    try {
        await AsyncStorage.setItem('token', token);
        console.log('Token stored successfully');
    } catch (error) {
        console.log('Error storing token:', error);
    }
};


const getToken = async (): Promise<string | null> => {
    try {
        const token = await AsyncStorage.getItem('token');
        return token;
    } catch (error) {
        console.log('Error getting token:', error);
        return null;
    }
};


const removeToken = async () => {
    try {
        await AsyncStorage.removeItem('token');
        console.log('Token removed successfully');
    } catch (error) {
        console.log('Error removing token:', error);
    }
};

export { storeToken, getToken, removeToken };
