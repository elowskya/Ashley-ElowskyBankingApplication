import { useContext } from "react";
import { UserContext } from "../App";

export default function Home() {
  const ctx = useContext(UserContext);
  return <h1>Home</h1>;
}
