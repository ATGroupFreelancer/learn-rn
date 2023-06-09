import { TextInput, Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

export default () => {
    return (
        <View style={styles.container}>
            <View style={styles.container1}>
            <Text style={styles.labelLogin}>Login</Text>
            <Text style={styles.label}>UserName</Text>
            <TextInput style={styles.input}></TextInput>
            <Text style={styles.label}>Password</Text>
            <TextInput style={styles.input}></TextInput>
            {/* <Button style={styles.buttonLogin} title="Login"></Button>
            <Button style={styles.buttonForgotPassword} title="Forgot Password"></Button> */}
            <TouchableOpacity onPress={() => {console.log('onpress')}} style={styles.buttonLogin}>
                <Text style={styles.textButtonLogin}>Login</Text>
            </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems:'center',
        justifyContent: 'center',
    },
    container1: {
        flex: 1,
        marginVertical: 50,
        backgroundColor: 'yellow',
        alignItems:'center',
        justifyContent: 'center',
        width: '100%',
    },
    labelLogin: {
        paddingTop: 20,
        fontSize: 30,
        fontWeight: 'bold',
        color: 'red',
        marginBottom: 20,
    },
    label: {
        width: '70%',
        textAlign: 'left',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'red',
    },
    input: {
        fontSize: 20,
        height: 40,
        borderRadius: 10,
        fontWeight: 'bold',
        color: 'red',
        backgroundColor:'white',
        borderWidth: 1,
        width: '70%',
        marginBottom: 20,
    },
    buttonLogin: {
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    buttonForgotPassword: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'red',
    },
    textButtonLogin: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'red',
    },
});
