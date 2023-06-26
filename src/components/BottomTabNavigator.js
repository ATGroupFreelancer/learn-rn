import React from 'react';
import {View} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DashboardScreen from "../screens/DashboardScreen";
import BoardScreen from "../screens/BoardScreen";
import TeamScreen from "../screens/TeamScreen";
import SettingsScreen from "../screens/SettingsScreen";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export const DashboardDetail = () => {
    return (
        <View/>
    )
}

const DashboardStack = () => {
    return (
        <Stack.Navigator initialRouteName={'Dashboard'} screenOptions={{headerShown: false}}>
            <Stack.Screen name="Dashboard" component={DashboardScreen}/>
            <Stack.Screen name="DashboardDetail" component={DashboardDetail}/>
        </Stack.Navigator>
    )
}

const BottomTabNavigator = () => {

    return (
        <Tab.Navigator screenOptions={{headerShown: false}} initialRouteName={'Dashboard'}>
            <Tab.Screen name="Dashboard" component={DashboardScreen} options={{
                tabBarIcon: ({color, size}) => (
                    <Icon name="dashboard" color={color} size={size}/>
                ),
            }}/>
            <Tab.Screen name="Board" component={BoardScreen} options={{
                tabBarIcon: ({color, size}) => (
                    <Icon name="clipboard" color={color} size={size}/>
                ),
            }}/>
            <Tab.Screen name="Team" component={TeamScreen} options={{
                tabBarIcon: ({color, size}) => (
                    <Icon name="users" color={color} size={size}/>
                ),
            }}
            />
            <Tab.Screen name="Settings" component={SettingsScreen} options={{
                tabBarIcon: ({color, size}) => (
                    <Icon name="cog" color={color} size={size}/>
                ),
            }}/>
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;
