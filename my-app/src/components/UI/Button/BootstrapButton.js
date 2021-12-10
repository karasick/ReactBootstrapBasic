import React from 'react';
// import classes from "./CustomButton.module.css";

const BootstrapButton = ({className, children, ...props}) => {
    return (
        <button className={`btn ${className}`} {...props}>
            {children}
        </button>
    );
};

export default BootstrapButton;