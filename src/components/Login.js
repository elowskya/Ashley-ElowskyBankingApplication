import { useContext } from "react";
import { UserContext } from "../App";

import BankForm from "./CreateAccount";

export default function Login() {
  const ctx = useContext(UserContext);
  console.log(ctx);
  return  (
    <BankForm />
  );
}
