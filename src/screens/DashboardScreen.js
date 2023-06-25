import React, {useState} from "react";
import {Text, View} from "react-native";
import Header from "../components/Header";

const DashboardScreen = () => {
    const [valueSearch, setValueSearch] = useState('');
    const [isShowHeader, setIsShowHeader] = useState(true);

    return (
        <View style={{flex: 1, flexDirection: 'column', alignItems: 'center',}}>
            <Header callback={(text) => {
                setValueSearch(text)
            }}/>

            <Text>{valueSearch}</Text>
        </View>
    )
}
export default DashboardScreen;