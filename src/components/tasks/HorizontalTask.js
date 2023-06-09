import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React, {useState} from "react";
import VerticalTask from "./VerticalTask";
import {useDispatch, useSelector} from 'react-redux';
import {addCardItem} from "../../redux/actions";
import {faker} from "@faker-js/faker";

const HorizontalTask = (props) => {
    const {tabId, navigation, data} = props;
    const dispatch = useDispatch();

    const category = [
        {id: 0, type: 'to_do', title: 'TO DO'},
        {id: 1, type: 'in_progress', title: 'IN PROGRESS'},
        {id: 2, type: 'confirm', title: 'CONFIRM'},
        {id: 3, type: 'done', title: 'DONE'},
    ];

    const tasks = [
        {
            task_id: 1,
            title: 'Task 1',
            description: 'Description 1',
            status: 'to_do',
            priority: 'Low',
            attachment: 0,
            assigned_to: 0,
            created_by: 0,
            created_at: '2021-09-30T08:00:00.000Z'
        },
        {
            task_id: 2,
            title: 'Task 2',
            description: 'Description 2',
            status: 'to_do',
            priority: 'Medium',
            attachment: 1,
            assigned_to: 1,
            created_by: 1,
            created_at: '2021-09-30T08:00:00.000Z'
        },
        {
            task_id: 3,
            title: 'Task 3',
            description: 'Description 3',
            status: 'to_do',
            priority: 'High',
            attachment: 2,
            assigned_to: 2,
            created_by: 2,
            created_at: '2021-09-30T08:00:00.000Z'
        },
        {
            task_id: 4,
            title: 'Task 4',
            description: 'Description 4',
            status: 'to_do',
            priority: 'Critical',
            attachment: 3,
            assigned_to: 3,
            created_by: 3,
            created_at: '2021-09-30T08:00:00.000Z'
        },
        {
            task_id: 5,
            title: 'Task 5',
            description: 'Description 5',
            status: 'in_progress',
            priority: 'Low',
            attachment: 4,
            assigned_to: 4,
            created_by: 4,
            created_at: '2021-09-30T08:00:00.000Z'
        },
        {
            task_id: 6,
            title: 'Task 6',
            description: 'Description 6',
            status: 'in_progress',
            priority: 'Medium',
            attachment: 5,
            assigned_to: 5,
            created_by: 5,
            created_at: '2021-09-30T08:00:00.000Z'
        },
        {
            task_id: 7,
            title: 'Task 7',
            description: 'Description 7',
            status: 'in_progress',
            priority: 'High',
            attachment: 6,
            assigned_to: 6,
            created_by: 6,
            created_at: '2021-09-30T08:00:00.000Z'
        },
        {
            task_id: 8,
            title: 'Task 8',
            description: 'Description 8',
            status: 'in_progress',
            priority: 'Critical',
            attachment: 7,
            assigned_to: 7,
            created_by: 7,
            created_at: '2021-09-30T08:00:00.000Z'
        },
        {
            task_id: 9,
            title: 'Task 9',
            description: 'Description 9',
            status: 'confirm',
            priority: 'Low',
            attachment: 8,
            assigned_to: 8,
            created_by: 8,
            created_at: '2021-09-30T08:00:00.000Z'
        },
        {
            task_id: 10,
            title: 'Task 10',
            description: 'Description 10',
            status: 'done',
            priority: 'Medium',
            attachment: 9,
            assigned_to: 9,
            created_by: 9,
            created_at: '2021-09-30T08:00:00.000Z'
        },
    ];

    const [taskInfo, setTaskInfo] = useState(data);
    const [titleInfo, setTitleInfo] = useState({id: 0, type: 'to_do', title: 'TO DO'});


    const allCard = useSelector(state => state.card.cardItems);
    if (allCard.length === 0) {
        data.map(item => dispatch(addCardItem(item)));
    }
    const handleCategory = (item) => {
        const task = data.filter(task => task.status === item.type);
        setTaskInfo(task);
        setTitleInfo(item);
    }

    const renderItem = ({item}) => {
        return (
            <TouchableOpacity
                style={[styles.buttonCategory, item.type === titleInfo.type && {
                    borderColor: '#FEF1F1', backgroundColor: '#FEF1F1'
                }]}
                onPress={() => {
                    handleCategory(item)
                }}>
                <Text style={styles.textCategory}>{item.title}</Text>
            </TouchableOpacity>)
    }

    return (
        <View>
            {tabId === 'Board' ?
                <FlatList data={category}
                          renderItem={renderItem}
                          keyExtractor={item => item.id}
                          horizontal={true}
                          showsHorizontalScrollIndicator={false}/>
                : null}
            {tabId === 'Board' ? <View style={styles.viewVerticalTask}>
                <VerticalTask tabId={tabId} navigation={navigation} titleInfo={titleInfo} data={taskInfo}/>
            </View> : null}
            {tabId === 'Dashboard' ?
                category.map(item =>
                    <VerticalTask tabId={tabId}
                                  navigation={navigation}
                                  titleInfo={item}
                                  data={data.filter(task => task.status === item.type)}/>)
                : null
            }
        </View>
    )
}
export default HorizontalTask;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    buttonCategory: {
        backgroundColor: 'white',
        height: 36,
        width: 120,
        marginRight: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderColor: '#0874C6',
        marginTop: 16,
    },
    viewCategory: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textCategory: {
        color: '#0874C6',
        fontWeight: '600',
        fontSize: 12,
    },
    viewVerticalTask: {
        flex: 1,
    }
});
