import { useState } from "react";
import { Link } from "react-router-dom";
import Alert from "../../components/Alert";
import { validateEmail } from "../../Helpers/validation";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState({});

  const { setAuth } = useAuth();

  const isValidEmail = validateEmail(email);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === "") {
      setAlert({
        msg: "El email no puede estar vacio",
        error: true,
      });
    }

    if (!isValidEmail) {
      setAlert({
        msg: "El email introducido no es correcto",
        error: true,
      });

      return;
    }

    try {

      const userLogin = fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/user/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );
      const userToken = fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/login_check`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: email,
            password,
          }),
        }
      );
      const responses = await Promise.all([userLogin, userToken]);

      const user = await responses[0].json();
      const { token } = await responses[1].json();
      
      setAlert({});
      localStorage.setItem('token', token);
      setAuth(user);

    } catch (error) {
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
        Inicia sesión para administrar tus posts{" "}
      </h1>

      <form
        className="my-10 bg-white shadow rounded-lg p-10"
        onSubmit={handleSubmit}
      >
        {msg && <Alert alert={alert} />}
        <div className="my-5">
          <label
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email de registro"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className="my-5">
          <label
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="password"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="password de registro"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
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
        >
          ¿No tienes cuenta de usuario? Registrate
        </Link>

        <Link
          className="block text-center my-5 text-slate-500 uppercase text-sm"
          to="/forgot-password"
        >
          Olvide Mi Password
        </Link>
      </nav>
    </>
  );
};

export default Login;
