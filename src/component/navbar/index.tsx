import React from 'react';
import { Image, View, StyleSheet, Text } from 'react-native';
import { Box, Menu, Pressable, HStack } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; // Menggunakan react-native-vector-icons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; // Menggunakan react-native-vector-icons

type RootStackParamList = {
    Login: undefined
}

type NavigationType = NavigationProp<RootStackParamList>;

function Example() {
    const navigation = useNavigation<NavigationType>();

    return (
        <Box flexDirection="row" justifyContent="flex-end" alignItems="center">
            <Menu trigger={triggerProps => {
                return (
                    <Pressable accessibilityLabel="More options menu" {...triggerProps}>
                        <MaterialIcons name="menu" size={24} color="black" />
                    </Pressable>
                );
            }}>

                <Menu.Item onPress={() => navigation.navigate('Login')}>
                    <HStack alignItems="center">
                        <MaterialIcons name="logout" size={24} color="red" />
                        <Text style={styles.menuText}>Logout</Text>
                    </HStack>
                </Menu.Item>
            </Menu>
        </Box>
    );
}

export const Navbar = () => {
    return (
        <View style={styles.navbar}>
            <Image source={require('../../../assets/icon.png')} style={styles.icon} />
            <Example />
        </View>
    );
};

const styles = StyleSheet.create({
    navbar: {
        height: 50,
        width: '100%',
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    icon: {
        width: 100,
        height: 30,
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginLeft: 10,
    },
    menuText: {
        marginLeft: 8,
        color: 'black',
    },
});

export default Navbar;
