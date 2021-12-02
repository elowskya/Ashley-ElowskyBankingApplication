import { useContext } from "react";
import UserContext from "./UserProvider";

export default function Login() {
  const [users, setUsers] = useContext(UserContext);
  return  (
    <>
    there could be a login form happening
    </>
  );
}
