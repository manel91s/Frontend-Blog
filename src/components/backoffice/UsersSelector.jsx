import { useState, useEffect } from "react";
import { getBearerConfigToken } from "../../Helpers/configs";
import axios from "axios";
import useUsers from "../../hooks/useUsers";


const UsersSelector = () => {
  
  const { users, setUsers } = useUsers();
  const [ image, setImage ] = useState('');
  const [loadImage, setLoadImage] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/users`,
          getBearerConfigToken()
        );

        setUsers(data);

      } catch (error) {
        console.log(error);
      }
    };

    return () => {
      getUser();
    };
  }, []);

  const handleChangeImage = (e) => {

    const idUser = parseInt(e.target.value);
    const user = users.filter((user) => user.id === idUser);
    
    if(user[0].avatar) {
        setLoadImage(true);
        setImage(user[0].avatar);
    }else{
        setLoadImage(false);
    }

    };

  return (
    <>
    <select
      id="users"
      className="border w-full p-2 mt-2 placeholder-gray-400 rounded-md"
      onChange={handleChangeImage}
    >
      {users ? (
        users.map((user, index) => (
          <option key={index} value={user.id}>
            {user.name}
          </option>
        ))
      )
      : (
        <option>----</option>
      )}
    </select>

    {loadImage ? 
        <img src={`${import.meta.env.VITE_BACKEND_URL}/api/images/${image}`}></img> 
    : ''}
    </>
  );
};

export default UsersSelector;
