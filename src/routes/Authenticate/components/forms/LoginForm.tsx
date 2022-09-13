import { FC } from "react";

const LoginForm: FC = () => {
  return (
    <form>
      <label htmlFor="userName">Username</label>
      <input name="userName"></input>
      <label htmlFor="password">Password</label>
      <input name="password"></input>
      <button>Log In</button>
    </form>
  );
};
export default LoginForm;
