import React from "react";
import BottomTabNavigator from "../components/BottomTabNavigator";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const HomeScreen = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={BottomTabNavigator}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const Stack = createNativeStackNavigator();

export default HomeScreen
