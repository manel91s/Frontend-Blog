import { useEffect } from "react";
import { useParams } from "react-router-dom";
import usePost from "../../hooks/usePost";
import FormPost from "../../components/backoffice/FormPost";

const EditPost = () => {
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