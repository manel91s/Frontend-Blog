import { useContext } from 'react';
import PostProvider from '../context/PostProvider';

const usePost = () => {
    return useContext(PostProvider);
}

export default usePost;