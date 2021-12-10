import React from 'react';
// import classes from "./CustomInput.module.css";

const BootstrapInput = ({name, type = "text", label, placeholder = "", description, ...props}) => {
    return (
        <div className="my-3">
            {label ? <label htmlFor={`input-${name}`} className="form-label">{label}</label> : ''}
            <input id={`input-${name}`}
                   aria-describedby={`${name}-help`}
                   type={type}
                   className="form-control"
                   placeholder={placeholder}
                   {...props}/>
            {description ? <div id={`${name}-help`} className="form-text">{description}</div> : ''}
        </div>
    );
};

export default BootstrapInput;