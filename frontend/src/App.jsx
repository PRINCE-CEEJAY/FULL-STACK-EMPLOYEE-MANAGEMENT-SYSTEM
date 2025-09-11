import "./App.css";
import Login from "./components/Login";
import RenderUsers from "./components/RenderUsers";
import AddUser from "./components/AddUser";
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [add, setAdd] = useState(false);

  const getUsers = async () => {
    try {
      const result = await axios.get("http://localhost:4000/users");
      const usersArray = result.data.data || []; // fallback
      setUsers(usersArray);
    } catch (error) {
      setUsers([]);
      console.log(error.data.mesage);
    }
  };
  const showAdd = () => setAdd((prev) => !prev);
  useEffect(() => {
    const interval = setInterval(() => {
      getUsers();
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex flex-col ">
      <div className="relative">
        <button
          className="absolute top-0 right-1/2 text-2xl font-bold bg-blue-800 hover:bg-green-800 cursor-pointer p-2 rounded-md text-center"
          onClick={showAdd}
        >
          Add User
        </button>
      </div>
      <div className="relative">
        <div className="w-full absolute top-10 code-screen min-h-screen">
          {add && <AddUser />}
          <RenderUsers users={users} />
          {/* <Dashboard /> */}
          <Login />
        </div>
      </div>
    </div>
  );
};

export default App;
