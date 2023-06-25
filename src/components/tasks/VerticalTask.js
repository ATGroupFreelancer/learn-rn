import {Dimensions, StyleSheet, Text, View} from "react-native";
import Task from "./Task";

const VerticalTask = (props) => {
    const {title, data} = props;
    let numTasks = data.length - 1;
    return (
        <View style={styles.viewContainer}>
            <View style={styles.viewTaskTitle}>
                <Text style={styles.textTaskTitle}>{title}</Text>
                <Text style={styles.textNumTasks}>{numTasks}</Text>
            </View>
            {data.map((task, key) => {
                return (
                    <View style={styles.viewTask} key={key}>
                        <Task data={task}/>
                    </View>
                )
            })}
        </View>
    )
}
export default VerticalTask;

const styles = StyleSheet.create({
    viewContainer: {
        backgroundColor: '#FEF1F1',
        width: Dimensions.get('window').width * 0.76,
        flexDirection: 'column',
        alignItems: 'flex-start',
        paddingVertical: 8,
        marginRight: 16,
        borderRadius: 16,
        marginTop: 16,
    },
    textTaskTitle: {
        fontSize: 16,
        paddingVertical: 8,
        fontWeight: 'bold',
        color: '#0874C6',
    },
    viewTask: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        borderRadius: 16,
        marginVertical: 8,
        marginLeft: 16,
    },
    viewTaskTitle: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginLeft: 16,
    },
    textNumTasks: {
        fontSize: 16,
        fontWeight: '500',
        color: 'black',
        marginLeft: 8,
    }
});