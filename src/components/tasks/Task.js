import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";

const Task = (props) => {
    const {data, navigation} = props;

    const colorPriorityBackground = [{
        Low: '#F0F8FE',
        Medium: '#FEF9EB',
        High: '#EEFDF3',
        Critical: '#FEF0F1',
    }]

    const colorPriorityTitle = [{
        Low: '#39A4F6',
        Medium: '#CDBE8A',
        High: '#248745',
        Critical: '#F65C61',
    }]

    const getPriorityColorBackground = (priority) => {
        switch (priority) {
            case 'Low':
                return colorPriorityBackground[0].Low;
            case 'Medium':
                return colorPriorityBackground[0].Medium;
            case 'High':
                return colorPriorityBackground[0].High;
            case 'Critical':
                return colorPriorityBackground[0].Critical;
        }
    }

    const getPriorityColorTitle = (priority) => {
        switch (priority) {
            case 'Low':
                return colorPriorityTitle[0].Low;
            case 'Medium':
                return colorPriorityTitle[0].Medium;
            case 'High':
                return colorPriorityTitle[0].High;
            case 'Critical':
                return colorPriorityTitle[0].Critical;
        }
    }

    return (
        <TouchableOpacity style={styles.taskContainer} onPress={
            () => navigation.navigate('Dashboard')
        }>
            <View style={styles.textTicket}>
                <Text style={styles.textTicketTitle}>{data.title}</Text>
            </View>
            <TouchableOpacity
                style={[styles.textPriority, {backgroundColor: getPriorityColorBackground(data.priority)}]}>
                <Text
                    style={[styles.textPriorityTitle, {color: getPriorityColorTitle(data.priority)}]}>{data.priority}</Text>
            </TouchableOpacity>
            <View style={styles.viewDescription}>
                <View style={styles.viewDescription}>
                    <Ionicons name="attach" size={24} color="black"/>
                    <Text>{data.attachment}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}
export default Task;

const styles = StyleSheet.create({
    taskContainer: {
        backgroundColor: '#fff',
        width: '100%',
        height: 132,
        borderRadius: 16,
        paddingVertical: 8,
        paddingHorizontal: 16,
    }, textTicketTitle: {
        fontSize: 16,
        fontWeight: '500',
        color: 'black',
    },
    textPriority: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '28%',
        height: 24,
        borderRadius: 16,
        backgroundColor: '#FEF9EB',
        marginVertical: 8,
    }, textPriorityTitle: {
        fontSize: 14,
        fontWeight: '500',
        color: 'black',
    },
    textTicket: {
        flexDirection: 'row',
        paddingVertical: 8,
    },
    viewDescription: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        marginVertical: 8,
    }
});
