import {TextInput, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";

const Search = (props) => {
    const {placeholder, styleSearch, searchContainer, sizeButton} = props;
    return (
        <View style={searchContainer}>
            <Ionicons name="search-outline" size={sizeButton}/>
            <TextInput style={styleSearch} placeholder={placeholder}></TextInput>
        </View>
    )
}
export default Search;
