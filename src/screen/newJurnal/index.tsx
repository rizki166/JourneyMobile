import React from 'react';
import { View } from 'react-native';
import { Navbar } from '../../component/navbar';
import PostScreen from '../../component/card/cardPost';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

type RootStackParamList = {
    NewJurnal: undefined;
    Post: { token: string };
};

type NewJurnalNavigationProp = NativeStackNavigationProp<RootStackParamList, 'NewJurnal'>;
type NewJurnalRouteProp = RouteProp<RootStackParamList, 'NewJurnal'>;

type Props = {
    navigation: NewJurnalNavigationProp;
    route: NewJurnalRouteProp;
};

export const NewJurnal: React.FC<Props> = ({ navigation, route }) => {
    const token = 'example-token';

    return (
        <View>
            <Navbar />
            <View>
                <PostScreen route={{ key: 'Post', name: 'Post', params: { token } }} navigation={navigation} />
            </View>
        </View>
    );
};
