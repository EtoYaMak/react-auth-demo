import React, { useState } from "react";
import axios from "axios";
const LOGIN_URL = "/api/login";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(LOGIN_URL, {
        username: username,
        password: password,
      });

      if (response.data.message === "Login successful") {
        // Handle successful login, for example, redirect to a dashboard.
        // You can also set a user token or session here.
        // For this demo, let's just display a success message.
        alert("Login successful");
      } else {
        setErrMsg("Login failed");
      }
    } catch (error) {
      console.error(error);
      setErrMsg("An error occurred during login");
    }
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-2/3 min-w-fit my-10">
        <p className=""></p>
        <div className="text-center xl:text-left yellowtext  select-none">
          <h1 className="text-5xl font-bold uppercase">Login</h1>
        </div>
      </div>
      <form className="rounded-xl white shadow-2xl p-8 space-y-4 h-fit w-full sm:min-w-fit sm:w-[50vw]">
        <div className="form-control">
          <label className="label">
            <span className="text-md font-medium text-[#291E37]">Username</span>
          </label>
          <input
            type="text"
            placeholder="Username"
            className="input input-ghost blue1 focus:bg-[#202b42] focus:text-[#fdfafb] text-[#EFF4E9] boxshadow2
                placeholder:text-[#fdfafb] placeholder:opacity-70 focus:font-semibold focus:tracking-wide tracking-wide"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="text-md font-medium text-[#291E37]">Password</span>
          </label>
          <input
            type="password"
            placeholder="Password"
            className="input input-ghost blue1 focus:bg-[#202b42] focus:text-[#fdfafb] text-[#EFF4E9] boxshadow2
                placeholder:text-[#fdfafb] placeholder:opacity-70 focus:font-semibold focus:tracking-wide tracking-wide"
            required
          />
          <label className="">
            <a
              href="#"
              className="text-xs hover:underline text-[#EFF4E9]/70 hover:text-[#EFF4E9] ease-in-out duration-300"
            >
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control w-fit mx-auto mt-6 boxshadow1 rounded-xl bg-transparent">
          <button
            onClick={handleLogin}
            className="btn btn-ghost bg-[#EFF4E9] hover:bg-[#202b42]  text-[#202b42] hover:text-[#fdfafb]  text-md p-4 "
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
