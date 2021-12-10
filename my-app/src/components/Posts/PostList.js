import React from 'react';
import PostItem from "./PostItem";
import PostNotFound from "./PostNotFound";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PostList = ({posts, title, remove}) => {

    if(posts.length === 0) {
        return (
            <PostNotFound/>
        );
    }

    return (
        <div className="container post-list mt-3">
            <h1 className={"text-center"}>{title}</h1>
            <TransitionGroup className={"post-items"}>
                {posts.map((post) =>
                    <CSSTransition classNames={"post"} key={post.id} timeout={500}>
                        <PostItem remove={remove} post={post}/>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
};

export default PostList;