import React, { useState } from "react";
import "./Styles.css";
import { DoorClosedLocked, LockKeyhole } from "lucide-react";
import axios from "axios";

const AddUser = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    staffId: "",
    dateEmployed: "",
    salary: "",
    payDay: "",
  });

  const emptyForm = {
    name: "",
    email: "",
    password: "",
    staffId: "",
    dateEmployed: "",
    salary: "",
    payDay: "",
  };
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const hasEmpty = Object.values(formData).some((val) => val.trim() === "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (hasEmpty) {
      alert("You must fill out the fields completely");
      return;
    }
    console.log(formData);

    axios
      .post("http://localhost:4000/register", formData)
      .then((result) => {
        console.log(result);
        alert(result.data.message);
        setFormData(emptyForm);
        // setRegistered((prev) => !prev);
      })
      .catch((error) => {
        console.log(`An error occured: ${error}`);
        alert(error.data.message);
      });
  };

  return (
    <div className="flex w-full flex-col justify-center items-center">
      <form
        className="flex flex-col  p-2 rounded-md w-80 text-purple-800  border-2 border-black"
        onSubmit={handleSubmit}
      >
        <div className="flex justify-around items-center">
          <DoorClosedLocked className="text-red-800 font-extrabold" />

          <h1 className="text-center shadow-text text-2xl font-bold">
            Register
          </h1>

          <LockKeyhole className="text-red-800" />
        </div>
        <label htmlFor="name" className=" font-bold">
          Name
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="input"
        />
        <label htmlFor="email" className="mt-3 font-bold">
          Email:
        </label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="input"
        />
        <label htmlFor="password" className="mt-3 font-bold">
          Password:
        </label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="input"
        />
        <label htmlFor="staffId" className="mt-3 font-bold">
          StaffID:
        </label>
        <input
          type="number"
          name="staffId"
          value={formData.staffId}
          onChange={handleChange}
          className="input"
        />
        <label htmlFor="dateEmployed" className="mt-3 font-bold">
          Date Employed:
        </label>
        <input
          type="number"
          name="dateEmployed"
          value={formData.dateEmployed}
          onChange={handleChange}
          className="input"
        />
        <label htmlFor="salary" className="mt-3 font-bold">
          Salary
        </label>
        <input
          type="number"
          name="salary"
          value={formData.salary}
          onChange={handleChange}
          className="input"
        />
        <label htmlFor="dateEmployed" className="mt-3 font-bold">
          Pay Day
        </label>
        <input
          type="number"
          name="payDay"
          value={formData.payDay}
          onChange={handleChange}
          className="input"
        />
        <button
          type="submit"
          disabled={hasEmpty}
          className="w-full mt-2 text-white bg-blue-800 cursor-pointer px-3 py-1 font-bold hover:bg-green-500 rounded-md"
        >
          Register
        </button>
      </form>
      <div className="flex justify-center items-center p-1"></div>
    </div>
  );
};

export default AddUser;
