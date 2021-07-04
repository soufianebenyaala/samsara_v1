import { toast } from "react-toastify";

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case "SIGN_IN":
      toast("Welcome back..");
      return state;
    case "SIGN_IN_ERR":
      toast.error("Sign in error...");
      return state;
    case "SIGN_OUT":
      toast("You signed out..");
      return state;
    case "SIGN_UP":
      toast("Welcome..");
      return state;
    case "SIGN_UP_ERR":
      toast.error("Sign up error...");
      return state;
    case "RESET_PASSWORD":
      toast("reset password..");
      return state;
    case "RESET_PASSWORD_ERR":
      toast.error("reset password error...");
      return state;
    case "RE_SEND_VERIFICATION_EMAIL":
      toast("RE_SEND_VERIFICATION_EMAIL..");
      return state;
    case "RE_SEND_VERIFICATION_EMAIL_ERR":
      toast.error("RE_SEND_VERIFICATION_EMAIL error...");
      return state;
    default:
      return state;
  }
};

export default authReducer;
