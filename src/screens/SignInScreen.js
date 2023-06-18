import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {AntDesign, FontAwesome5, Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';
import {useState} from "react";
import ModalSuccess from "../components/ModalSuccess";
import styles from "../utils/styles";

const SignInScreen = ({onLogin, onSignup}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showModal, setShowModal] = useState(false)

    const arraySuccess = [{
        title: 'Email: ',
        value: email
    }, {
        title: 'Password: ',
        value: password
    }]

    const handleLogin = () => {
        console.log('onpress sign in')
        setShowModal(true);
        setTimeout(() => {
            setShowModal(false);
            onLogin(true);
        }, 1000);
    }

    const handleCloseModal = () => {
        setShowModal(false)
    }

    return (
        <View style={styles.loginContainer}>
            <View style={styles.formImage}>
                <Image style={styles.imageLogin}
                       source={require('../assets/Image-background.png')}></Image>
            </View>
            <View style={styles.formLogin}>
                <Text style={styles.titleLogin}>Hello!</Text>
                <Text style={styles.subTitleLogin}>Welcome back</Text>
                <Text style={styles.labelInput}>Email</Text>
                <View style={styles.inputContainer}>
                    <MaterialCommunityIcons name="email-outline" style={styles.iconInTextInput}/>
                    <TextInput value={email} onChangeText={text => setEmail(text)} placeholder='Enter email'
                               style={styles.input}></TextInput>
                </View>
                <Text style={styles.labelInput}>Password</Text>
                <View style={styles.inputContainer}>
                    <AntDesign name="lock1" style={styles.iconInTextInput}/>
                    <TextInput secureTextEntry={true} value={password} onChangeText={text => setPassword(text)}
                               placeholder='Enter password' style={styles.input}></TextInput>
                    <Ionicons name="eye-off-outline" style={styles.iconInTextInput}/>
                </View>
                <TouchableOpacity onPress={() => {
                    console.log('onpress forgot password')
                }} style={styles.buttonForgotPassword}>
                    <Text style={styles.textForgotPassword}>Forgot password?</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleLogin} style={styles.buttonLogin}>
                    <Text style={styles.textButtonLogin}>Sign in</Text>
                </TouchableOpacity>
                <Text style={styles.orContinueWith}>OR COUNTINUE WITH</Text>
                <View style={styles.groupIcon}>
                    <Ionicons name="ios-logo-google" style={styles.iconGG}/>
                    <FontAwesome5 name="facebook" style={styles.iconFB}/>
                    <AntDesign name="apple-o" style={styles.iconApple}/>
                </View>
                <View style={styles.other}>
                    <Text style={styles.textDontHaveAnAccount}>Don't have an account?</Text>
                    <TouchableOpacity onPress={() => {
                        onSignup()
                    }} style={styles.buttonSignUp}>
                        <Text style={styles.textButtonSignUp}>Sign up</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <ModalSuccess showModal={showModal} arraySuccess={arraySuccess} handleCloseModal={handleCloseModal}/>
        </View>
    );
}
export default SignInScreen;