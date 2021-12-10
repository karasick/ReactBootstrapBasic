import React from 'react';
import {Loader} from "semantic-ui-react";

const InlineLoader = () => {
    return (
        <div className={"mt-3"}>
            <Loader active inline={'centered'}>
                <h3>Loading</h3>
            </Loader>
        </div>
    );
};

export default InlineLoader;