import { useState } from "react";
import { Link } from "react-router-dom";
import Alert from "../../components/Alert";
import axios from "axios";


const Register = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const [alert, setAlert] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([name, email, password, repeatPassword].includes("")) {
      setAlert({
        msg: "Todos los campos son obligatorios",
        error: true,
      });
      return;
    }

    if (password !== repeatPassword) {
      setAlert({
        msg: "Las contraseñas no coinciden",
        error: true,
      });
      return;
    }

    if (password.length < 6) {
      setAlert({
        msg: "La contraseña es muy corta, agrega minimo 6 caracters",
        error: true,
      });
      return;
    }

    setAlert({});

    try {
      
      const formData = new FormData();
      formData.append('name', name);
      formData.append('surname', surname);
      formData.append('email', email);
      formData.append('password', password);
      formData.append('avatar', avatar);

      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/user/registration`, formData
        );
      
      setAlert({
        msg: data.msg,
        error: false
      })

      setName('');
      setSurname('');
      setEmail('');
      setAvatar(null);
      setPassword('');
      setRepeatPassword('');

    } catch (error) {

      const { data } = error.response

      setAlert({
        msg: data.msg,
        error: true
      });
    }
  };

  const { msg } = alert;

  return (
    <>
      <h1 className="text-teal-400 font-black text-6xl capitalize">
        Crea tu cuenta para administrar tus posts
      </h1>

      {msg && <Alert alert={alert} />}

      <form
        className="my-10 bg-white shadow rounded-lg p-10"
        onSubmit={handleSubmit}
      >
        <div className="my-5">
          <label
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="name"
          >
            Nombre
          </label>
          <input
            id="name"
            type="text"
            placeholder="Nombre de usuario"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="my-5">
          <label
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="surname"
          >
            Apellidos
          </label>
          <input
            id="surname"
            type="text"
            placeholder="Apellidos del usuario"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </div>

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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="my-5">
          <label
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="avatar"
          >
            Avatar
          </label>
          <input
            id="avatar"
            type="file"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            onChange={(e) => setAvatar(e.target.files[0])}
          />
        </div>

        <div className="my-5">
          <label
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="password"
          >
            contraseña
          </label>
          <input
            id="password"
            type="password"
            placeholder="Password de registro"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="my-5">
          <label
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="repeat-password"
          >
            Repetir contraseña
          </label>
          <input
            id="repeat-password"
            type="password"
            placeholder="Repetir password de registro"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
          />
        </div>

        <input
          type="submit"
          value="Crear cuenta"
          className="bg-teal-700 w-full py-3 mb-5 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-teal-800 transition-colors"
        />
      </form>

      <nav className="lg:flex lg:justify-between">
        <Link
          className="block text-center my-5 text-slate-500 uppercase text-sm"
          to="/"
        >
          ¿Ya tienes cuenta? Inicia Sesión
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

export default Register;
