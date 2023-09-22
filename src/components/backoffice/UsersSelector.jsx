import { useState, useEffect } from "react";
import { getBearerConfigToken } from "../../Helpers/configs";
import axios from "axios";
import useUsers from "../../hooks/useUsers";
import usePost from "../../hooks/usePost";

const UsersSelector = () => {
  const { users, setUsers } = useUsers();
  const [image, setImage] = useState("");
  const [loadImage, setLoadImage] = useState(false);
  const { post, setPost } = usePost();

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


  const setStateImage = (e) => {
    const idUser = parseInt(e.target.value);
    const user = users.filter((user) => user.id === idUser);

    if (user[0].avatar) {
      setLoadImage(true);
      setImage(user[0].avatar);
      setPost({ ...post,
        [e.target.name] : e.target.value,
        ['avatar'] : user[0].avatar
      });

    } else {
      setLoadImage(false);
      setImage('');
      setPost({ ...post,
        [e.target.name] : e.target.value,
        ['avatar'] : ''
      })
    }
  };

  const handleChange = (e) => {
    console.log(e.target.value)

    setStateImage(e);
  };

  return (
    <>
      <select
        name="user"
        className="border w-full p-2 mt-2 placeholder-gray-400 rounded-md"
        onChange={handleChange}
      >
        <option>Selecciona un usuario</option>
        {users ? (
          users.map((user, index) => (
            <option key={index} value={user.id}>
              {user.name}
            </option>
          ))
        ) : (
          <option>----</option>
        )}
      </select>

      {loadImage ? (
        <div className="flex justify-center items-center mt-5">
          <img
            name="avatar"
            id="avatar"
            className="text-center w-full h-auto max-w-lg rounded-lg"
            src={`${import.meta.env.VITE_BACKEND_URL}/api/images/${image}`}
          ></img>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default UsersSelector;
