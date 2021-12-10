import React, {useEffect, useRef, useState} from "react";
import PostList from "../../components/Posts/PostList";
import PostForm from "../../components/Posts/PostForm";
import PostFilters from "../../components/Posts/PostFilters";
import CustomModal from "../../components/UI/Modal/CustomModal";
import {usePosts} from "../../hooks/usePosts";
import PostService from "../../api/PostService";
import {useFetching} from "../../hooks/useFetching";
import BootstrapButton from "../../components/UI/Button/BootstrapButton";
import {getPageCount} from "../../utils/pages";
import {useEllipsisPagination} from "../../hooks/usePagination";
import EllipsisPagination from "../../components/UI/Pagination/EllipsisPagination";
import InlineLoader from "../../components/UI/Loader/InlineLoader";
import {useObserver} from "../../hooks/useObserver";
import CustomSelect from "../../components/UI/Select/CustomSelect";

function Posts() {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({selectedSort: '', searchQuery: ''})
    const [modalOpen, setModalOpen] = useState(false);
    const sortedAndSearchedPosts = usePosts(posts, filter.selectedSort, filter.searchQuery)
    const [totalPages, setTotalPages] = useState(0)
    const [limitPosts, setLimitPosts] = useState(10)
    const [pagePosts, setPagePosts] = useState(1)
    const pagesArray = useEllipsisPagination(totalPages, pagePosts)
    const lastElement = useRef()

    const [fetchPosts, isPostsLoading, fetchPostsError] = useFetching(async (limit, page) => {
        const response = await PostService.getLimit(limit, page)
        setPosts([...posts, ...response.data])
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limitPosts))
    })

    const [fetchPostsAndReplace, isPostsAndReplaceLoading, fetchPostsAndReplaceError] = useFetching(async (limit, page) => {
        const response = await PostService.getLimit(limit, page)
        setPosts(response.data)
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limitPosts))
    })

    useObserver(lastElement, (pagePosts < totalPages), isPostsLoading, () => {
        setPagePosts(pagePosts + 1)
    })

    useEffect(async () => {
        fetchPosts(limitPosts, pagePosts)
    }, [pagePosts, limitPosts])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModalOpen(false);
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const changePage = (page) => {
        setPagePosts(page)
        fetchPostsAndReplace(limitPosts, page)
    }

    return (
        <div className={"container"}>
            <div className={"container mt-3 text-center"}>
                <BootstrapButton onClick={() => setModalOpen(true)} className={"btn-primary"}>Create new post</BootstrapButton>
            </div>
            <CustomModal title={"Create new post"} visibleState={modalOpen} hideHandler={() => setModalOpen(false)}>
                <PostForm create={createPost}/>
            </CustomModal>
            <hr/>
            <PostFilters filter={filter} setFilter={setFilter}/>
            <div className="container">
                <CustomSelect
                    value={limitPosts}
                    onChange={value => setLimitPosts(value)}
                    defaultValue={"Posts limit"}
                    options={[
                        {value: 5, name: "5"},
                        {value: 10, name: "10"},
                        {value: 25, name: "25"},
                        {value: -1, name: "All"},
                    ]}
                />
            </div>
            {fetchPostsError &&
            <div className="alert alert-danger mt-3" role="alert">
                {fetchPostsError}
            </div>
            }
            {isPostsLoading && <InlineLoader/>}
            <PostList remove={removePost} title={"JS Posts"} posts={sortedAndSearchedPosts}/>
            <div ref={lastElement} style={{height: 20}}></div>
            <EllipsisPagination pagesArray={pagesArray} activePage={pagePosts} pageHandler={changePage}/>
        </div>
    );
}

export default Posts;
