import { useContext } from "react";
import UserProvider from "./UserProvider";

import BankForm from "./CreateAccount";

export default function Login() {
  const ctx = useContext(UserProvider);
  console.log(ctx);
  return  (
    <BankForm />
  );
}
