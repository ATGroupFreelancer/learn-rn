import {FlatList, Image, StyleSheet, Text, View} from "react-native";
import React from "react";

const History = () => {
    const recentDocs = [
        {
            id: '1',
            type: 'banner',
            image: require('../assets/imageBanner1.png'),
            title: 'Title1',
            content: 'This is a text content, This is a text content, This is a text content, ',
            dateTime: '2021-09-01'
        },
        {
            id: '2',
            type: 'banner',
            image: require('../assets/imageBanner2.png'),
            title: 'Title2',
            content: 'This is a text content This is a text content, This is a text content, ',
            dateTime: '2021-09-02'
        },
        {
            id: '3',
            type: 'banner',
            image: require('../assets/imageBanner3.png'),
            title: 'Title3',
            content: 'This is a text content,This is a text content, This is a text content,',
            dateTime: '2021-09-03'
        },
        {
            id: '4',
            type: 'banner',
            image: require('../assets/imageBanner3.png'),
            title: 'Title4',
            content: 'This is a text content,This is a text content, This is a text content,',
            dateTime: '2021-09-03'
        },
        {
            id: '5',
            type: 'banner',
            image: require('../assets/imageBanner3.png'),
            title: 'Title5',
            content: 'This is a text content,This is a text content, This is a text content,',
            dateTime: '2021-09-03'
        },
        {
            id: '6',
            type: 'banner',
            image: require('../assets/imageBanner3.png'),
            title: 'Title6',
            content: 'This is a text content,This is a text content, This is a text content,',
            dateTime: '2021-09-03'
        },
    ];

    const renderItem = ({item}) => {
        if (item.type === 'banner') {
            return (
                <View style={styles.historyItem}>
                    <Image style={styles.imageHistory} source={item.image}/>
                    <Text style={styles.textItemTitle}>{item.title}</Text>
                    <Text style={styles.textItemContent}>{item.content}</Text>
                    <Text style={styles.textItemContent}>{item.dateTime}</Text>
                </View>
            );
        }
    }

    return (
        <View style={styles.historyHomePage}>
            <View style={styles.historyTop}>
                <Text style={styles.titleHistory}>Recent docs</Text>
                <Text style={styles.titleSeeAll}>See all</Text>
            </View>
            <FlatList
                data={recentDocs}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default History

const styles = StyleSheet.create({
    historyHomePage: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FAFAFB',
        marginTop: 8,
        paddingHorizontal: 20,
        width: '100%',
        height: 270,
    },
    historyTop: {
        backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginVertical: 15,
    },
    titleHistory: {
        fontSize: 18,
        fontWeight: '600',
        color: '#000',
    },
    titleSeeAll: {
        fontSize: 15,
        fontWeight: '500',
        color: '#6E7787',
    },
    historyItem: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginVertical: 5,
        marginRight: 10,
        paddingHorizontal: 10,
        width: 170,
        height: 200,
        borderRadius: 10,
    },
    imageHistory: {
        width: 130,
        height: 80,
        justifyContent: 'flex-start',
    },
    textItemTitle: {
        justifyContent: 'center',
        textAlign: 'left',
        fontSize: 15,
        fontWeight: '600',
        color: '#000',
        marginVertical: 5,
    },
    textItemContent: {
        fontSize: 13,
        fontWeight: '500',
        color: '#6E7787',
        marginVertical: 5,
    }
});
