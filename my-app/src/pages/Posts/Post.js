import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../../hooks/useFetching";
import PostService from "../../api/PostService";
import {Loader} from "semantic-ui-react";
import PostContent from "../../components/Posts/PostContent";
import CommentList from "../../components/Posts/Comments/CommentList";
import InlineLoader from "../../components/UI/Loader/InlineLoader";

const Post = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [fetchPost, isPostLoading, isPostError] = useFetching(async (id) => {
        const post = await PostService.getOne(id)
        setPost(post)
        console.log(post)
    })
    const [comments, setComments] = useState([])
    const [fetchPostComments, isCommentsLoading, isCommentsError] = useFetching(async (id) => {
        const comments = await PostService.getPostComments(id)
        setComments(comments)
        console.log(comments)
    })

    useEffect(() => {
        fetchPost(params.id)
        fetchPostComments(params.id)
    }, [])

    return (
        <div className={"container"}>
            {isPostLoading
                ? <InlineLoader/>
                : <PostContent post={post}></PostContent>
            }
            {isCommentsLoading
                ? <InlineLoader/>
                : <CommentList comments={comments}></CommentList>
            }
        </div>
    );
};

export default Post;