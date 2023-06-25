import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    loginContainer: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    }, signupContainer: {
        flex: 1,
        backgroundColor: 'white',
    }, formImage: {
        width: '100%',
        height: 220,
        resizeMode: 'cover',
    }, imageLogin: {
        width: '100%', height: '100%',
    }, formLogin: {
        height: '80%',
        marginTop: -15,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    }, titleLogin: {
        textAlign: 'left',
        width: '90%',
        fontSize: 30,
        fontWeight: '900',
        color: 'black',
        marginTop: 30,
    }, subTitleLogin: {
        fontSize: 20, width: '90%', fontWeight: '500', color: '#9095A0', marginVertical: 10,
    }, labelInput: {
        width: '90%',
        textAlign: 'left',
        fontSize: 17,
        fontWeight: 'bold',
        color: 'black',
        paddingVertical: 5,
        marginTop: 20,
    }, inputContainer: {
        flexDirection: 'row',
        width: '90%',
        backgroundColor: '#F3F4F6',
        borderRadius: 5,
        paddingHorizontal: 10,
    }, input: {
        fontSize: 17,
        height: 40,
        fontWeight: '400',
        color: 'black',
        backgroundColor: '#F3F4F6',
        width: '85%',
        paddingHorizontal: 10,
    }, buttonInput: {
        backgroundColor: 'transparent',
        paddingVertical: 5,
        height: 40,
        borderColor: 'gray',
    }, buttonLogin: {
        textAlign: 'center',
        backgroundColor: '#F8706E',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        width: '90%',
        marginVertical: 20,
    }, buttonForgotPassword: {
        width: '90%', backgroundColor: 'transparent', paddingVertical: 10,
    }, textForgotPassword: {
        fontSize: 15, fontWeight: '500', color: '#F8706E', textAlign: 'right', paddingHorizontal: 5,
    }, textButtonLogin: {
        fontSize: 20, fontWeight: '500', color: 'white', textAlign: 'center',
    }, orContinueWith: {
        fontSize: 12, fontWeight: '500', color: 'gray', textAlign: 'center', paddingVertical: 5, marginTop: 20,
    }, groupIcon: {
        flex: 0.6, flexDirection: 'row', width: '90%', justifyContent: 'space-between', paddingHorizontal: '27%',
    }, iconGG: {
        fontSize: 30, fontWeight: 'bold', color: '#EA4335', textAlign: 'center', paddingVertical: 10,
    }, iconFB: {
        fontSize: 30, fontWeight: '500', color: '#1977F2', textAlign: 'center', paddingVertical: 10,
    }, iconApple: {
        fontSize: 30, fontWeight: '500', color: 'black', textAlign: 'center', paddingVertical: 10,
    }, other: {
        flexDirection: 'row', width: '90%', justifyContent: 'space-between', paddingHorizontal: '15%', marginBottom: 20,
    }, textDontHaveAnAccount: {
        fontSize: 15, fontWeight: '400', color: 'black', textAlign: 'center', paddingHorizontal: 5,
    }, buttonSignUp: {
        backgroundColor: 'transparent',
    }, textButtonSignUp: {
        fontSize: 15, fontWeight: '500', color: '#F8706E', textAlign: 'center',
    }, modalContainer: {
        flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', alignItems: 'center', justifyContent: 'center',
    }, modalDetail: {
        width: '80%',
        height: '30%',
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    }, modalTitle: {
        fontSize: 20, fontWeight: 'bold', color: 'black', textAlign: 'center', paddingVertical: 10,
    }, modalSubTitle: {
        fontSize: 15, fontWeight: '500', color: 'black', textAlign: 'center', paddingVertical: 5,
    }, modalButton: {
        backgroundColor: '#F8706E',
    }, modalTextButton: {
        fontSize: 15,
        fontWeight: '500',
        color: 'white',
        textAlign: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
    }, formSignup: {
        height: '80%',
        marginTop: -15,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    }, checkbox: {
        flexDirection: 'row', width: '90%', marginVertical: 10,
    }, checkboxIcon: {
        fontSize: 20, fontWeight: 'bold', color: 'red', textAlign: 'center', marginRight: 10,
    }, buttonTermsAndConditions: {
        fontSize: 20, fontWeight: 'bold', backgroundColor: 'transparent',
    }, textTermsAndConditions: {
        fontSize: 15, fontWeight: '500', color: '#F8706E', textAlign: 'left', paddingHorizontal: 5,
    }, error: {
        fontSize: 15, fontWeight: '500', color: 'red', textAlign: 'center',
    }, textModal: {
        fontSize: 20, fontWeight: 'bold', color: 'black', textAlign: 'center',
    }, buttonCloseModal: {
        backgroundColor: '#F8706E', paddingVertical: 10, borderRadius: 5, width: '30%', marginTop: 20,
    }, textButtonCloseModal: {
        fontSize: 20, fontWeight: '500', color: 'white', textAlign: 'center',
    }, pickerGenderAndroid: {
        width: '90%',
        backgroundColor: '#F3F4F6',
        borderRadius: 5,
        height: 40,
        justifyContent: 'center',
        paddingVertical: 10,
    }, pickerGenderIOS: {
        width: '100%', backgroundColor: '#F3F4F6', borderRadius: 5,
    }, homePageContainer: {
        flex: 1, backgroundColor: 'transparent', marginTop: 50, width: '100%',
    }, homePageFullContainer: {
        flex: 1, backgroundColor: 'white', marginTop: 50, width: '100%', paddingLeft: 20,
    }, homePageTitle: {
        fontSize: 20, fontWeight: 'bold', color: 'black', textAlign: 'center', paddingVertical: 10,
    }, modalPickerContainer: {
        flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', alignItems: 'center', justifyContent: 'center',
    }, inputDOB: {
        fontSize: 17,
        height: 40,
        borderRadius: 5,
        fontWeight: '400',
        color: 'black',
        backgroundColor: '#F3F4F6',
        width: '90%',
        paddingHorizontal: 10,
        paddingVertical: 8,
    }, iconInTextInput: {
        paddingVertical: 8, borderWidth: 1,
    }, searchHome: {
        fontSize: 21,
        fontWeight: '400',
        color: 'gray',
    }, searchContainer: {
        borderWidth: 1,
        flexDirection: 'row',
        width: '95%',
        backgroundColor: '#FFFFFF',
        height: 60,
        borderRadius: 5,
        alignItems: 'center',
        marginVertical: 20,
        paddingHorizontal: 20,
        borderColor: 'gray',
    },
    catItem: {
        borderRadius: 5,
        alignItems: 'center',
        borderWidth: 1,
        paddingVertical: 7,
        paddingHorizontal: 10,
        marginRight: 5,
        marginBottom: 5,
    },
    catList: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 10,
    }, catText: {
        fontSize: 15,
        fontWeight: '400',
        color: 'black',
        textAlign: 'center',
    }, title: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#000',
        paddingVertical: 10,
    }, topComponent: {flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'},

});
export default styles;
