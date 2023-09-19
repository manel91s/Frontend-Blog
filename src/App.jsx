import { BrowserRouter, Routes, Route } from "react-router-dom"

import AuthLayout from "./layouts/AuthLayout"

import Login from "./pages/backoffice/Login"
import Register from "./pages/backoffice/Register"
import ForgotPassword from "./pages/backoffice/ForgotPassword"

import ConfirmAccount from "./pages/backoffice/ConfirmAccount"
import RestorePassword from "./pages/backoffice/RestorePassword"
import { AuthProvider } from "./context/AuthProvider"
import ProtectedRoute from "./layouts/ProtectedRoute"
import Posts from "./pages/backoffice/Posts"


function App() {
 

  return (
    <>
       <BrowserRouter>
        <AuthProvider>
        <Routes>
          <Route path="/" element={<AuthLayout />}>
              <Route index element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="forgot-password" element={<ForgotPassword />} />
              <Route path="restore-password/:token" element={<RestorePassword />} />
              <Route path="confirm/:id" element={<ConfirmAccount />} />
          </Route>
        </Routes>

        <Routes>
          <Route path="/posts" element={<ProtectedRoute />}>
            <Route index element={<Posts />} /> 
          </Route>
        </Routes>
        </AuthProvider>
       </BrowserRouter>
    </>
  )
}

export default App
