
import useAuth from "../../hooks/useAuth";
import { useParams } from 'react-router-dom';
import { useEffect } from "react";
import usePost from "../../hooks/usePost";
import TagSelector from "./TagSelector";
import UsersSelector from "./UsersSelector";
import Alert from "../Alert";

const FormPost = () => {
  const { auth } = useAuth();
  const { post, getPost, setPost, loading, clearPost, alert, handleSubmit } = usePost();
  
  const { id } = useParams();
  useEffect(() => {
 
    if(id) {
      getPost(id);
      return;
    }

    clearPost();
    
  }, [id])

  const [role] = auth.roles;

  const { msg } = alert;

  const { title, body, image } = post;

  console.log(post);

  if(loading) return 'Cargando...';
  
  return (
    <form
      className="bg-white py-10 px-5 md:w-1/2 rounded-lg shadow"
      onSubmit={handleSubmit}
    >
      {msg && <Alert alert={alert} />}

      <div>
        <label
          className="text-gray-700 uppercase font-bold text-sm required"
          htmlFor="title"
        >
          Titulo
        </label>

        <input
          name="title"
          type="text"
          className="border w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          placeholder="Descripción del titulo"
          required
          onChange={(e) => {
            setPost({ ...post, [e.target.name]: e.target.value });
          }}
          value={title}
        />
      </div>
      <div className="mt-5">
        <label
          className="text-gray-700 uppercase font-bold text-sm required"
          htmlFor="title"
        >
          Cuerpo del Post
        </label>

        <textarea
          name="body"
          rows="8"
          className="border w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          placeholder="Descripción del titulo"
          onChange={(e) => {
            setPost({ ...post, [e.target.name]: e.target.value });
          }}
          required
          value={body}
        />
      </div>

      <div>
        <label
          className="text-gray-700 uppercase font-bold text-sm required"
          htmlFor="title"
        >
          Imagen
        </label>

        <input
          name="image"
          type="file"
          className="border w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          required
          onChange={(e) => {
            setPost({ ...post, [e.target.name]: e.target.files[0] });
          }}
        />
      </div>

      {image ? (
        <div className="mt-5 flex justify-center">
          <img
            name="avatar"
            id="avatar"
            className="w-20 h-auto max-w-lg rounded-lg rounded-full"
            src={`${import.meta.env.VITE_BACKEND_URL}/api/images/posts/${image}`}
          ></img>
        </div>
      ) : (
        ""
      )}

      <div className="mt-5">
        <label
          className="text-gray-700 uppercase font-bold text-sm required"
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

      <button
        className="mt-5 bg-teal-700 w-full py-3 mb-5 text-white uppercase font-bold 
                   rounded hover:cursor-pointer hover:bg-teal-800 transition-colors"
      >
        {id ? 'Editar Post' : 'Crear Post'}
      </button>
    </form>
  );
};

export default FormPost;
