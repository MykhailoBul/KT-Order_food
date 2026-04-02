const Button = ({ textOnly, onClick, children }) => {
    const classes = textOnly ? 'text-button' : 'button';
    return (
        <button className={classes} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;