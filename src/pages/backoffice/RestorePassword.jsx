import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Alert from "../../components/Alert";

const RestorePassword = () => {

  const params = useParams();
  const navigate = useNavigate();

  const [newPassword, setNewPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [alert, setAlert] = useState({});

  const { token } = params;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword === "" || repeatPassword === "") {
      setAlert({
        msg: "Los campos no pueden estar vacios",
        error: true,
      });

      return;
    }
    if (newPassword !== repeatPassword) {
      setAlert({
        msg: "Las contraseñas no coincididen",
        error: true,
      });

      return;
    }

    try {
      const { data } = await axios.patch(
        `${import.meta.env.VITE_BACKEND_URL}/api/user/restore-password/token=${token}`,
        {
          password: newPassword,
        }
      );

      setAlert({
        msg: data.msg,
        error: false,
      });

      setNewPassword('');
      setRepeatPassword('');

      setTimeout(() => {
         navigate("/");
      }, 3000);

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
        Recupera tu acceso
      </h1>

      <form
        className="my-10 bg-white shadow rounded-lg p-10"
        onSubmit={handleSubmit}
      >
        {msg && <Alert alert={alert} />}
        <div className="my-5">
          <label
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="password"
          >
            Nueva Contraseña
          </label>
          <input
            id="password"
            type="password"
            placeholder="Escribir nueva contraseña"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            onChange={(e) => setNewPassword(e.target.value)}
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
            onChange={(e) => setRepeatPassword(e.target.value)}
          />
        </div>

        <input
          type="submit"
          value="Guardar"
          className="bg-teal-700 w-full py-3 mb-5 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-teal-800 transition-colors"
        />
      </form>
    </>
  );
};

export default RestorePassword;
