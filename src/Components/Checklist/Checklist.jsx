import React from 'react';
import ChecklistItem from './ChecklisItem/ChecklistItem';

const Checklist = ({tasks, onDelete}) => {
    return (
        <ul>
            {tasks.map(taskData => (
                <ChecklistItem key={taskData.id} taskData={taskData} onDelete={onDelete}/>
            ))}
        </ul>
    );
};
export default Checklist;
