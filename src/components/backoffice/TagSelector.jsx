import { useState, useEffect } from 'react';
import { getBearerConfigToken } from '../../Helpers/configs';
import usePost from '../../hooks/usePost';
import axios from 'axios';


const TagSelector = () => {

  const [tags, setTags] = useState([]);
  const {post, setPost} = usePost();

  useEffect(() => {

      const getTags = async () => {
      try {

          const {data} = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/tags`,
          getBearerConfigToken()
          );

          setTags(data);
      } catch (error) {
          console.log(error);
      }
      };
      getTags();

      return () => {};
  }, []);

 
  return (
    <select
      name="tag"
      className="border w-full p-2 mt-2 placeholder-gray-400 rounded-md"
      placeholder="Descripción del titulo"
      onChange={(e) => {setPost({...post, [e.target.name] : e.target.value })}}
     
    >
    <option>Selecciona una etiqueta</option>
    {tags.length ? tags.map((tag, index) => (
       <option key={index} value={`${tag.id}`}>{tag.name}</option>
    )) : 'No hay tags'}
    </select>
    
  );
};

export default TagSelector;
