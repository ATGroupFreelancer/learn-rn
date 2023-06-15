import {StyleSheet, View} from 'react-native';
import SignInForm from './src/SignInForm';
import {useState} from "react";
import SignUpForm from "./src/SignUpForm";

export default function App() {
  const [showLogin, setShowLogin] = useState(true);

  const toggleComponent = () => {
    setShowLogin(!showLogin);
  }

  return (
      <View style={styles.container}>
        {!showLogin ? (<SignUpForm toggleComponent={toggleComponent}/>) : (
            <SignInForm toggleComponent={toggleComponent}/>)}
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

