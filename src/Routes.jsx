import {
  EmailVerification,
  ForgotPassword,
  Home,
  Login,
  NewPassword,
  Register,
} from "./screens";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/login/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/login/forgot-password/:token",
    element: <NewPassword />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/register/email-verification",
    element: <EmailVerification />,
  },
];
