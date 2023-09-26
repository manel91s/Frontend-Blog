import { useState, createContext, useEffect } from "react";
import axios from "axios";
import { getBearerConfigToken } from "../Helpers/configs";

const PostsContext = createContext();

const PostsProvider = ({ children }) => {

      const [posts, setPosts] = useState([]);

      useEffect(() => {
        
        const getUserPosts = async () => {

          try {
            const { data } = await axios.get(
              `${import.meta.env.VITE_BACKEND_URL}/api/posts/user`,
              getBearerConfigToken()
            );

            setPosts(data);
          } catch (error) {
            console.log(error);
          } 

        }
      
        return () => {
          getUserPosts();
        }
      }, [])
      

  return (
    <PostsContext.Provider
      value={{
        posts
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};

export { PostsProvider };

export default PostsContext; 