import { ForgotPassword, Home, Login, NewPassword } from "./screens";

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
];
