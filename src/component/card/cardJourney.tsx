import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";

export const CardJourney = () => {
    const cardData = [
        {
            title: "Bersemayam di Tanah Dewata",
            date: "29/ July /2024",
            description: "Liburan di tahun baru 2020 keberangkatan saya menuju Pulau Dewata Bali. Sampai lah saya malam itu di Bali Airport menujukan waktu jam 02.00, dan melanjutkan pejalanan yang menyenangkan..",
            imageSrc: require('../../../assets/icon.png'),
            bookmarkIconSrc: require('../../../assets/bookmark.png')
        },
        {
            title: "Petualangan di Ujung Kulon",
            date: "15/ August /2024",
            description: "Perjalanan saya ke Ujung Kulon penuh dengan petualangan dan pemandangan alam yang luar biasa. Bertemu dengan badak bercula satu adalah pengalaman yang tak terlupakan.",
            imageSrc: require('../../../assets/alam.jpeg'),
            bookmarkIconSrc: require('../../../assets/bookmark.png')
        }
    ];

    const Card = ({ data }) => (
        <View style={{ width: "90%", backgroundColor: 'white', borderRadius: 10, overflow: 'hidden', marginBottom: 25 }}>
            <View style={{ position: 'relative' }}>
                <Image source={data.imageSrc} style={{ width: "100%", height: 200 }} />
                <TouchableOpacity style={{ position: 'absolute', top: 10, right: 10, padding: 10, backgroundColor: 'white', borderRadius: 100, width: 40, height: 40 }}>
                    <Image source={data.bookmarkIconSrc} />
                </TouchableOpacity>
            </View>
            <View style={{ padding: 10 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{data.title}</Text>
                <Text>{data.date}</Text>
                <Text>{data.description}</Text>
            </View>
        </View>
    );

    return (
        <ScrollView contentContainerStyle={{ alignItems: 'center', paddingTop: 30 }}>
            {cardData.map((data, index) => (
                <Card key={index} data={data} />
            ))}
        </ScrollView>
    );
};
