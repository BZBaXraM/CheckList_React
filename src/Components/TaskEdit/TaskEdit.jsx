import React from 'react';
import {useParams} from 'react-router-dom';

const TaskEdit = ({tasks, onEdit}) => {
    const {taskId} = useParams();
    const task = tasks.find(task => task.id === taskId);

    if (!task) {
        return <div>Task not found</div>;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const editedTask = {
            id: task.id,
            title: formData.get('title'),
            description: formData.get('description'),
            completed: task.completed
        };
        onEdit(editedTask);
    };

    return (
        <div>
            <h2>Edit Task</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" defaultValue={task.title} required/>
                <input type="text" name="description" defaultValue={task.description} required/>
                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default TaskEdit;