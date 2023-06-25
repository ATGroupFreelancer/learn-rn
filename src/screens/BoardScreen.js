import Header from "../components/Header";
import React, {useState} from "react";
import {FlatList, StyleSheet, View} from "react-native";
import {faker} from "@faker-js/faker";
import HorizontalTask from "../components/tasks/HorizontalTask";

const BoardScreen = () => {
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
                return (<View><HorizontalTask data={users}> </HorizontalTask></View>)
        }
    }

    return (
        <FlatList style={styles.container}
                  data={listView}
                  renderItem={renderComponent}
                  keyExtractor={item => item.id}
            // bounces={Platform.OS === 'ios' ? false : null}
        />
    )
}
export default BoardScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingLeft: 16,
        width: '100%',
    },
    boardContainer: {
        flex: 1, backgroundColor: 'white', marginTop: 100, width: '100%', paddingLeft: 20,
    },
});