import { TextInput, Text, StyleSheet, View, Button, TouchableOpacity, Image } from 'react-native';
import { Ionicons, FontAwesome5, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

export default () => {
    return (
        <View style={styles.container}>
            <View style={styles.formImage}>
                <Image style={styles.image}
                    source={{ uri: '/Users/huynhthiquythuong/Documents/GitHub/learn-rn/assets/Image-background.png' }}></Image>
            </View>
            <View style={styles.formLogin}>
                <Text style={styles.title_login}>Hello!</Text>
                <Text style={styles.sub_title_login}>Welcome back</Text>
                <Text style={styles.label}>Email</Text>
                <View style={styles.inputContainer}>
                    <MaterialCommunityIcons name="email-outline" style={styles.iconInTextInput} />
                    <TextInput placeholder='Enter email' style={styles.input}></TextInput>
                </View>
                <Text style={styles.label}>Password</Text>
                <View style={styles.inputContainer}>
                    <AntDesign name="lock1" style={styles.iconInTextInput} />
                    <TextInput placeholder='Enter password' style={styles.input}></TextInput>
                    <Ionicons name="eye-off-outline" style={styles.iconInTextInput} />
                </View>
                <TouchableOpacity onPress={() => { console.log('onpress forgot password') }} style={styles.buttonForgotPassword}>
                    <Text style={styles.textForgotPassword}>Forgot password?</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { console.log('onpress sign in') }} style={styles.buttonLogin}>
                    <Text style={styles.textButtonLogin}>Sign in</Text>
                </TouchableOpacity>
                <Text style={styles.orContinueWith}>OR COUNTINUE WITH</Text>
                <View style={styles.groupIcon}>
                    <Ionicons name="ios-logo-google" style={styles.iconGG} />
                    <FontAwesome5 name="facebook" style={styles.iconFB} />
                    <AntDesign name="apple-o" style={styles.iconApple} />
                </View>
                <View style={styles.other}>
                    <Text style={styles.textDontHaveAnAccount}>Don't have an account?</Text>
                    <TouchableOpacity onPress={() => { console.log('onpress sign up') }} style={styles.buttonSignUp}>
                        <Text style={styles.textButtonSignUp}>Sign up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
    },
    formImage: {
        flex: 0.25,
        width: '100%',
    },
    formLogin: {
        flex: 0.75,
        height: '80%',
        marginTop: -15,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    title_login: {
        flex: 0.1,
        textAlign: 'left',
        width: '90%',
        fontSize: 30,
        fontWeight: '900',
        color: 'black',
        marginTop: 30,
        paddingVertical: 5,
    },
    sub_title_login: {
        flex: 0.1,
        fontSize: 20,
        width: '90%',
        height: 40,
        fontWeight: '500',
        color: '#9095A0',
        paddingVertical: 10,
    },
    label: {
        width: '90%',
        textAlign: 'left',
        fontSize: 17,
        fontWeight: 'bold',
        color: 'black',
        paddingVertical: 5,
        marginTop: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        width: '90%',
        backgroundColor: '#F3F4F6',
        borderRadius: 5,
        paddingHorizontal: 10,
    },
    input: {
        fontSize: 17,
        height: 40,
        borderRadius: 5,
        fontWeight: '400',
        color: 'black',
        backgroundColor: '#F3F4F6',
        width: '90%',
        paddingHorizontal: 10,
    },
    iconInTextInput: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        paddingVertical: 10,
    },
    buttonLogin: {
        textAlign: 'center',
        backgroundColor: '#F8706E',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        width: '90%',
        marginVertical: 20,
    },
    buttonForgotPassword: {
        width: '90%',
        backgroundColor: 'transparent',
        paddingVertical: 10,
    },
    textForgotPassword: {
        fontSize: 15,
        fontWeight: '500',
        color: '#F8706E',
        textAlign: 'right',
        paddingHorizontal: 5,
    },
    textButtonLogin: {
        fontSize: 20,
        fontWeight: '500',
        color: 'white',
        textAlign: 'center',
    },
    orContinueWith: {
        fontSize: 12,
        fontWeight: '500',
        color: 'gray',
        textAlign: 'center',
        paddingVertical: 5,
        marginTop: 20,
    },
    groupIcon: {
        flex: 0.6,
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-between',
        paddingHorizontal: 120,
    },
    iconGG: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#EA4335',
        textAlign: 'center',
        paddingVertical: 10,
    },
    iconFB: {
        fontSize: 30,
        fontWeight: '500',
        color: '#1977F2',
        textAlign: 'center',
        paddingVertical: 10,
    },
    iconApple: {
        fontSize: 30,
        fontWeight: '500',
        color: 'black',
        textAlign: 'center',
        paddingVertical: 10,
    },
    other: {
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-between',
        paddingHorizontal: 85,
    },
    textDontHaveAnAccount: {
        fontSize: 15,
        fontWeight: '400',
        color: 'black',
        textAlign: 'center',
        paddingHorizontal: 5,
    },
    buttonSignUp: {
        backgroundColor: 'transparent',
    },
    textButtonSignUp: {
        fontSize: 15,
        fontWeight: '500',
        color: '#F8706E',
        textAlign: 'center',
    },
});