import React from 'react';

const CommentContent = ({comment}) => {
    return (
        <div className="post-content">
            <strong>{comment.id}. {comment.name} ({comment.email})</strong>
            <div>{comment.body}</div>
        </div>
    );
};

export default CommentContent;