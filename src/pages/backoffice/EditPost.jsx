import { useEffect } from "react";
import { useParams } from "react-router-dom";
import usePost from "../../hooks/usePost";
import FormPost from "../../components/backoffice/FormPost";

const EditPost = () => {

  const { id } = useParams();
  const { getPost, loading } = usePost();

  useEffect(() => {

    return () => {
      getPost(id)
    }
  }, [])

  if(loading) return 'Cargando...';
  
  return (
    <>
     
      <h1 className="text-4xl font-black">Editar Post</h1>

      <div className="mt-10 flex justify-center">
          <FormPost />
      </div>
    </>
  )
}

export default EditPost