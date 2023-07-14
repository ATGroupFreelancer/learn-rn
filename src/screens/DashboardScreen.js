import React, {useEffect, useState} from "react";
import {FlatList, StyleSheet, View} from "react-native";
import Header from "../components/Header";
import HorizontalTask from "../components/tasks/HorizontalTask";
import {faker} from "@faker-js/faker";
import {useSelector, useDispatch} from "react-redux";
import { fetchListProductAction } from "../redux/actions";

const DashboardScreen = () => {
    const [valueSearch, setValueSearch] = useState('');
    const [isShowHeader, setIsShowHeader] = useState(true);

    const users = [];
    for (let i = 0; i < 10; i++) {
        const user = {
            user_id: i + 1,
            username: faker.internet.userName(),
            email: faker.internet.email(),
            avatar: faker.image.avatar(),
            password: faker.internet.password(),
            create_at: faker.date.recent(),
        }
        users.push(user);
    }
    const dispatch = useDispatch();
    const dataTask = useSelector(state => state.card.cardItems);

    useEffect(() => {
            dispatch(fetchListProductAction());
        } , [])

    const productList = useSelector(state => state.product.data)
    // console.log(useSelector(state => state.product.data));

    const listView = [
        {
            id: 1,
            type: 'Header',
            component: 'Header',
        },
        {
            id: 2,
            type: 'Body',
            component: 'Task',
        }
    ]

    const renderComponent = ({item}) => {
        switch (item.type) {
            case 'Header':
                console.log('Header')
                return (
                    <View>
                        <Header data={users} title={'Board'} callback={(text) => {
                            setValueSearch(text)
                        }}/>
                    </View>)
            case 'Body':
                console.log('Body')
                return (<View><HorizontalTask tabId={'Dashboard'} data={productList}> </HorizontalTask></View>)
        }
    }

    return (
        <FlatList style={styles.container}
                  data={listView}
                  renderItem={renderComponent}
                  keyExtractor={item => item.id}
                  extraData={listView}
            // bounces={Platform.OS === 'ios' ? false : null}
        />
    )
}
export default DashboardScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        width: '100%',
    },
    boardContainer: {
        flex: 1, backgroundColor: 'white', marginTop: 100, width: '100%', paddingLeft: 20,
    },
});
