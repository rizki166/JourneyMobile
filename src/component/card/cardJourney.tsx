import React, { useEffect } from 'react';
import { View, StyleSheet } from "react-native";
import Card from './card';
import { useAppDispatch, useAppSelector } from '../../store';
import { getJourneyAsync } from '../../store/async/journey';

const CardJourney = () => {
    const dispatch = useAppDispatch();
    const journey = useAppSelector((state) => state.journey);

    useEffect(() => {
        dispatch(getJourneyAsync());
    }, [dispatch]);

    return (
        <View style={styles.container}>
            {journey.journey.map((journey) => (
                <Card
                    key={journey.id}
                    journey={journey}
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingTop: 30,
    },
});

export default CardJourney;
