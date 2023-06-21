import React from "react";
import BottomTabNavigator from "../components/BottomTabNavigator";
import {NavigationContainer} from "@react-navigation/native";

const HomeScreen = () => {
    // const data = [
    //     {id: '1', type: 'header', content: 'This is a text content'},
    //     {id: '2', type: 'history', content: 'https://example.com/image.jpg'},
    //     {id: '3', type: 'product', content: './assets/Image-background.png'},
    // ];
    //
    // const renderItem = ({item}) => {
    //     if (item.type === 'header') {
    //         return (
    //             <View>
    //                 <Header>{item.content}</Header>
    //             </View>
    //         );
    //     } else if (item.type === 'history') {
    //         return (
    //             <View>
    //                 <History>{item.content}</History>
    //             </View>
    //         );
    //     } else if (item.type === 'product') {
    //         return (
    //             <View>
    //                 <ProductList>{item.content}</ProductList>
    //             </View>
    //         );
    //     }
    // };
    //
    // return (
    //     <View style={styles.homePageContainer}>
    //         <FlatList
    //             data={data}
    //             renderItem={renderItem}
    //             keyExtractor={(item) => item.id}
    //             showsVerticalScrollIndicator={false}
    //         />
    //     </View>
    // )
    return (
        <NavigationContainer>
            <BottomTabNavigator/>
        </NavigationContainer>
    )
}

export default HomeScreen
