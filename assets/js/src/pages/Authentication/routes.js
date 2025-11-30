import NotFoundPageRoute from "../../common/RouteNotFound";
import CompleteProfile from "./CompleteProfile";
import ForgotPassword from "./ForgotPassword";
import Login from "./Login";
import OTPVerification from "./OTPVerification";
import ResetPassword from "./ResetPassword";
import Signup from "./Signup";

const authRoutes = [
  {
    name: "Login",
    layout: "/auth",
    path: "/login",
    component: Login,
  },
  {
    name: "Sign Up",
    layout: "/auth",
    path: "/signup",
    component: Signup,
  },
   {
    name: "Complete Setup",
    layout: "/auth",
    path: "/complete-setup",
    component: CompleteProfile,
  },
    {
    name: "forgot Password",
    layout: "/auth",
    path: "/forgot-password",
    component: ForgotPassword,
  },
    {
    name: "reset Password",
    layout: "/auth",
    path: "/reset-password",
    component: ResetPassword,
  },
   {
    name: "OPT Verification",
    layout: "/auth",
    path: "/otp-verification",
    component: OTPVerification,
  },
  NotFoundPageRoute,
  {
    ...NotFoundPageRoute,
    layout: "/auth",
  },
];

export default authRoutes;
