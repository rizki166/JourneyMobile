import React from 'react';
import { Image, View, StyleSheet, Text } from 'react-native';
import { Navbar } from '../../component/navbar';
import CardJourney from '../../component/card/cardJourney';
import { ScrollView } from 'native-base';

const Profile = () => {
    return (
        <View style={styles.container}>
            <Navbar />
            <View style={styles.content}>
                <Text style={styles.headerText}>Profile</Text>
                <View style={styles.imageContainer}>
                    <Image
                        source={require('../../../assets/alam.jpeg')}
                        style={styles.image}
                    />
                    <Text style={styles.textName}>
                        rizki
                    </Text>
                    <Text style={styles.textEmail}>
                        rizki@gmail.com
                    </Text>
                </View>
                <ScrollView>
                    <CardJourney />
                </ScrollView>

            </View>
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {


    },
    headerText: {
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: 10,
        marginTop: 20,
    },
    imageContainer: {
        alignItems: 'center',
        marginTop: 20,
        padding: 3,

    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 2,
        borderColor: '#4486DE'
    },
    textName: {
        fontSize: 23,
        fontWeight: "bold"
    },
    textEmail: {
        fontSize: 20,
        color: '#7C7C7C'
    }
});

export default Profile;
