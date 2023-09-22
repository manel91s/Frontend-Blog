import { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import TagSelector from "./TagSelector";
import UsersSelector from "./UsersSelector";
import usePost from "../../hooks/usePost";

const FormPost = () => {
  const { auth } = useAuth();
  const [role] = auth.roles;

  const {post, setPost} = usePost();

  console.log(post)
  const handleSubmit = (e) => {
    e.preventDefault();
    
    return;
  }



  return (
    <form 
        className="bg-white py-10 px-5 md:w-1/2 rounded-lg shadow"
        onSubmit={handleSubmit}
    >
      <div>
        <label
          className="text-gray-700 uppercase font-bold text-sm"
          htmlFor="title"
        >
          Titulo
        </label>

        <input
          name="title"
          type="text"
          className="border w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          placeholder="Descripción del titulo"
          onChange={(e) => {setPost({...post, [e.target.name] : e.target.value })}}
          
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
          name="body"
          className="border w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          placeholder="Descripción del titulo"
          onChange={(e) => {setPost({...post, [e.target.name] : e.target.value })}}
        
        />
      </div>
      <div className="mt-5">
        <label
          className="text-gray-700 uppercase font-bold text-sm"
          htmlFor="title"
        >
          Etiquetas
        </label>

        <TagSelector/>
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

      <button
        className="mt-5 bg-teal-700 w-full py-3 mb-5 text-white uppercase font-bold 
                   rounded hover:cursor-pointer hover:bg-teal-800 transition-colors"
      >
        Crear Post
      </button>
    </form>
  );
};

export default FormPost;
