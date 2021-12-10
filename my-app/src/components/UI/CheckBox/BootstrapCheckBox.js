import React from 'react';

const BootstrapCheckBox = () => {
    return (
        <div className="my-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
        </div>
    );
};

export default BootstrapCheckBox;