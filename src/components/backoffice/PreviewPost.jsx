import { Link } from "react-router-dom";

const PreviewPost = ({post}) => {

  const {id, title } = post;

  return (
    <div className='border-b flex p-5'>
        <p className="flex-1">{title}
  

        </p>
        
        <Link
            to={`${id}`}
            className="text-gray-600 hover:text-gray-800 uppercase text-sm font-bold"
        >Editar post</Link>
    </div>
  )
}

export default PreviewPost