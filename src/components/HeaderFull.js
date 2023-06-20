import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";

const HeaderFull = (props) => {
    const {avatar} = props
    return (
        <View style={styles.headerHomePage}>
            <View style={styles.headerTop}>
                <Image style={styles.imageAvatar} source={avatar}/>
                <Text style={styles.dot}>...</Text>
            </View>
            <View style={styles.headerTitle}>
                <Text style={styles.textTitle}>Home</Text>
            </View>
            <View style={styles.headerBottom}>
                <TouchableOpacity style={styles.headerButtonSelected}>
                    <Text style={styles.textColorSelected}>All files</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.headerButton}>
                    <Text style={styles.textColor}>Members</Text>
                </TouchableOpacity>
                <Text style={styles.textOr}>|</Text>
                <TouchableOpacity style={styles.headerButton}>
                    <Text style={styles.textColor}>Settings</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default HeaderFull

const styles = StyleSheet.create({
    headerHomePage: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        borderBottomColor: '#ddd',
        width: '100%',
    },
    imageAvatar: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    dot: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        borderRadius: 50,
        height: 50,
    },
    headerTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        width: '100%',
        height: 50,
    },
    headerTitle: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingVertical: 10,
        marginTop: 20,
        width: '100%',
    },
    headerBottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingVertical: 10,
    },
    headerButton: {
        borderRadius: 20,
        width: 100,
    },
    textTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        width: '100%',
        textAlign: 'left',
    },
    textColor: {
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 17,
        fontWeight: '500',
        color: '#F8706E',
        borderRadius: 20,
        width: 100,
    },
    textOr: {
        fontSize: 20,
        fontWeight: '100',
        color: '#F8706E',
    },
    headerButtonSelected: {
        backgroundColor: '#F8706E',
        borderRadius: 30,
        width: 100,
    },
    textColorSelected: {
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 17,
        fontWeight: '500',
        color: 'white',
        borderRadius: 20,
        paddingVertical: 5,
        width: 100,
    },
});
