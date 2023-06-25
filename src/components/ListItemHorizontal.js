import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";

const ListItemHorizontal = (props) => {
    const {widthItem, listName, data, flagSeeAll, flagNext, navigation} = props;

    const dynamicStyle = StyleSheet.create({
        item: {
            width: widthItem,
            height: widthItem === 80 ? 100 : widthItem === 170 ? 140 : 240,
            backgroundColor: widthItem === 80 ? '#FEF1F0' : widthItem === 170 ? '#F0F8FE' : '#FFFFFF',
            marginHorizontal: 5,
            borderRadius: 10,
            paddingVertical: widthItem === 80 ? 15 : 10,
            justifyContent: 'flex-start',
            alignItems: widthItem === 180 ? 'center' : 'flex-start',
            paddingHorizontal: 10,
            borderColor: widthItem === 180 ? '#EAEAEA' : '#F3F4F6',
            borderWidth: widthItem === 180 ? 1 : 0,
        },
        name: {
            fontSize: widthItem === 80 ? 13 : widthItem === 170 ? 15 : 17,
            fontWeight: 'bold',
            color: '#000000',
            width: '100%',
            textAlign: 'left',
            marginTop: widthItem === 80 ? 10 : widthItem === 170 ? 5 : 120,
        },
        content: {
            fontSize: widthItem === 80 ? 11 : widthItem === 170 ? 13 : 15,
            fontWeight: '400',
            color: '#9095A0',
            width: '100%',
            textAlign: 'left',
            marginTop: widthItem === 80 ? 5 : 5,
        },
    });

    const renderItem = ({item}) => {
        return (
            // <TouchableOpacity style={StyleSheet.flatten(([ dynamicStyle.item, {  width:  }  ]))}>
            <TouchableOpacity style={dynamicStyle.item} onPress={() => {
                navigation.navigate("SignIn")
            }}>
                {item.image ? (<Image source={item.image} style={styles.image}/>) : null}
                {item.avatar ? (<Image source={item.avatar} style={styles.popularAvatar}/>) : null}
                <Text numberOfLines={2} style={styles.name}>{item.title}</Text>
                <Text numberOfLines={3} style={styles.content}>{item.content}</Text>
                {flagNext ? (<Image style={styles.buttonNext} source={require('../assets/buttonNext.png')}/>) : null}
            </TouchableOpacity>
        )
    }

    return (
        <View>
            <View style={styles.topComponent}>
                <Text style={styles.title}>{listName}</Text>
                {flagSeeAll ? <TouchableOpacity><Text style={styles.seeAll}>See all</Text></TouchableOpacity> : null}
            </View>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                snapToOffsets={[...Array(data.length)].map((x, i) => (i * widthItem) + 10)}
            />
        </View>
    )
}

export default ListItemHorizontal;

const styles = StyleSheet.create({
    topComponent: {flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'},
    title: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#000',
        paddingVertical: 10,
    }, content: {
        color: '#93B299',
        fontSize: 13,
        fontWeight: 'bold'
    }, name: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#000',
    }, image: {width: 30, height: 30},
    seeAll: {
        fontSize: 15,
        fontWeight: '400',
        color: 'red',
        marginRight: 20,
    }, buttonNext: {
        width: 30,
        height: 30,
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
    popularAvatar: {
        marginTop: 20,
        width: 100,
        height: 100,
        borderRadius: 25,
        position: 'absolute',
    }
});
