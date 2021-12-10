import React, {useState} from "react";
import BootstrapInput from "../UI/Input/BootstrapInput";
import BootstrapButton from "../UI/Button/BootstrapButton";

const PostForm = ({create}) => {

    const [post, setPost] = useState({title: '', content: ''})

    const addNewPost = (e) => {
        e.preventDefault();

        const newPost = {
            ...post,
            id: Date.now(),
        }
        console.log(newPost)

        create(newPost)

        setPost({title: '', content: ''})
    }

    return (
        <form className={"container mt-3"}>
            <BootstrapInput type={"text"} placeholder={"Title"}
                            value={post.title} onChange={e => setPost({...post, title: e.target.value})}/>
            <BootstrapInput type={"text"} placeholder={"Content"}
                            value={post.content} onChange={e => setPost({...post, content: e.target.value})}/>
            <BootstrapButton type={"submit"} onClick={addNewPost} className={"btn-primary"}>Add Post</BootstrapButton>
        </form>
    );
};

export default PostForm;