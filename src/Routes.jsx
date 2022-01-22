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
  MeetDetails,
  NewPassword,
  PhoneNumberVerification,
  Register,
} from "./screens";

import { Meets, Notifications } from "./screens/DashboardPages";

import {
  About,
  Career,
  Contact,
  SocialResponsibility,
} from "./screens/FooterPages/Discover";

import {
  AskedQuestions,
  PrivacyPolicy,
  KVKK,
  CookiePolicy,
} from "./screens/FooterPages/Help";

import { BusinessPolicy, FeesAndPricing } from "./screens/FooterPages/Business";

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
  {
    path: "/meet/:meetID",
    element: <MeetDetails />,
  },
  //TODO:Footer Pages İçerikleri Yapılacak
  //Footer - Discover
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/career",
    element: <Career />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/social-responsibility",
    element: <SocialResponsibility />,
  },

  //Footer - Help
  {
    path: "/asked-questions",
    element: <AskedQuestions />,
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPolicy />,
  },
  {
    path: "/kvkk",
    element: <KVKK />,
  },
  {
    path: "/cookie-policy",
    element: <CookiePolicy />,
  },

  //Footer - Business
  {
    path: "/business-policy",
    element: <BusinessPolicy />,
  },
  {
    path: "/fees-and-pricing",
    element: <FeesAndPricing />,
  },
];
