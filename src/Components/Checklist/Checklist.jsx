import React from 'react';
import {useNavigate} from 'react-router-dom';
import ChecklistItem from './ChecklisItem/ChecklistItem';

const Checklist = ({tasks, onDelete, onEdit}) => {
    const navigate = useNavigate();

    const handleEdit = (taskId) => {
        navigate(`/${taskId}/edit`);
    };

    return (
        <ul>
            {tasks.map(taskData => (
                <ChecklistItem key={taskData.id} taskData={taskData} onDelete={onDelete}
                               onEdit={() => handleEdit(taskData.id)}/>
            ))}
        </ul>
    );
};
export default Checklist;
