import React from 'react';
import {Link} from 'react-router-dom';

const ChecklistItem = ({taskData, onDelete}) => {
    return (
        <li>
            <Link to={`/${taskData.id}`}>{taskData.title}</Link>
            <button onClick={() => onDelete(taskData.id)}>Delete</button>
        </li>
    );
};


export default ChecklistItem;
