import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Alert from "../components/Alert";

const ConfirmAccount = () => {
  const params = useParams();

  const { id } = params;

  const [alert, setAlert] = useState({});
  const [confirm, setConfirm] = useState(false);

  useEffect(() => {
    const confirmAccount = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/user/activate/token=${id}`
        );

        setAlert({
          msg: data.msg,
          error: false,
        });

        setConfirm(true);
      } catch (error) {
        const { data } = error.response;

        setAlert({
          msg: data.msg,
          error: true,
        });
      }
    };

    return () => {
      confirmAccount();
    };
  }, []);

  const { msg } = alert;

  return (
    <>
      <h1 className="text-teal-400 font-black text-6xl capitalize">
        Confirmar cuenta
      </h1>

      <div>
        {msg && <Alert alert={alert} />}

        {confirm && (
          <Link
            className="block text-center my-5 text-slate-500 uppercase text-sm"
            to="/register"
          >
            Iniciar sesión
          </Link>
        )}
      </div>
    </>
  );
};

export default ConfirmAccount;
