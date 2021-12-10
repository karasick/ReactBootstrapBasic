import React from 'react';
import {useNavigate} from "react-router-dom";
import PostContent from "./PostContent";

const PostItem = ({post, remove}) => {
    const navigate = useNavigate()

    return (
        <div className={"container post-item mt-3 border border-2 border-primary rounded "}>
            <div className="row align-items-center my-2">
                <div className="col col-10">
                    <PostContent post={post}/>
                </div>
                <div className="col post-button col-2">
                    <button className={"btn btn-outline-primary float-end m-2"}
                            onClick={() => navigate(`/posts/${post.id}`)}>Open</button>
                    <button className={"btn btn-outline-danger float-end  m-2"}
                            onClick={() => remove(post)}>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default PostItem;