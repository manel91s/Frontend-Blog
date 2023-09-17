import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Alert from "../components/Alert";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [alert, setAlert] = useState({});
  
  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValidEmail = validateEmail(email);

    if (email === "") {
      setAlert({
        msg: "El email no puede estar vacio",
        error: true,
      });

      return;
    }

    if(!isValidEmail) {
        setAlert({
            msg: "El email introducido no es correcto",
            error: true,
          });
    
        return;
    }

    try {
        const { data } = await axios.patch(`${import.meta.env.VITE_BACKEND_URL}/api/user/forgot-password`, {
            email
        });

        setAlert({
            msg: data.msg,
            error: false,
          });

    }catch(error) {

        const { data } = error.response;
      
        setAlert({
          msg: data.msg,
          error: true,
        });
    }

  };

  const { msg } = alert;

  return (
    <>
      <h1 className="text-teal-400 font-black text-6xl capitalize">
        Recupera tu acceso
      </h1>

      <form
        className="my-10 bg-white shadow rounded-lg p-10"
        onSubmit={handleSubmit}
      >
        <div className="my-5">
          {msg && <Alert alert={alert} />}
          <label
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="text"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Escribir correo electronico"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            onChange={(e) => setEmail(e.target.value)}
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
  );
};

export default ForgotPassword;
