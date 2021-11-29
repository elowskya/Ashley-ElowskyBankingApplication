import { useContext } from "react";
import { UserContext } from "../App";

import BankForm from "./Layouts/BankForm";

export default function Login() {
  const ctx = useContext(UserContext);
  return  (
    <BankForm />
  );
}
