import React, {useReducer} from 'react';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import './App.css';
import Checklist from './Components/Checklist/Checklist';
import TaskDetails from './Components/TaskDetails/TaskDetails';
import TaskEdit from './Components/TaskEdit/TaskEdit';
import Form from './Components/Form/Form';


const updater = (state, action) => {
    switch (action.type) {
        case 'addTask':
            return [...state, action.payload];
        case 'deleteTask':
            return state.filter(task => task.id !== action.payload);
        case 'editTask':
            return state.map(task => (task.id === action.payload.id ? action.payload : task));
        default:
            throw new Error('Undefined action type');
    }
};

const App = () => {
    const [tasks, dispatchTasks] = useReducer(updater, []);

    const addTask = (task) => {
        dispatchTasks({type: 'addTask', payload: task});
    };

    const deleteTask = (taskId) => {
        dispatchTasks({type: 'deleteTask', payload: taskId});
    };

    const editTask = (editedTask) => {
        dispatchTasks({type: 'editTask', payload: editedTask});
    };

    return (
        <Router>
            <div className="App">
                <div className="left-panel">
                    <h1>Task List</h1>
                    <div className="filters">
                        <Link to="/">All </Link>
                        <Link to="/completed">Completed </Link>
                        <Link to="/uncompleted">Uncompleted</Link>
                    </div>
                    <Routes>
                        <Route
                            path="/"
                            element={<Checklist tasks={tasks} onDelete={deleteTask}/>}
                        />
                        <Route
                            path="/:taskId"
                            element={<TaskDetails tasks={tasks}/>}
                        />
                        <Route
                            path="/:taskId/edit"
                            element={<TaskEdit tasks={tasks} onEdit={editTask}/>}
                        />
                        <Route
                            path="/completed"
                            element={<Checklist tasks={tasks.filter(task => task.completed)} onDelete={deleteTask}/>}
                        />
                        <Route
                            path="/uncompleted"
                            element={<Checklist tasks={tasks.filter(task => !task.completed)} onDelete={deleteTask}/>}
                        />
                    </Routes>
                </div>
                <div className="right-panel">
                    <Form onSubmit={addTask}/>
                </div>
            </div>
        </Router>
    );
};

export default App;