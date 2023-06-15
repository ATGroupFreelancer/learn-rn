import {StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView} from 'react-native';
import {AntDesign, FontAwesome5, Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';
import {useState} from "react";
import {Picker} from "@react-native-picker/picker";
import ModalSuccess from "./ModalSuccess";

const SignUpForm = ({toggleComponent}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [gender, setGender] = useState("male")
    const [dob, setDob] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [showModal, setShowModal] = useState(false)

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
            }
        }
    }

    const handleCloseModal = () => {
        setShowModal(false)
    }

    return (<ScrollView style={styles.container}>
        <View style={styles.formLogin}>
            <Text style={styles.title_login}>Welcome!</Text>
            <Text style={styles.sub_title_login}>Create an account</Text>
            <Text style={styles.label}>Email</Text>
            <View style={styles.inputContainer}>
                <MaterialCommunityIcons name="email-outline" style={styles.iconInTextInput}/>
                <TextInput value={email} onChangeText={text => setEmail(text)} placeholder='Enter email'
                           style={styles.input}></TextInput>
            </View>
            <Text style={styles.label}>Password</Text>
            <View style={styles.inputContainer}>
                <AntDesign name="lock1" style={styles.iconInTextInput}/>
                <TextInput value={password} onChangeText={text => setPassword(text)} placeholder='Enter password'
                           style={styles.input}></TextInput>
                <Ionicons name="eye-off-outline" style={styles.iconInTextInput}/>
            </View>
            <Text style={styles.label}>Confirm Password</Text>
            <View style={styles.inputContainer}>
                <AntDesign name="lock1" style={styles.iconInTextInput}/>
                <TextInput value={confirmPassword} onChangeText={text => setConfirmPassword(text)}
                           placeholder='Enter password' style={styles.input}></TextInput>
                <Ionicons name="eye-off-outline" style={styles.iconInTextInput}/>
            </View>
            <Text style={styles.label}>Gender</Text>
            <View style={styles.inputContainer}>
                {Platform.OS === 'ios' ?
                    <Picker style={styles.genderPickerIos} selectedValue={gender}
                            onValueChange={(itemValue) => setGender(itemValue)}>
                        <Picker.Item label="Male" value="male"/>
                        <Picker.Item label="Female" value="female"/>
                        <Picker.Item label="Other" value="other"/>
                    </Picker> :
                    <Picker style={styles.genderPicker} selectedValue={gender}
                            onValueChange={(itemValue) => setGender(itemValue)}>
                        <Picker.Item label="Male" value="male"/>
                        <Picker.Item label="Female" value="female"/>
                        <Picker.Item label="Other" value="other"/>
                    </Picker>}
            </View>
            <Text style={styles.label}>DOB</Text>
            <View style={styles.inputContainer}>
                {/*<AntDesign name="lock1" style={styles.iconInTextInput}/>*/}
                <TextInput value={dob} onChangeText={text => setDob(text)} placeholder='Enter dob'
                           style={styles.input}></TextInput>
            </View>
            <Text style={styles.label}>Address</Text>
            <View style={styles.inputContainer}>
                {/*<AntDesign name="lock1" style={styles.iconInTextInput}/>*/}
                <TextInput value={address} onChangeText={text => setAddress(text)} placeholder='Enter address'
                           style={styles.input}></TextInput>
            </View>
            <Text style={styles.label}>Phone number</Text>
            <View style={styles.inputContainer}>
                {/*<AntDesign name="lock1" style={styles.iconInTextInput}/>*/}
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
                    toggleComponent();
                }} style={styles.buttonSignUp}>
                    <Text style={styles.textButtonSignUp}>Sign in</Text>
                </TouchableOpacity>
            </View>
        </View>
        <ModalSuccess showModal={showModal} arraySuccess={arraySuccess} handleCloseModal={handleCloseModal}/>
    </ScrollView>);
}
export default SignUpForm;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    }, formLogin: {
        flex: 1,
        marginTop: 50,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
    }, image: {
        width: '100%', height: '100%',
    }, title_login: {
        textAlign: 'left', width: '90%', fontSize: 30, fontWeight: '900', color: 'black', marginVertical: 5,
    }, sub_title_login: {
        fontSize: 20, width: '90%', fontWeight: '500', color: '#9095A0',
    }, label: {
        width: '90%', textAlign: 'left', fontSize: 17, fontWeight: 'bold', color: 'black', marginTop: 15,
    }, inputContainer: {
        flexDirection: 'row', width: '90%', backgroundColor: '#F3F4F6', borderRadius: 5, paddingHorizontal: 10,
    }, input: {
        fontSize: 17,
        height: 40,
        borderRadius: 5,
        fontWeight: '400',
        color: 'black',
        backgroundColor: '#F3F4F6',
        width: '90%',
        paddingHorizontal: 10,
    }, iconInTextInput: {
        fontSize: 20, fontWeight: 'bold', color: 'black', textAlign: 'center', paddingVertical: 10,
    }, buttonLogin: {
        textAlign: 'center',
        backgroundColor: '#F8706E',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        width: '90%',
    }, checkbox: {
        flexDirection: 'row', width: '90%', marginVertical: 10,
    }, checkboxIcon: {
        fontSize: 20, fontWeight: 'bold', color: 'red', textAlign: 'center', marginRight: 10,
    }, buttonTermsAndConditions: {
        fontSize: 20, fontWeight: 'bold', backgroundColor: 'transparent',
    }, textTermsAndConditions: {
        fontSize: 15, fontWeight: '500', color: '#F8706E', textAlign: 'left', paddingHorizontal: 5,
    }, textButtonLogin: {
        fontSize: 20, fontWeight: '500', color: 'white', textAlign: 'center',
    }, orContinueWith: {
        fontSize: 12, fontWeight: '500', color: 'gray', textAlign: 'center', marginVertical: 5,
    }, groupIcon: {
        flexDirection: 'row', width: '90%', justifyContent: 'space-between', paddingHorizontal: 120,
    }, iconGG: {
        fontSize: 30, fontWeight: 'bold', color: '#EA4335', textAlign: 'center',
    }, iconFB: {
        fontSize: 30, fontWeight: '500', color: '#1977F2', textAlign: 'center',
    }, iconApple: {
        fontSize: 30, fontWeight: '500', color: 'black', textAlign: 'center',
    }, other: {
        flexDirection: 'row', width: '90%', justifyContent: 'space-between', paddingHorizontal: 70,
    }, textDontHaveAnAccount: {
        fontSize: 15, fontWeight: '400', color: 'black', textAlign: 'center', paddingHorizontal: 5,
    }, buttonSignUp: {
        backgroundColor: 'transparent',
    }, textButtonSignUp: {
        fontSize: 15, fontWeight: '500', color: '#F8706E', textAlign: 'center',
    }, error: {
        fontSize: 15, fontWeight: '500', color: 'red', textAlign: 'center',
    }, modalContainer: {
        flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', alignItems: 'center', justifyContent: 'center',
    }, modal: {
        width: '80%',
        height: '20%',
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    }, textModal: {
        fontSize: 20, fontWeight: 'bold', color: 'black', textAlign: 'center',
    }, buttonCloseModal: {
        backgroundColor: '#F8706E', paddingVertical: 10, borderRadius: 5, width: '30%', marginTop: 20,
    }, textButtonCloseModal: {
        fontSize: 20, fontWeight: '500', color: 'white', textAlign: 'center',
    }, genderPicker: {
        width: '90%', height: 100, fontWeight: '100', borderRadius: 5, color: 'black', backgroundColor: '#F3F4F6',
    }, genderPickerItem: {
        fontSize: 20, fontWeight: '500', color: 'black', textAlign: 'center',
    }, genderPickerItemLabel: {
        fontSize: 20, fontWeight: '500', color: 'black', textAlign: 'center',
    }, genderPickerIos: {
        width: '90%', height: 100, fontWeight: '100', borderRadius: 5, color: 'black', backgroundColor: '#F3F4F6',
    }

});

