import {useMemo} from "react";

export const useSortedPosts = (posts, sort) => {
    const sortedPosts = useMemo(() => {
        if(sort) {
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return posts;
    }, [sort, posts])

    return sortedPosts;
}

export const usePosts = (posts, sort, query) => {
    const sortedPosts = useSortedPosts(posts, sort);
    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
    }, [query, sortedPosts])

    return sortedAndSearchedPosts;
}

export const useDepartments =(posts,sort,query)=>{
    const sortedPosts = useSortedPosts(posts,sort);
    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.departmentName.toLowerCase().includes(query.toLowerCase()))
    }, [query, sortedPosts])
    return sortedAndSearchedPosts;
}

export const useProfessor = (posts,sort,query)=>{
    const sortedPosts = useSortedPosts(posts,sort)
    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post =>
            (post.professorSecondName).toLowerCase().includes(query.toLowerCase()))
    }, [query, sortedPosts])
    return sortedAndSearchedPosts;
}