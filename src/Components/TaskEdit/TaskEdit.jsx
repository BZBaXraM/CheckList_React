import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

const TaskEdit = ({tasks, onEdit}) => {
    const {taskId} = useParams();
    const [editedTask, setEditedTask] = useState(null);

    useEffect(() => {
        const taskToEdit = tasks.find(task => task.id === parseInt(taskId));
        setEditedTask(taskToEdit);
    }, [tasks, taskId]);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Редактируйте editedTask и вызывайте функцию onEdit
        if (editedTask) {
            onEdit(editedTask);
        }
    };

    if (!editedTask) {
        return <div>Task not found</div>;
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <label>Title:</label>
            <input
                type="text"
                value={editedTask.title}
                onChange={(e) => setEditedTask({...editedTask, title: e.target.value})}
            />
            <label>Description:</label>
            <textarea
                value={editedTask.description}
                onChange={(e) => setEditedTask({...editedTask, description: e.target.value})}
            />
            <button type="submit">Save</button>
        </form>
    );
};

export default TaskEdit;