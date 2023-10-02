import './Button.module.scss';

function Button({clickHandler, children}) {
    return (
        <button className={'link-dark'} onClick={clickHandler}>{children}</button>
    )
}

export default Button;