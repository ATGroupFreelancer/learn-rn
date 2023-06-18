import {View} from "react-native";
import {Picker} from "@react-native-picker/picker";
import React from "react";
import styles from "../utils/styles";

const ModalPicker = (props) => {

    return (
        <View style={styles.modalPickerContainer}>
            {Platform.OS === 'ios' ?
                <Picker style={modalPickerStyle.pickerIos}
                        selectedValue={props.selectedValue}
                        onValueChange={(itemValue, itemIndex) => props.onValueChange(itemValue, itemIndex)}>
                    {props.data.map((item, index) => {
                        return <Picker.Item key={index} label={item.label} value={item.value}/>
                    })}
                </Picker> :
                <Picker style={modalPickerStyle.picker}
                        selectedValue={props.selectedValue}
                        onValueChange={(itemValue, itemIndex) => props.onValueChange(itemValue, itemIndex)}>
                    {props.data.map((item, index) => {
                        return <Picker.Item key={index} label={item.label} value={item.value}/>
                    })}
                </Picker>}
        </View>
    )
}

export default ModalPicker