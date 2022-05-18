import { NavLink, Route, Routes } from "react-router-dom";
import "./App.scss";

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
          <Route path="/signup" element={<div>Signup Form</div>}></Route>
          <Route path="/login" element={<div>Login Form</div>}></Route>
          <Route path="/dashboard" element={<div>Dashboard</div>}></Route>
          {/* <Route path="/" element={<Home />} />
              <Route path="signup" element={<Signup />} />
              <Route path="login" element={<Login />} />
              <Route path="dashboard" element={<Dashboard />} /> */}
          {/* <Route path="dashboard/*" element={<Dashboard />} /> */}
        </Routes>
      </header>
    </div>
  );
}

export default App;
