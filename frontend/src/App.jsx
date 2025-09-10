import { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";

function App() {
  const [registered, setRegistered] = useState(false);
  return (
    <>
      {registered ? <Login /> : <Register setRegistered={setRegistered} />}
      <Dashboard />
    </>
  );
}

export default App;
