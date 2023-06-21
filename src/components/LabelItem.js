import {Text, TouchableOpacity, View} from 'react-native';
import React from "react";
import styles from "../utils/styles";

const LabelItem = (props) => {
    const {catName, catData, catStyle, itemCat, textCat} = props;
    console.log(catData)

    const renderItem = ({item}) => {
        return (
            <View style={itemCat}>
                <Text style={textCat}>{item.title}</Text>
            </View>
        )
    }

    return (
        <View>
            <View style={styles.topComponent}>
                <Text style={styles.title}>{catName}</Text>
            </View>
            <View style={catStyle}>
                {catData.map((item, index) => {
                    return (
                        <TouchableOpacity key={index} style={itemCat}>
                            <Text style={textCat}>{item.title}</Text>
                        </TouchableOpacity>
                    )
                })}
                {/*<FlatList renderItem={renderItem} data={catData} keyExtractor={item => item.id}/>*/}
            </View>
        </View>
    )
}

export default LabelItem;
