import usePosts from "../../hooks/usePosts";
import { useEffect } from "react";
import axios from "axios";
import PreviewPost from "../../components/backoffice/PreviewPost";
import { getBearerConfigToken } from "../../Helpers/configs";
import useAuth from "../../hooks/useAuth";

const Posts = () => {
  
  const { posts, setPosts } = usePosts();

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

      getUserPosts();

  }, [])

  return (
    <>
      <h1 className="text-4xl font-black">Posts</h1>

      <div className="bg-white shadow mt-10 rounded-lg">
        {
          posts.length ? (
            posts.map((post) => <PreviewPost key={post.id} post={post} />)
          ) : 'No hay posts'
        }
      </div>
    </>
  );
};

export default Posts;
