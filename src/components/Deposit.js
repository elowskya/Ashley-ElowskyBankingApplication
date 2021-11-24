import { useContext } from "react";
import { UserContext } from "../App";

export default function Deposit() {
  const ctx = useContext(UserContext);
  return <div>Deposit</div>;
}
