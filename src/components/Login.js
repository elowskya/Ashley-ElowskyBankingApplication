import { useContext } from "react";
import { UserContext } from "../App";

export default function Login() {
  const ctx = useContext(UserContext);
  return  <div>Login</div>;
}
