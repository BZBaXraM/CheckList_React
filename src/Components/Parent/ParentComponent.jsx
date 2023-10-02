import React, {useState} from 'react';
import Form from '../Form/Form';

const ParentComponent = () => {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        setTasks([...tasks, task]);
    };

    return (
        <div>
            <Form onSubmit={addTask}/>
        </div>
    );
};

export default ParentComponent;