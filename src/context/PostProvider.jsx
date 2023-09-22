import { useState, createContext } from "react";

const PostContext = createContext();

const PostProvider = ({ children }) => {

    const [post, setPost] = useState({
        title: '',
        body: '',
        tag: '',
        avatar:'',
        user: '',
      });

  return (
    <PostContext.Provider
      value={{
        post,
        setPost
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export { PostProvider };

export default PostContext;