import {FlatList, View} from "react-native";
import styles from "../utils/styles";
import React, {useState} from "react";
import History from "../components/History";
import ProductList from "../components/ProductList";
import HeaderFull from "../components/HeaderFull";

const HomeScreenFull = () => {
    const [avatar, setAvatar] = useState('')

    const data = [
        {id: '1', type: 'userInfo', data: {name: 'Olivia Blue', age: 30, avatar: require('../assets/avatar4blue.png')}},
        {id: '2', type: 'assert', content: 'https://example.com/image.jpg'},
        {id: '3', type: 'product', content: './assets/Image-background.png'},
    ];

    const renderItem = ({item}) => {
        if (item.type === 'userInfo') {
            setAvatar(item.data.avatar)
            return (
                <View>
                    <HeaderFull avatar={avatar}/>
                </View>
            );
        } else if (item.type === 'history') {
            return (
                <View>
                    <History>{item.content}</History>
                </View>
            );
        } else if (item.type === 'product') {
            return (
                <View>
                    <ProductList>{item.content}</ProductList>
                </View>
            );
        }
    };

    return (
        <View style={styles.homePageContainer}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default HomeScreenFull
