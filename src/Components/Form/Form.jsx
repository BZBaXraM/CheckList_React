import React from 'react';
import Button from "../Button/Button";

const Form = ({onSubmit}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const task = {
            id: Date.now(),
            title: formData.get('title'),
            description: formData.get('description'),
            completed: false
        };
        onSubmit(task);
        e.target.reset();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" placeholder="Task Title" required/>
            <input type="text" name="description" placeholder="Description" required/>
            <br/>
            <br/>
            <Button type="submit">Add</Button>
        </form>
    );
};

export default Form;