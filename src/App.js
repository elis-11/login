import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { Dashboard } from "./components/dashboard/Dashboard";
import { Login } from "./components/login/Login";
import { Signup } from "./components/signup/Signup";
import {Navbar} from "./components/Navbar";

function App() {
  return (
    <div className="App">
        <Navbar />
      <header>
        <h2>Manage your own book list!</h2>
        <Routes>
          <Route path="/" element={<div>HomePage</div>}></Route>
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<Dashboard />} />
          {/* <Route path="/signup" element={<div>Si gnup Form</div>}></Route> */}
          {/* <Route path="dashboard/*" element={<Dashboard />} /> */}
        </Routes>
      </header>
    </div>
  );
}

export default App;
