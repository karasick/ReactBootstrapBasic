import React from 'react';
import CommentContent from "./CommentContent";

const CommentItem = ({comment, remove}) => {
    return (
        <div className={"container post-item mt-3 border border-2 border-primary rounded "}>
            <div className="row align-items-center my-2">
                <div className="col col-10">
                    <CommentContent comment={comment}/>
                </div>
                <div className="col post-button col-2">
                    <button className={"btn btn-outline-danger float-end  m-2"}
                            onClick={() => remove(comment)}>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default CommentItem;