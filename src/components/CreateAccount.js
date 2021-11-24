import { useContext } from "react";
import { UserContext } from "../App";

export default function CreateAccount() {
  const ctx = useContext(UserContext);
  return <div>Create Account</div>;
}
