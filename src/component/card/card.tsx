import React from 'react';
import { TouchableOpacity, Image, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { IJourney } from '../../type/app';
import moment from 'moment';
import BottonBookmark from '../button/buttonBookmark';

interface ICardProps {
    journey: IJourney;
}

const Card: React.FC<ICardProps> = ({ journey }) => {
    const navigation = useNavigation();

    const onPressCard = () => {
        navigation.navigate('DetailJourney', { journeyId: journey.id });
    };

    const imageUrl = `http://10.0.2.2:5000/uploads/${journey.image}`;
    const formattedDate = moment(journey.createdAt).format('D MMM YYYY');

    return (
        <TouchableOpacity style={styles.cardContainer} onPress={onPressCard}>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <View style={styles.textContainer}>
                <Text style={styles.title}>{journey.title}</Text>
                <View style={styles.rowContainer}>
                    <Text style={styles.date}>{formattedDate}</Text>
                    <BottonBookmark journeyId={journey.id as number} />
                </View>
                <Text style={styles.fullname}>{journey.user.fullname}</Text>
                <Text style={styles.description} numberOfLines={3} ellipsizeMode="tail">
                    {journey.description}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        width: '100%',
        backgroundColor: 'white',
        overflow: 'hidden',
        marginBottom: 25,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
    },
    image: {
        width: '100%',
        height: 300,
        objectFit: 'cover'
    },
    textContainer: {
        padding: 10,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 5,
    },
    date: {
        fontSize: 16,
        color: '#555',
    },
    fullname: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 5,
    },
    description: {
        marginTop: 5,
        fontSize: 14,
        color: '#444',
    },
});

export default Card;
