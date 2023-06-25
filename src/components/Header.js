import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {useState} from "react";
import {Ionicons, MaterialIcons} from '@expo/vector-icons';
import {useSafeAreaInsets} from "react-native-safe-area-context";

const Header = (props) => {
    const {callback, title, data} = props;
    const [textChange, setTextChange] = useState('');
    const insets = useSafeAreaInsets()
    const handleTextChange = (text) => {
        setTextChange(text);
    }

    return (
        <View style={[styles.headerContainer, {paddingTop: insets.top}]}>
            <View style={styles.headerTop}>
                <TouchableOpacity style={styles.buttonHeaderTitle}>
                    <Text style={styles.textHeaderTitle}>{title}</Text>
                </TouchableOpacity>
                <View style={styles.buttonFilterSearch}>
                    <TouchableOpacity>
                        <MaterialIcons name="filter-alt" size={28} color="#F7706E"/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonHeaderShare}>
                        <MaterialIcons name="share" size={16} color="white"/>
                        <Text style={styles.textButtonShare}>Share</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.imageUserInProject}>
                {data !== undefined ? data.length <= 4 ? data.map((item, index) => {
                        return (
                            <TouchableOpacity key={index} style={styles.buttonImageUser}>
                                <Image style={styles.imageUser} source={{uri: item.avatar}}/>
                            </TouchableOpacity>
                        )
                    }) : data.map((item, index) => {
                        if (index < 4) {
                            return (
                                <TouchableOpacity key={index} style={styles.buttonImageUser}>
                                    <Image style={styles.imageUser} source={{uri: item.avatar}}/>
                                </TouchableOpacity>
                            )
                        }
                        if (index === data.length - 1) {
                            return (
                                <TouchableOpacity key={index} style={styles.buttonImageUserMore}>
                                    <Text style={styles.textNumberUser}>+{data.length - 4}</Text>
                                </TouchableOpacity>
                            )
                        }
                    })
                    : null
                }
            </View>
            <View style={styles.viewSearch}>
                <TextInput style={styles.textInputSearch} placeholder={"Search"} value={textChange}
                           onChangeText={
                               (text) => {
                                   handleTextChange(text);
                                   callback(text);
                               }
                           }>

                </TextInput>
                <Ionicons style={styles.buttonSearch} name="ios-search-outline" size={24} color="black"/>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingRight: 16,
        backgroundColor: '#fff',
        borderBottomColor: '#ddd',
        width: '100%',
    }, headerTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
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
        width: '90%',
        paddingVertical: 10,
    },
    headerButton: {
        borderRadius: 20,
        width: 100,
    }, buttonFilterSearch: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: 100,
    }, textHeaderTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        width: '100%',
    }, buttonHeaderTitle: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: 100,
    }, buttonHeaderShare: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F8706E',
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 8,
    },
    textButtonShare: {
        fontSize: 16,
        fontWeight: '500',
        color: 'white',
        marginLeft: 5,
    }, buttonSearch: {
        backgroundColor: '#F3F4F6',
        height: 36,
        paddingTop: 4,
    }, textInputSearch: {
        fontSize: 16,
        height: 36,
        fontWeight: '400',
        color: 'black',
        width: '90%',
        backgroundColor: '#F3F4F6',
        paddingHorizontal: 10,
    }, viewSearch: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: '#F3F4F6',
        borderRadius: 8,
        paddingHorizontal: 8,
        marginVertical: 4,
        paddingVertical: 4,
    },
    imageUserInProject: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        height: 50,
        marginVertical: 5,
    },
    imageUser: {
        width: 40,
        height: 40,
        borderRadius: 20,
    }, buttonImageUser: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: -5,
    },
    textNumberUser: {
        fontSize: 16,
        fontWeight: '500',
        color: 'black',
        marginLeft: 5,
    },
    buttonImageUserMore: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#BCC1CA',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: -10,
    }
});
