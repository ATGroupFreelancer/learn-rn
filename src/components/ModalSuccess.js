import {Modal, TouchableOpacity, Text, View} from "react-native";
import React from "react";
import styles from "../utils/styles";

const ModalSuccess = (props) => {
    const {showModal, handleCloseModal, arraySuccess} = props
    return (
        <Modal visible={showModal} transparent={true}>
            <View style={styles.modalContainer}>
                <View style={styles.modalDetail}>
                    <Text style={styles.modalTitle}>Success</Text>
                    {arraySuccess.map((item, index) => {
                        return <Text key={index} style={styles.modalSubTitle}>{item.title} : {item.value}</Text>
                    })}
                    <TouchableOpacity onPress={handleCloseModal} style={styles.modalButton}>
                        <Text style={styles.modalTextButton}>OK</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

export default ModalSuccess;