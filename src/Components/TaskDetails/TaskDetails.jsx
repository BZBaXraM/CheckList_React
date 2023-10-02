import React from 'react';
import {useParams} from 'react-router-dom';

const TaskDetails = ({tasks}) => {
    const {taskId} = useParams();
    const task = tasks.find(task => task.id === parseInt(taskId));

    if (!task) {
        return <div>Task not found</div>;
    }

    return (
        <div>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
        </div>
    );
};

export default TaskDetails;
