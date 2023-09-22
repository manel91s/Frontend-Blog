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

    if (!user[0].avatar) {
      setLoadImage(false);
      setImage('');
      setPost({ ...post, [e.target.name]: e.target.value, ["avatar"]: "" });
      return;
    }

    setImage(user[0].avatar);
    setLoadImage(true);
    setPost({
      ...post,
      [e.target.name]: e.target.value,
      ["avatar"]: user[0].avatar,
    });

  };

  const handleChange = (e) => {
    console.log(e.target.value);

    setStateImage(e);
  };

  return (
    <div className="md:flex md:items-center md:gap-5">
      {loadImage ? (
        <div className="mt-5 flex justify-center">
          <img
            name="avatar"
            id="avatar"
            className="w-20 h-auto max-w-lg rounded-lg rounded-full"
            src={`${import.meta.env.VITE_BACKEND_URL}/api/images/${image}`}
          ></img>
        </div>
      ) : (
        ""
      )}
      <select
        name="user"
        className="w-full md:flex-1 border p-2 mt-2 placeholder-gray-400 rounded-md"
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
    </div>
  );
};

export default UsersSelector;
