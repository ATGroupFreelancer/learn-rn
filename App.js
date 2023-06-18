import {StyleSheet, View} from 'react-native';
import SignInScreen from './src/screens/SignInScreen';
import {useState} from "react";
import SignUpScreen from "./src/screens/SignUpScreen";
import HomeScreen from "./src/screens/HomeScreen";

export default function App() {
    const [showLogin, setShowLogin] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const onSignup = () => {
        setShowLogin(!showLogin);
    }

    const handleLogin = (loginSuccessful) => {
        setIsLoggedIn(loginSuccessful);
    };

    const handleSignup = (signupSuccessful) => {
        setIsLoggedIn(signupSuccessful);
    };

    return isLoggedIn ? (<HomeScreen/>) : (
        <View style={styles.container}>
            {!showLogin ? (<SignUpScreen onLogin={handleSignup} onSignup={onSignup}/>) : (
                <SignInScreen onLogin={handleLogin} onSignup={onSignup}/>)}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

