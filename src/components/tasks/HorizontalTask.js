import {FlatList, View} from "react-native";
import {faker} from "@faker-js/faker";
import VerticalTask from "./VerticalTask";

const HorizontalTask = (props) => {
    const {data} = props;

    const process = [
        {id: 1, name: 'TO DO'},
        {id: 2, name: 'PROGRESS'},
        {id: 3, name: 'FEEDBACK'},
        {id: 4, name: 'DONE'},
    ];

    const tasks = [];

    for (let i = 0; i < 5; i++) {
        let numUsers = data.length - 1;
        const str = faker.lorem.words();
        const task = {
            task_id: i + 1,
            title: str.charAt(0).toUpperCase() + str.slice(1),
            description: faker.lorem.sentence(),
            status: faker.helpers.arrayElement(['TO DO', 'PROGRESS', 'FEEDBACK', 'DONE']),
            assigned_to: faker.number.int({min: 0, max: numUsers}),
            created_by: faker.number.int({min: 0, max: numUsers}),
            created_at: faker.date.recent(),
        };
        tasks.push(task);
    }
    const renderItem = ({item}) => {
        switch (item.name) {
            case 'TO DO':
                return (<View><VerticalTask title={item.name} data={tasks}> </VerticalTask></View>)
            case 'PROGRESS':
                return (<View><VerticalTask title={item.name} data={tasks}> </VerticalTask></View>)
            case 'FEEDBACK':
                return (<View><VerticalTask title={item.name} data={tasks}> </VerticalTask></View>)
            case 'DONE':
                return (<View><VerticalTask title={item.name} data={tasks}> </VerticalTask></View>)
        }
    }

    return (
        <FlatList data={process}
                  renderItem={renderItem}
                  keyExtractor={item => item.id}
                  horizontal={true}
        />
    )
}
export default HorizontalTask;