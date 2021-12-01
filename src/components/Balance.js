import { useContext } from "react";
import { UserContext } from "../App";

export default function Balance() {
  const ctx = useContext(UserContext);
  console.log(ctx);
  return <div>Balance</div>;
}
