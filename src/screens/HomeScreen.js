import {FlatList, View} from "react-native";
import styles from "../utils/styles";
import React from "react";
import Header from "../components/Header";
import History from "../components/History";
import ProductList from "../components/ProductList";

const HomeScreen = () => {
    const data = [
        {id: '1', type: 'header', content: 'This is a text content'},
        {id: '2', type: 'history', content: 'https://example.com/image.jpg'},
        {id: '3', type: 'product', content: './assets/Image-background.png'},
    ];

    const renderItem = ({item}) => {
        if (item.type === 'header') {
            return (
                <View>
                    <Header>{item.content}</Header>
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
            />
        </View>
    )
}

export default HomeScreen