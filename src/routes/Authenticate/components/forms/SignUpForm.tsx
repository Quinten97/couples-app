import { FC } from "react";
import GoogleSignIn from "./GoogleSignIn";

const SignUpForm: FC = () => {
  return (
    <form>
      <label htmlFor="userName">Username</label>
      <input name="userName"></input>
      <label htmlFor="password">Password</label>
      <input name="password"></input>
      <label htmlFor="email">Email</label>
      <input name="email"></input>
      <button>Sign Up</button>
      <GoogleSignIn />
    </form>
  );
};
export default SignUpForm;
