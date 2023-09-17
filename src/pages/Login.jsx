
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
        <h1 className="text-teal-400 font-black text-6xl capitalize">Inicia sesión para administrar tus posts </h1>

        <form className="my-10 bg-white shadow rounded-lg p-10">
            <div className="my-5">
                <label 
                    className="uppercase text-gray-600 block text-xl font-bold"
                    htmlFor="email"
                    >Email</label>
                <input 
                    id="email"
                    type="email"
                    placeholder="Email de registro"
                    className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                />
            </div>

            <div className="my-5">
                <label 
                    className="uppercase text-gray-600 block text-xl font-bold"
                    htmlFor="password"
                    >Password</label>
                <input 
                    id="password"
                    type="password"
                    placeholder="password de registro"
                    className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                />
            </div>

            <input 
                type="submit"
                value="Iniciar Sesión"
                className="bg-teal-700 w-full py-3 mb-5 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-teal-800 transition-colors"
            />

        </form>

        <nav className="lg:flex lg:justify-between">
            <Link
                className="block text-center my-5 text-slate-500 uppercase text-sm"
                to="/register"
            >¿No tienes cuenta de usuario? Registrate</Link>

            <Link
                className="block text-center my-5 text-slate-500 uppercase text-sm"
                to="/forgot-password"
            >Olvide Mi Password</Link>
        </nav>

    </>
  )
}

export default Login