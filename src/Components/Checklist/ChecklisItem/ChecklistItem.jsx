import React from 'react';
import {Link} from 'react-router-dom';

const ChecklistItem = ({taskData, onDelete, onEdit}) => {
    return (
        <li>
            <Link to={`/${taskData.id}`}>{taskData.title}</Link>
            <button onClick={() => onDelete(taskData.id)}>Delete</button>
            <button onClick={() => onEdit(taskData.id)}>Edit</button>
        </li>
    );
};


export default ChecklistItem;
