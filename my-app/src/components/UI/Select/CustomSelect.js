import React from 'react';

const CustomSelect = ({options, defaultValue, value, onChange}) => {
    return (
        <div className="row">
            <div className="col col-4">
                <select className="form-select" value={value} onChange={e => onChange(e.target.value)}>
                    <option disabled value={"value1"}>{defaultValue}</option>
                    {options.map(option =>
                        <option key={option.value} value={option.value}>
                            {option.name}
                        </option>
                    )}
                </select>
            </div>
        </div>
    );
};

export default CustomSelect;