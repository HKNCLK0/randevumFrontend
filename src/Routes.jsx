import {
  BusinessFilterByCategory,
  Create,
  CreateBusinessList,
  Dashboard,
  EmailVerification,
  ForgotPassword,
  Home,
  HowToWorks,
  Login,
  NewPassword,
  PhoneNumberVerification,
  Register,
} from "./screens";

import { Meets, Notifications, Calender } from "./screens/DashboardPages";

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
    path: "/dashboard/meets",
    element: <Meets />,
  },
  {
    path: "/dashboard/notifications",
    element: <Notifications />,
  },
  {
    path: "/dashboard/calender",
    element: <Calender />,
  },
  {
    path: "/create",
    element: <CreateBusinessList />,
  },
  {
    path: "/create/:businessID",
    element: <Create />,
  },
  {
    path: "/nasil-calisir",
    element: <HowToWorks />,
  },
  {
    path: "/category/:categoryParams",
    element: <BusinessFilterByCategory />,
  },
];
