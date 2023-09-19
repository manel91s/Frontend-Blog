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

            <div>
                <Link 
                    to="/posts"
                    className="font-nold uppercase"
                >Posts</Link>

                <button
                    type="button"
                ></button>
            </div>
        </div>
    </header>
  )
}

export default Header