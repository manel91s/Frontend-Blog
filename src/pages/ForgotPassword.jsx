import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  return (
    <>
    <h1 className="text-teal-400 font-black text-6xl capitalize">Recupera tu acceso</h1>

    <form className="my-10 bg-white shadow rounded-lg p-10">

        <div className="my-5">
              <label 
                  className="uppercase text-gray-600 block text-xl font-bold"
                  htmlFor="password"
                  >Nueva Contraseña</label>
              <input 
                  id="password"
                  type="password"
                  placeholder="Escribir nueva contraseña"
                  className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              />
          </div>

          <div className="my-5">
              <label 
                  className="uppercase text-gray-600 block text-xl font-bold"
                  htmlFor="repeat-password"
                  >Repetir contraseña</label>
              <input 
                  id="repeat-password"
                  type="password"
                  placeholder="Repetir password de registro"
                  className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              />
          </div>

        <input 
            type="submit"
            value="Guardar"
            className="bg-teal-700 w-full py-3 mb-5 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-teal-800 transition-colors"
        />

    </form>

  </> 
  )
}

export default ForgotPassword