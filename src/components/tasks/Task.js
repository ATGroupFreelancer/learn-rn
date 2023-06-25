import {StyleSheet, Text, View} from "react-native";

const Task = (props) => {
    const {data} = props;
    return (
        <View style={styles.taskContainer}>
            <View style={styles.textPriority}>
                <Text style={styles.textPriorityTitle}>{data.title}</Text>
            </View>
            <Text>Body Task</Text>
        </View>
    )
}
export default Task;

const styles = StyleSheet.create({
    taskContainer: {
        backgroundColor: '#fff',
        width: '100%',
        height: 120,
        borderRadius: 16,
        paddingVertical: 8,
        paddingHorizontal: 16,
    }, textTicketTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    },
    textPriority: {
        flexDirection: 'row',
    }, textPriorityTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    }


});