import { useState, createContext, useEffect } from "react";
import axios from "axios";
import { getBearerConfigToken } from "../Helpers/configs";

const PostContext = createContext();

const PostProvider = ({ children }) => {
  const [post, setPost] = useState({
    title: "",
    body: "",
    tags: [],
    image: "",
    user: "",
  });

  const [alert, setAlert] = useState({});
  const [loading, setLoading] = useState(true);

  const getPost = async (id) => {

    try {
   
      const { data } = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/posts/${id}`,
        getBearerConfigToken()
      );
        
      setPost(data)
      
      setAlert({
        msg: data.msg,
        error: false,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    const { title, body, tags, image, user } = post;

    if ([title, body, tags].includes("")) {
      setAlert({
        msg: "Hay campos requeridos sin rellenar",
        error: true,
      });
      return;
    }

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("body", body);
      formData.append("tags", tags);
      formData.append("image", image);

      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/post/save`,
        formData,
        getBearerConfigToken()
      );

      setAlert({
        msg: data.msg,
        error: false,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PostContext.Provider
      value={{
        post,
        alert,
        loading,
        setPost,
        getPost,
        handleSubmit,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export { PostProvider };

export default PostContext;
