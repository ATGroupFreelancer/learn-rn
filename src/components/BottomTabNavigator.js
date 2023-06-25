import React from 'react';
import {View} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DashboardScreen from "../screens/DashboardScreen";
import BoardScreen from "../screens/BoardScreen";
import TeamScreen from "../screens/TeamScreen";
import SettingsScreen from "../screens/SettingsScreen";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

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
            <Tab.Screen name="Dashboard" component={DashboardScreen}/>
            <Tab.Screen name="Board" component={BoardScreen}/>
            <Tab.Screen name="Team" component={TeamScreen}/>
            <Tab.Screen name="Settings" component={SettingsScreen}/>
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;
