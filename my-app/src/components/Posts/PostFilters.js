import React from 'react';
import BootstrapInput from "../UI/Input/BootstrapInput";
import CustomSelect from "../UI/Select/CustomSelect";

const PostFilters = ({filter, setFilter}) => {
    return (
        <div className={"container"}>
            <BootstrapInput
                placeholder={"Search..."}
                value={filter.searchQuery}
                onChange={e => setFilter({...filter, searchQuery: e.target.value})}
            />
            <CustomSelect
                value={filter.selectedSort}
                onChange={selectedSort => setFilter({...filter, selectedSort: selectedSort})}
                defaultValue={"Sort by"}
                options={[
                    {value: 'title', name: "By title"},
                    {value: 'body', name: "By body"},
                ]}
            />
        </div>
    );
};

export default PostFilters;