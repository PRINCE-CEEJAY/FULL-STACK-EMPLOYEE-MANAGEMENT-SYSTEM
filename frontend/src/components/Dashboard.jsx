import React, { use, useState } from "react";
import axios from "axios";
import "./Styles.css";

const Dashboard = () => {
  const [users, setUsers] = useState([]);

  const getUsers = (e) => {
    e.preventDefault();
    axios
      .get("http://localhost:4000/users")
      .then((result) => {
        setUsers(result.data.data);
        console.log(result.data.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="flex flex-col justify-center min-h-screen">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-center tex-3xl font-bold">DASHBOARD</h1>
        <button>Add User</button>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Date Employed</th>
              <th>Staff Number</th>
              <th>Salary</th>
              <th>Pay Day</th>
            </tr>
          </thead>
          {users.map((user) => (
            <tbody key={user._id}>
              <tr>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.dateEmployed}</td>
                <td>{user.staffId}</td>
                <td>{user.salary}</td>
                <td>{user.payDay}</td>
                <td>
                  <button>Edit</button>
                </td>
                <td>
                  <button>Update</button>
                </td>
                <td>
                  <button>Delete</button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
      <div className="flex justify-center items-center p-1">
        <button
          onClick={getUsers}
          className="w-64 mt-5 text-white bg-blue-800 cursor-pointer px-3 py-1 font-bold hover:bg-green-500 rounded-md"
        >
          Get Users
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
