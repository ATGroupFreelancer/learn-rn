import {Image, ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {AntDesign, FontAwesome5, Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';
import React, {useState} from "react";
import ModalSuccess from "../components/ModalSuccess";
import styles from "../utils/styles";
import {Picker} from "@react-native-picker/picker";
import {Platform} from "expo-modules-core/src";


const SignUpScreen = ({onLogin, onSignup}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [gender, setGender] = useState("male")
    const [dob, setDob] = useState()
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [showModal, setShowModal] = useState(false)
    const arrayGender = ['Male', 'Female', 'Other']

    const arraySuccess = [{
        title: 'Email: ',
        value: email
    }, {
        title: 'Password: ',
        value: password
    }, {
        title: 'Confirm password: ',
        value: confirmPassword
    }, {
        title: 'Gender: ',
        value: gender
    }, {
        title: 'Date of birth: ',
        value: dob
    }, {
        title: 'Address: ',
        value: address
    }, {
        title: 'Phone: ',
        value: phone
    }]

    const handelSignUp = () => {
        if (!(password === '' || confirmPassword === '' || email === '' || gender === '' || dob === '' || address === '' || phone === '')) {
            alert('Please fill in all fields');
        } else {
            if (password !== confirmPassword) {
                alert('Password and confirm password do not match')
            } else {
                setShowModal(true);
                setTimeout(() => {
                    setShowModal(false);
                    onLogin(true);
                }, 1000);
            }
        }
    }

    const handleCloseModal = () => {
        setShowModal(false)
    }

    return (
        <ScrollView style={styles.signupContainer}>
            <View style={styles.formImage}>
                <Image style={styles.imageLogin} source={require('../assets/Image-background.png')}></Image>
            </View>
            <View style={styles.formSignup}>
                <Text style={styles.titleLogin}>Welcome!</Text>
                <Text style={styles.subTitleLogin}>Create an account</Text>
                <Text style={styles.labelInput}>Email</Text>
                <View style={styles.inputContainer}>
                    <MaterialCommunityIcons name="email-outline" style={styles.iconInTextInput}/>
                    <TextInput value={email} onChangeText={text => setEmail(text)} placeholder='Enter email'
                               style={styles.input}></TextInput>
                </View>
                <Text style={styles.labelInput}>Password</Text>
                <View style={styles.inputContainer}>
                    <AntDesign name="lock1" style={styles.iconInTextInput}/>
                    <TextInput value={password} onChangeText={text => setPassword(text)} placeholder='Enter password'
                               style={styles.input}></TextInput>
                    <Ionicons name="eye-off-outline" style={styles.iconInTextInput}/>
                </View>
                <Text style={styles.labelInput}>Confirm Password</Text>
                <View style={styles.inputContainer}>
                    <AntDesign name="lock1" style={styles.iconInTextInput}/>
                    <TextInput value={confirmPassword} onChangeText={text => setConfirmPassword(text)}
                               placeholder='Enter password' style={styles.input}></TextInput>
                    <Ionicons name="eye-off-outline" style={styles.iconInTextInput}/>
                </View>
                <Text style={styles.labelInput}>Gender</Text>
                <View style={styles.inputContainer}>
                    {Platform.OS === 'ios' ?
                        <View style={styles.pickerGenderIOS}>
                            <Picker selectedValue={gender} onValueChange={(itemValue) => setGender(itemValue)}>
                                {arrayGender.map(genderItem => {
                                    return <Picker.Item key={genderItem} label={genderItem} value={genderItem}/>
                                })}
                            </Picker>
                        </View>
                        :
                        <View style={styles.pickerGenderAndroid}>
                            <Picker selectedValue={gender} onValueChange={(itemValue) => setGender(itemValue)}
                                    mode="dropdown">
                                {arrayGender.map(genderItem => {
                                    return <Picker.Item key={genderItem} label={genderItem} value={genderItem}/>
                                })}
                            </Picker>
                        </View>}
                </View>
                <Text style={styles.labelInput}>DOB</Text>
                <View style={styles.inputContainer}>
                    <TextInput value={dob} onChangeText={text => setDob(text)} placeholder='Enter dob'
                               style={styles.input}></TextInput>
                </View>
                <Text style={styles.labelInput}>Address</Text>
                <View style={styles.inputContainer}>
                    <TextInput value={address} onChangeText={text => setAddress(text)} placeholder='Enter address'
                               style={styles.input}></TextInput>
                </View>
                <Text style={styles.labelInput}>Phone number</Text>
                <View style={styles.inputContainer}>
                    <TextInput value={phone} onChangeText={text => setPhone(text)} placeholder='Enter phone number'
                               style={styles.input}></TextInput>
                </View>
                <View style={styles.checkbox}>
                    <Ionicons name="ios-checkbox-outline" style={styles.checkboxIcon}/>
                    <Text style={styles.textDontHaveAnAccount}>I agree with</Text>
                    <TouchableOpacity onPress={() => {
                        console.log('onpress terms and conditions')
                    }} style={styles.buttonTermsAndConditions}>
                        <Text style={styles.textTermsAndConditions}>Terms & Conditions</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={handelSignUp} style={styles.buttonLogin}>
                    <Text style={styles.textButtonLogin}>Sign up</Text>
                </TouchableOpacity>
                <Text style={styles.orContinueWith}>OR SIGN UP WITH</Text>
                <View style={styles.groupIcon}>
                    <Ionicons name="ios-logo-google" style={styles.iconGG}/>
                    <FontAwesome5 name="facebook" style={styles.iconFB}/>
                    <AntDesign name="apple-o" style={styles.iconApple}/>
                </View>
                <View style={styles.other}>
                    <Text style={styles.textDontHaveAnAccount}>Alrealdy have an account?</Text>
                    <TouchableOpacity onPress={() => {
                        onSignup();
                    }} style={styles.buttonSignUp}>
                        <Text style={styles.textButtonSignUp}>Sign in</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <ModalSuccess showModal={showModal} arraySuccess={arraySuccess} handleCloseModal={handleCloseModal}/>
        </ScrollView>)
        ;
}
export default SignUpScreen;