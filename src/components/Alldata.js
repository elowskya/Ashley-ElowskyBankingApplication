import { useContext } from "react";
import { UserContext } from "../App";

export default function Alldata() {
  const ctx = useContext(UserContext);
  return <div>AllData bg</div>;
}
