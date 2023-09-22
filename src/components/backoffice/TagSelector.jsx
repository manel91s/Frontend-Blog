
import { useState, useEffect } from 'react';
import { getBearerConfigToken } from '../../Helpers/configs';
import axios from 'axios';

const TagSelector = () => {

  const [tags, setTags] = useState([]);

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
      id="tags"
      className="border w-full p-2 mt-2 placeholder-gray-400 rounded-md"
      placeholder="Descripción del titulo"
    >
    {tags.length ? tags.map((tag, index) => (
       <option key={index} value={`${tag.id}`}>{tag.name}</option>
    )) : 'No hay tags'}
    </select>
  );
};

export default TagSelector;
