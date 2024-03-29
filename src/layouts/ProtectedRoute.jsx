import { Outlet, Navigate } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import Header from "../components/backoffice/Header";
import Sidebar from "../components/backoffice/Sidebar";
import Loading from "../components/Loading";

const ProtectedRoute = () => {

  const { auth, loading } = useAuth();

 if(loading) {
    return (
      <>
        <div className="flex w-full h-screen justify-center items-center">
          <Loading />
        </div>
      </>
    )
 }
 

  return (
   <>
       {auth.id ? 
       (
          <div>
              <Header />

              <div className="md:flex md:min-h-screen">
                <Sidebar />
              
                <main className="p-10 flex-1">
                    <Outlet />
                </main>
              </div>

          </div>
       ) : <Navigate to='/' />}
   </>
  )
}

export default ProtectedRoute