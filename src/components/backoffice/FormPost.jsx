import { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import useUsers from "../../hooks/useUsers";
import TagSelector from "./TagSelector";
import UsersSelector from "./UsersSelector";


const FormPost = () => {
  const { auth } = useAuth();
  const { users } = useUsers();
  const [role] = auth.roles;

  return (
    <form className="bg-white py-10 px-5 md:w-1/2 rounded-lg shadow">
      <div>
        <label
          className="text-gray-700 uppercase font-bold text-sm"
          htmlFor="title"
        >
          Titulo
        </label>

        <input
          id="title"
          type="text"
          className="border w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          placeholder="Descripción del titulo"
        />
      </div>
      <div className="mt-5">
        <label
          className="text-gray-700 uppercase font-bold text-sm"
          htmlFor="title"
        >
          Cuerpo del Post
        </label>

        <textarea
          id="title"
          className="border w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          placeholder="Descripción del titulo"
        />
      </div>
      <div className="mt-5">
        <label
          className="text-gray-700 uppercase font-bold text-sm"
          htmlFor="title"
        >
          Etiquetas
        </label>

        <TagSelector />
      </div>

      {role === "ADMIN" ? (
        <div className="mt-5">
          <label
            className="text-gray-700 uppercase font-bold text-sm"
            htmlFor="title"
          >
            Asignar usuario
          </label>
         <UsersSelector />
        </div>
      ) : (
        ""
      )}
    </form>
  );
};

export default FormPost;
