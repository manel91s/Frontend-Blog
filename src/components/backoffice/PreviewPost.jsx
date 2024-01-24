import { Link } from "react-router-dom";
import { useState } from "react";
import usePosts from "../../hooks/usePosts";
import axios from "axios";
import { getBearerConfigToken } from "../../Helpers/configs";
import Loading from '../Loading';
import { ConfirmDialog } from 'primereact/confirmdialog'; // For <ConfirmDialog /> component

const PreviewPost = ({ post }) => {

  const { id, title } = post;
  const { posts, setPosts } = usePosts();
  const [isLoading, setIsLoading] = useState(false);
  
  const handleDelete = async () => {

    try {
      setIsLoading(true);

      const { status } = await axios.delete(
        `${import.meta.env.VITE_BACKEND_URL}/api/post/delete/${id}`,
        getBearerConfigToken()
      );
  
      if(status === 200) {
        setPosts(
          posts.filter((post) => post.id !== id)
        )
      } 

    } catch (error) {
      console.log(error);
    }finally{
      setIsLoading(false);
    }
  }

  return (
    <div className='border-b flex p-5 gap '>
      {isLoading ? <Loading /> : '' }
      <p className="flex-1">{title}</p>

      <div className="flex items-center gap-3">
        <Link
          to={`${id}`}
          className="text-gray-600 hover:text-gray-800 uppercase text-sm font-bold cursor-pointer"
        >Editar</Link>

        <button 
          className="text-red-600 hover:text-red-700 uppercase text-sm font-bold cursor-pointer"
          onClick={handleDelete}
        >Borrar</button>
      </div>

    </div>
  )
}

export default PreviewPost