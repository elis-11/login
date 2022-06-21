import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { Dashboard } from "./components/dashboard/Dashboard";
import { Login } from "./components/login/Login";
import { Signup } from "./components/signup/Signup";
import { Navbar } from "./components/Navbar";
import { useDataContext } from "./context/DataProvider";

function App() {
  const { errors } = useDataContext();
  return (
    <div className="App">
      <header>
      <div className="errors">{errors}</div>
        <h2>Manage your own book list!</h2>
        <Navbar />
      </header>
        <Routes>
          <Route path="/" element={<div>HomePage</div>}></Route>
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<Dashboard />} />
          {/* <Route path="/signup" element={<div>Si gnup Form</div>}></Route> */}
          {/* <Route path="dashboard/*" element={<Dashboard />} /> */}
        </Routes>
    </div>
  );
}

export default App;
