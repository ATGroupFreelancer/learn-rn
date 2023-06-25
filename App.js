import {StyleSheet} from 'react-native';
import SignInScreen from './src/screens/SignInScreen';
import React, {useState} from "react";
import SignUpScreen from "./src/screens/SignUpScreen";
import BottomTabNavigator, {DashboardDetail} from "./src/components/BottomTabNavigator";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import DashboardScreen from "./src/screens/DashboardScreen";

export default function App() {
    const [showLogin, setShowLogin] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const AuthenticationStack = () => {
        return (
            <Stack.Navigator initialRouteName={'SignInScreen'} screenOptions={{headerShown: false}}>
                <Stack.Screen name="SignInScreen" component={SignInScreen}/>
                <Stack.Screen name="SignUpScreen" component={SignUpScreen}/>
            </Stack.Navigator>
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
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={"SignIn"} screenOptions={{headerShown: false}}>
                {
                    isLoggedIn
                        ? <Stack.Screen name="AuthenStack" component={AuthenticationStack}/>
                        : <Stack.Screen name="Main" component={BottomTabNavigator}/>
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const Stack = createNativeStackNavigator();
