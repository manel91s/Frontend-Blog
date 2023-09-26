import { useContext } from 'react';
import PostsProvider from '../context/PostsProvider';

const usePosts = () => {
    return useContext(PostsProvider);
}

export default usePosts;