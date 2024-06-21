import React, { useState } from 'react';
import { View, TextInput, Button, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { launchImageLibrary } from 'react-native-image-picker';

type RootStackParamList = {
    Login: undefined;
    Post: { token: string };
};

type PostScreenRouteProp = RouteProp<RootStackParamList, 'Post'>;
type PostScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Post'>;

type Props = {
    route: PostScreenRouteProp;
    navigation: PostScreenNavigationProp;
};

const PostScreen: React.FC<Props> = ({ route }) => {
    const { token } = route.params;
    const [title, setTitle] = useState('');
    const [imageUri, setImageUri] = useState<string | null>(null);
    const [description, setDescription] = useState('');
    const [message, setMessage] = useState('');

    const handleChoosePhoto = () => {
        launchImageLibrary({ mediaType: 'photo' }, (response) => {
            if (response.assets && response.assets.length > 0) {
                setImageUri(response.assets[0].uri || null);
            }
        });
    };

    const handlePost = async () => {
        if (!imageUri) {
            setMessage('Please select an image');
            return;
        }

        const formData = new FormData();
        formData.append('title', title);
        formData.append('image', {
            uri: imageUri,
            type: 'image/jpeg',
            name: 'photo.jpg',
        } as any);
        formData.append('description', description);

        try {
            const response = await axios.post('http://localhost:5000/journey', formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                },
            });
            setMessage('Post created successfully!');
        } catch (error) {
            setMessage('Failed to create post');
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>

            <Text style={styles.header}>Create a New Post</Text>
            <TextInput
                style={styles.input}
                placeholder="Title"
                value={title}
                onChangeText={setTitle}
            />
            <TextInput
                style={[styles.input, styles.textArea]}
                placeholder="Description"
                value={description}
                onChangeText={setDescription}
                multiline
            />
            <TouchableOpacity style={styles.photoButton} onPress={handleChoosePhoto}>
                <Icon name="camera" size={24} color="#fff" />
                <Text style={styles.photoButtonText}>Choose Photo</Text>
            </TouchableOpacity>
            {imageUri ? <Image source={{ uri: imageUri }} style={styles.imagePreview} /> : null}

            <Button title="Post" onPress={handlePost} />
            {message ? <Text style={styles.message}>{message}</Text> : null}

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    form: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 4,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
    },
    input: {
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 4,
        padding: 8,
        marginBottom: 16,
        backgroundColor: '#fff',
    },
    textArea: {
        height: 100,
        textAlignVertical: 'top',
    },
    photoButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#007bff',
        padding: 12,
        borderRadius: 4,
        marginBottom: 16,
        justifyContent: 'center',
    },
    photoButtonText: {
        color: '#fff',
        marginLeft: 8,
    },
    imagePreview: {
        width: '100%',
        height: 200,
        borderRadius: 4,
        marginBottom: 16,
    },
    message: {
        marginTop: 16,
        textAlign: 'center',
        color: 'green',
    },
});

export default PostScreen;
