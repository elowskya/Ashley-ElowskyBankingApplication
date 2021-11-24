import { useContext } from "react";
import { UserContext } from "../App";

export default function Withdraw() {
  const ctx = useContext(UserContext);
  return <div>Withdraw</div>;
}
