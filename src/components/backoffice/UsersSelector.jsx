import { useState, useEffect } from "react";
import { getBearerConfigToken } from "../../Helpers/configs";
import axios from "axios";
import useUsers from "../../hooks/useUsers";

const UsersSelector = () => {
  
  const { users, setUsers } = useUsers();

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

  return (
    <select
      id="users"
      className="border w-full p-2 mt-2 placeholder-gray-400 rounded-md"
    >
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
  );
};

export default UsersSelector;
