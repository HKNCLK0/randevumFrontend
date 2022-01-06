import {
  Create,
  Dashboard,
  EmailVerification,
  ForgotPassword,
  Home,
  Login,
  NewPassword,
  PhoneNumberVerification,
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
  {
    path: "/register/phone-verification",
    element: <PhoneNumberVerification />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/create/:businessID",
    element: <Create />,
  },
];
