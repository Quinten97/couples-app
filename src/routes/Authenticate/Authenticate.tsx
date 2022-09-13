import { FC } from "react";
import { Link, Outlet } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginForm from "./components/forms/LoginForm";
import SignUpForm from "./components/forms/SignUpForm";

const Authenticate: FC = () => {
  return (
    <div>
      <nav>
        <Link to="Login">Login</Link>
        <Link to="SignUp">SignUp</Link>
      </nav>
      <Routes>
        <Route index element={<LoginForm />} />
        <Route path="Login" element={<LoginForm />} />
        <Route path="SignUp" element={<SignUpForm />} />
      </Routes>
      <Outlet />
    </div>
  );
};
export default Authenticate;
