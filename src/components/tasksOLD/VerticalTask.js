// import {Dimensions, StyleSheet, Text, TouchableOpacity, View} from "react-native";
// import Task from "./Task";
// import {AntDesign} from "@expo/vector-icons";
//
// const VerticalTask = (props) => {
//     const {title, data} = props;
//
//     let num = 0;
//     for (let i = 0; i < data.length; i++) {
//         if (data[i].status === title) {
//             num++;
//         }
//     }
//     const numTasks = num;
//     return (
//         <View style={styles.viewContainer}>
//             <View style={styles.viewTaskTitle}>
//                 <Text style={styles.textTaskTitle}>{title}</Text>
//                 <Text style={styles.textNumTasks}>{numTasks}</Text>
//             </View>
//             {data.map((task, key) => {
//                 return (
//                     <View style={styles.viewTask} key={key}>
//                         <Task data={task}/>
//                     </View>
//                 )
//             })}
//             <TouchableOpacity style={styles.viewAddTask}>
//                 <AntDesign style={styles.iconPlus} name="plus" size={24} color="black"/>
//                 <Text style={styles.textAddTask}> Add a card</Text>
//             </TouchableOpacity>
//         </View>
//     )
// }
// export default VerticalTask;
//
// const styles = StyleSheet.create({
//     viewContainer: {
//         backgroundColor: '#FEF1F1',
//         width: Dimensions.get('window').width * 0.76,
//         flexDirection: 'column',
//         alignItems: 'flex-start',
//         paddingVertical: 8,
//         marginRight: 16,
//         borderRadius: 16,
//         marginTop: 16,
//     },
//     textTaskTitle: {
//         fontSize: 16,
//         paddingVertical: 8,
//         fontWeight: 'bold',
//         color: '#0874C6',
//     },
//     viewTask: {
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//         width: '90%',
//         borderRadius: 16,
//         marginVertical: 8,
//         marginLeft: 16,
//     },
//     viewTaskTitle: {
//         flexDirection: 'row',
//         justifyContent: 'flex-start',
//         alignItems: 'center',
//         marginLeft: 16,
//     },
//     textNumTasks: {
//         fontSize: 16,
//         fontWeight: '500',
//         color: 'black',
//         marginLeft: 8,
//     },
//     viewAddTask: {
//         flexDirection: 'row',
//         backgroundColor: '#FEF1F1',
//         width: '90%',
//         height: 40,
//         borderRadius: 16,
//         marginVertical: 8,
//         marginLeft: 16,
//         paddingHorizontal: 8,
//         justifyContent: 'flex-start',
//         alignItems: 'center',
//     },
//     textAddTask: {
//         fontSize: 16,
//         fontWeight: '700',
//         color: '#F87B79',
//     },
//     iconPlus: {
//         color: '#F87B79',
//     }
// });
