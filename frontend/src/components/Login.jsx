import React, { useEffect, useState } from "react";
import "./Styles.css";
import { DoorClosedLocked, LockKeyhole } from "lucide-react";
import axios from "axios";
const Login = () => {
  const [profile, setProfile] = useState({
    username: "",
    tick: false,
    password: "",
  });
  const [blink, setBlink] = useState(true);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProfile((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/auth/adminlogin", profile)
      .then((result) => {
        console.log(result);
        setProfile({ username: "", password: "", tick: false });
      })
      .catch((error) => {
        console.log(`An error occured: ${error}`);
      });
  };

  const getLoggedInUsers = (e) => {
    e.preventDefault();
    axios
      .get("http://localhost:3000/users")
      .then((result) => {
        result.data.map((user) => {
          console.log(user.username, user.password);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const blink = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 1500);
    return () => clearTimeout(blink);
  }, [blink]);

  return (
    <div className="flex w-full flex-col justify-center items-center min-h-screen login-page">
      <form
        className="flex flex-col  p-2 rounded-md w-80 text-purple-800  border-2 border-black"
        onSubmit={handleSubmit}
      >
        <div className="flex justify-around items-center">
          <DoorClosedLocked className="text-red-800 font-extrabold" />
          {blink && (
            <h1 className="text-center shadow-text text-2xl font-bold">
              Admin Login{" "}
            </h1>
          )}
          <LockKeyhole className="text-red-800" />
        </div>
        <label htmlFor="username" className=" font-bold">
          Username:
        </label>
        <input
          type="text"
          name="username"
          value={profile.username}
          onChange={handleChange}
          className="input"
        />
        <label htmlFor="password" className="mt-3 font-bold">
          Password:
        </label>
        <input
          type="password"
          name="password"
          value={profile.password}
          onChange={handleChange}
          className="input"
        />
        <button
          type="submit"
          disabled={!profile.tick}
          className="w-full mt-2 text-white bg-blue-800 cursor-pointer px-3 py-1 font-bold hover:bg-green-500 rounded-md"
        >
          Login
        </button>
        <div className="flex itms-center">
          <input
            type="checkbox"
            name="tick"
            id="tick"
            checked={profile.tick}
            onChange={handleChange}
            className="cursor-pointer"
          />
          <label htmlFor="tick">You agree with the terms & conditions</label>
        </div>
      </form>
      <div className="flex justify-center items-center p-1">
        <button
          onClick={getLoggedInUsers}
          className="w-full mt-2 text-white bg-blue-800 cursor-pointer px-3 py-1 font-bold hover:bg-green-500 rounded-md"
        >
          Get Logged In Users
        </button>
      </div>
    </div>
  );
};

export default Login;
