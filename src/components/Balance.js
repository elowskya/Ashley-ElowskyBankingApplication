import { useContext } from "react";
import UserContext from "./UserProvider";

export default function Balance() {
  const [users, setUsers] = useContext(UserContext);
  return <div>Balance</div>;
}
