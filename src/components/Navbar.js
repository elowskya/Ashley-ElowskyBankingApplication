import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <Link to="/">BadBank Home</Link>
      <Link to="/CreateAccount">Create Account</Link>
      <Link to="/login">Login</Link>
      <Link to="/deposit">Deposit</Link>
      <Link to="/withdraw">Withdraw</Link>
      <Link to="/balance">Balance</Link>
      <Link to="/alldata">All Data</Link>
    </div>
  );
}
