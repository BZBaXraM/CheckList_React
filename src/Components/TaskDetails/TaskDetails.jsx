import React from 'react';
import {Link, useParams} from 'react-router-dom';

const TaskDetails = ({tasks}) => {
    const {taskId} = useParams();
    const task = tasks.find(task => task.id === taskId);

    if (!task) {
        return <div>Task not found</div>;
    }

    return (
        <div>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <Link to={`/${task.id}/edit`}>Edit Task</Link>
        </div>
    );
};

export default TaskDetails;