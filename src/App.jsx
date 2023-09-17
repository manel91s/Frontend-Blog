import { BrowserRouter, Routes, Route } from "react-router-dom"

import AuthLayout from "./layouts/AuthLayout"

import Login from "./pages/Login"
import Register from "./pages/Register"
import ForgotPassword from "./pages/ForgotPassword"

import ConfirmAccount from "./pages/ConfirmAccount"
import RestorePassword from "./pages/RestorePassword"

function App() {
 

  return (
    <>
       <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<AuthLayout />}>
              <Route index element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="forgot-password" element={<ForgotPassword />} />
              <Route path="restore-password/:token" element={<RestorePassword />} />
              <Route path="confirm/:id" element={<ConfirmAccount />} />
          </Route>

        </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
