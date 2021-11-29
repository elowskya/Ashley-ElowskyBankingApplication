/*eslint-disable no-undef*/
import { useContext } from "react";
import { UserContext } from "../App";


import BankForm from "./Layouts/BankForm";

export default function CreateAccount() {
  const ctx = useContext(UserContext);

  return (
    <BankForm />
  );
}
