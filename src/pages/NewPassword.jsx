import React from 'react'

const NewPassword = () => {
  return (
    <>
      <h1 className="text-teal-400 font-black text-6xl capitalize">Restablecer Password</h1>

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

          <input 
              type="submit"
              value="Enviar"
              className="bg-teal-700 w-full py-3 mb-5 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-teal-800 transition-colors"
          />

      </form>

      <nav className="lg:flex lg:justify-between">
          <Link
              className="block text-center my-5 text-slate-500 uppercase text-sm"
              to="/"
          >¿Ya tienes cuenta? Inicia Sesión</Link>

          <Link
              className="block text-center my-5 text-slate-500 uppercase text-sm"
              to="/register"
          >¿No tienes cuenta? Registrate</Link>
      </nav>
   </> 
  )
}

export default NewPassword