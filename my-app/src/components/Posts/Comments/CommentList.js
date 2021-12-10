import React from 'react';
import NoComments from "./NoComments";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import CommentItem from "./CommentItem";

const CommentList = ({comments, remove}) => {

    if(comments.length === 0) {
        return (
            <NoComments/>
        );
    }

    return (
        <div className="container post-list mt-3">
            <h4 className={""}>Comments:</h4>
            <TransitionGroup className={"post-items"}>
                {comments.map((comment) =>
                    <CSSTransition classNames={"post"} key={comment.id} timeout={500}>
                        <CommentItem remove={remove} comment={comment}/>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
};

export default CommentList;