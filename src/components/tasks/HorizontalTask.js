import {Dimensions, FlatList, View} from "react-native";
import {faker} from "@faker-js/faker";
import VerticalTask from "./VerticalTask";

const HorizontalTask = (props) => {
    const {data} = props;


    const process = [
        {id: 1, name: 'TO DO'},
        {id: 2, name: 'IN PROGRESS'},
        {id: 3, name: 'CONFIRM'},
        {id: 4, name: 'DONE'},
    ];

    const tasks = [];

    for (let i = 0; i < 10; i++) {
        let numUsers = data.length - 1;
        const str = faker.lorem.words();
        const task = {
            task_id: i + 1,
            title: str.charAt(0).toUpperCase() + str.slice(1),
            description: faker.lorem.sentence(),
            status: faker.helpers.arrayElement(['TO DO', 'IN PROGRESS', 'CONFIRM', 'DONE']),
            priority: faker.helpers.arrayElement(['Low', 'Medium', 'High', 'Critical']),
            attachment: faker.number.int({min: 0, max: 10}),
            assigned_to: faker.number.int({min: 0, max: numUsers}),
            created_by: faker.number.int({min: 0, max: numUsers}),
            created_at: faker.date.recent(),
        };
        tasks.push(task);
    }
    const renderItem = ({item}) => {
        const taskInfo = [];
        switch (item.name) {
            case 'TO DO':
                for (let i = 0; i < tasks.length; i++) {
                    if (tasks[i].status === 'TO DO') {
                        taskInfo.push(tasks[i]);
                    }
                }
                return (<View><VerticalTask title={item.name} data={taskInfo}> </VerticalTask></View>)
            case 'IN PROGRESS':
                for (let i = 0; i < tasks.length; i++) {
                    if (tasks[i].status === 'IN PROGRESS') {
                        taskInfo.push(tasks[i]);
                    }
                }
                return (<View><VerticalTask title={item.name} data={taskInfo}> </VerticalTask></View>)
            case 'CONFIRM':
                for (let i = 0; i < tasks.length; i++) {
                    if (tasks[i].status === 'CONFIRM') {
                        taskInfo.push(tasks[i]);
                    }
                }
                return (<View><VerticalTask title={item.name} data={taskInfo}> </VerticalTask></View>)
            case 'DONE':
                for (let i = 0; i < tasks.length; i++) {
                    if (tasks[i].status === 'DONE') {
                        taskInfo.push(tasks[i]);
                    }
                }
                return (<View><VerticalTask title={item.name} data={taskInfo}> </VerticalTask></View>)
        }

    }

    return (
        <FlatList data={process}
                  renderItem={renderItem}
                  keyExtractor={item => item.id}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  snapToOffsets={[...Array(data.length)].map((x, i) => (i * Dimensions.get('window').width * 0.76) + 10)}
        />
    )
}
export default HorizontalTask;
