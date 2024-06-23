import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useAppDispatch } from "../../store";
import API from "../../libs";
import { getJourneyAsync } from "../../store/async/journey";
import { getToken } from "../../libs/call/token"; 

interface IMark {
    journeyId: number;
}

const BottonBookmark: React.FC<IMark> = ({ journeyId }) => {
    const [isMark, setIsMark] = useState(false);
    const dispatch = useAppDispatch();

    const getMark = async () => {
        try {
            const token = await getToken();
            if (token) {
                const res = await API.get(`journey/${journeyId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                console.log(res, 'ini coba get data');
                setIsMark(res.data.data.journey !== null);
            }
        } catch (error) {
            console.log('Error fetching journey:', error);
        }
    };

    const handleLike = async () => {
        try {
            console.log('Handle like function called'); 
            const token = await getToken();
            console.log('Token:', token); 
            if (token) {
                const res = await API.post(
                    `bookmark`,
                    {
                        journeyId: journeyId,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                console.log('Bookmark API response:', res); 
                dispatch(getJourneyAsync());
                setIsMark(!isMark);
            }
        } catch (error) {
            console.log('Error in handleLike:', error);
        }
    };

    useEffect(() => {
        getMark();
      
    }, []);

    return (
        <TouchableOpacity onPress={handleLike}>
            <View style={styles.iconContainer}>
                <Ionicons
                    name={isMark ? 'bookmark' : 'bookmark-outline'}
                    size={24}
                    color={isMark ? 'blue' : 'red'}
                />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    iconContainer: {
        padding: 10,
        backgroundColor: "transparent",
    },
});

export default BottonBookmark;
