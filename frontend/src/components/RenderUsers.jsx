import React from "react";
import axios from "axios";

const RenderUsers = ({ users }) => {
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:4000/users/${id}`)
      .then((result) => {
        // alert(result.message);
        console.log(result.data.message);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
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
        {users.length > 0 ? (
          users.map((user) => (
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
                  <button onClick={() => handleDelete(user._id)}>Delete</button>
                </td>
              </tr>
            </tbody>
          ))
        ) : (
          <tbody>
            <tr>
              <td className="text-red-600 text-center text-2xl">NO USER</td>
            </tr>
          </tbody>
        )}
      </table>
    </div>
  );
};

export default RenderUsers;
