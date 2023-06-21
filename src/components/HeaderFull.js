import {Image, StyleSheet, Text, View} from "react-native";
import {FontAwesome5} from "@expo/vector-icons";

const HeaderFull = ({userInfo}) => {

    return (
        <View>
            <View style={styles.headerHomePage}>
                <View style={styles.headerTitle}>
                    <Image style={styles.imageAvatar} source={userInfo.avatar}/>
                    <View style={styles.headerWelcome}>
                        <Text style={styles.textTitle}>Welcome back,</Text>
                        <Text style={styles.textTitle}>{userInfo.name}</Text>
                    </View>
                </View>
                <View style={styles.iconCalendar}>
                    <FontAwesome5 name="calendar" size={24}/>
                </View>
            </View>
        </View>
    )
}

export default HeaderFull

const styles = StyleSheet.create({
    headerHomePage: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'transparent',
        width: '100%',
    },
    imageAvatar: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    iconCalendar: {
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'gray',
        height: 50,
        borderRadius: 50,
        width: 50,
        borderWidth: 1,
        marginRight: 20,
    },
    headerTitle: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: '80%',
    },
    textTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'black',
        width: '100%',
        textAlign: 'left',
    },
    headerWelcome: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '100%',
        paddingHorizontal: 10,
    }
});
