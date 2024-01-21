import { useState, createContext, useEffect } from "react";
import axios from "axios";
import { getBearerConfigToken } from "../Helpers/configs";
import useAuth from "../hooks/useAuth";

const PostsContext = createContext();

const PostsProvider = ({ children }) => {

  const [posts, setPosts] = useState([]);
  
  return (
    <PostsContext.Provider
      value={{
        posts,
        setPosts
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};

export { PostsProvider };

export default PostsContext; 