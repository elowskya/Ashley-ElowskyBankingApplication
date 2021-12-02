import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import CreateAccount from "./components/CreateAccount";
import Login from "./components/Login";
import Deposit from "./components/Deposit";
import Withdraw from "./components/Withdraw";
import Balance from "./components/Balance";
import Alldata from "./components/Alldata";
// import UserProvider from "./components/UserProvider";


function App() {
  return (
    <Router>
      <Navigation />
      
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/CreateAccount" element={<CreateAccount />} />
          <Route path="/login" element={<Login />} />
          <Route path="/deposit" element={<Deposit />} />
          <Route path="/withdraw" element={<Withdraw />} />
          <Route path="/balance" element={<Balance />} />
          <Route path="/alldata" element={<Alldata />} />
        </Routes>
      
    </Router>
  );
}

export default App;
