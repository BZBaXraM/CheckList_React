import { forwardRef } from 'react';
import './InputTypeText.module.scss';

const InputTypeText = forwardRef(function InputTypeText({name}, ref) {
    return (
        <input type="text" name={name} ref={ref}/>
    )
})

export default InputTypeText;