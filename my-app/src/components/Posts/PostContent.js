import React from 'react';

const PostContent = ({post}) => {
    return (
        <div className="post-content">
            <strong>{post.id}. {post.title}</strong>
            <div>{post.body}</div>
        </div>
    );
};

export default PostContent;