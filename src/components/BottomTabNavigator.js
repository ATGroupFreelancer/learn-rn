import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons'; // Đảm bảo bạn đã cài đặt thư viện expo-vector-icons
import CommunityScreen from '../screens/CommunityScreen';
import PortfolioScreen from '../screens/PortfolioScreen';
import ExploreScreen from '../screens/ExploreScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({color, size}) => {
                    let iconName;

                    if (route.name === 'Community') {
                        iconName = 'people-outline';
                    } else if (route.name === 'Portfolio') {
                        iconName = 'briefcase-outline';
                    } else if (route.name === 'Explore') {
                        iconName = 'search-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color}/>;
                },
            })}
        >
            <Tab.Screen name="Community" component={CommunityScreen}/>
            <Tab.Screen name="Portfolio" component={PortfolioScreen}/>
            <Tab.Screen name="Explore" component={ExploreScreen}/>
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;
