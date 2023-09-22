import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="px-4 py-5 bg-white border-b">
        <div className="md:flex md:justify-between">
            <h2 className="text-4xl text-teal-600 font-black text-center">
                M.A
            </h2>

            <input
                type="search" 
                placeholder="Buscar Post"
                className="rounded-lg lg:w-96 block p-2 border"
            />

            <div className="flex items-center gap-4">
                <Link 
                    to="/posts"
                    className="font-bold uppercase"
                >Posts</Link>

                <button
                    type="button"
                    className="text-white bg-teal-600 p-3 rounded-md uppercase font-bold"
                >Cerrar Sesión</button>
            </div>
        </div>
    </header>
  )
}

export default Header