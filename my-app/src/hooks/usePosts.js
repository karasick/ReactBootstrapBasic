import {useMemo} from "react";

export const useSortedPosts = (posts, sort) => {
    const sortedPosts = useMemo(() => {
        if(sort) {
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
        }

        return posts;
    }, [sort, posts]);

    return sortedPosts;
}

export const usePosts = (posts, sort, searchQuery) => {
    const sortedPosts = useSortedPosts(posts, sort)

    const sortedAndSearchedPosts = useMemo(() => {
        let lowerSearchQuery = searchQuery.toLowerCase()

        return sortedPosts.filter(post => post.title.toLowerCase().includes(lowerSearchQuery))
    }, [searchQuery, sortedPosts]);

    return sortedAndSearchedPosts;
}