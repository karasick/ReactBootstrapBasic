import React from 'react';
import {Modal} from "react-bootstrap";

const CustomModal = ({title, children, footer, visibleState, hideHandler}) => {

    return (
        <Modal show={visibleState} onHide={hideHandler} centered>
            <Modal.Header>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{children}</Modal.Body>
            {/*<Modal.Footer>*/}
            {/*    <button onClick={hideHandler}>Cancel</button>*/}
            {/*    <button>Save</button>*/}
            {/*</Modal.Footer>*/}
        </Modal>
    );
};

export default CustomModal;