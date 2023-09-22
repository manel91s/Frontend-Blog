import FormPost from "../../components/backoffice/FormPost"
const NewPost = () => {
 
  return (
    <>
      <h1 className="text-4xl font-black">Crear Post</h1>

      <div className="mt-10 flex justify-center">
          <FormPost />  
      </div>
    </>
  )
}

export default NewPost