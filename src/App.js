import { NavLink, Route, Routes } from "react-router-dom";
import "./App.scss";
import { Dashboard } from "./components/dashboard/Dashboard";
import { Login } from "./components/login/Login";
import { Signup } from "./components/signup/Signup";

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="signup">Signup</NavLink>
          <NavLink to="login">Login</NavLink>
          <NavLink to="dashboard">Dashboard</NavLink>
        </nav>
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
