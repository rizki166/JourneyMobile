import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, Platform, ScrollView } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { getJourneyId } from '../../libs/call/journey';
import { IJourney } from '../../type/app';
import moment from 'moment';

const baseURL = Platform.select({
    ios: "http://localhost:5000/",
    android: "http://10.0.2.2:5000/",
    default: "http://192.168.x.x:5000/",
});

const DetailJourney = () => {
    const route = useRoute<RouteProp<{ params: { journeyId: number } }, 'params'>>();
    const { journeyId } = route.params;

    const [journeyDetail, setJourneyDetail] = useState<IJourney>({
        userId: 0,
        title: '',
        image: '',
        id: 0,
        description: '',
        createdAt: '',
        user: { id: 0, fullname: '', email: '' },
    });

    const getJourney = async (id: number) => {
        try {
            const res = await getJourneyId(id);
            setJourneyDetail(res.data.data);
        } catch (error) {
            console.log('Error fetching journey:', error);
        }
    };

    useEffect(() => {
        getJourney(journeyId);
    }, [journeyId]);

    const imageUrl = `${baseURL}uploads/${journeyDetail.image}`;
    const formattedDate = moment(journeyDetail.createdAt).format('D MMM YYYY');

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.content}>
                    <View style={styles.header}>
                        <Text style={styles.title}>{journeyDetail.title}</Text>
                        <Text style={styles.fullname}>{journeyDetail.user.fullname}</Text>
                    </View>
                    <View style={styles.dateContainer}>
                        <Text style={styles.date}>{formattedDate}</Text>
                    </View>
                    <Image
                        source={{ uri: imageUrl }}
                        style={styles.image}
                        onError={(e) => console.log('Error loading image:', e.nativeEvent.error)}
                    />
                    <Text style={styles.description}>{journeyDetail.description}</Text>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    scrollContent: {
        flexGrow: 1,

    },
    content: {
        alignItems: 'center',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 50,
        padding:10
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        flex: 1,
    },
    fullname: {
        fontSize: 20,
        width: 150,
        textAlign: 'right',
    },
    dateContainer: {
        alignSelf: 'flex-start',
        marginBottom: 10,
        padding:10
    },
    date: {
        fontSize: 18,
    },
    image: {
        width: "100%",
        height: 300,
        marginBottom: 20,
        objectFit: 'cover'
    },
    description: {
        fontSize: 18,
        width: '100%',
        display: 'flex',

    },
});

export default DetailJourney;
