import React from "react";

function Register() {
  return (
    <div className="hero mt-10 bg-none">
      <div className="hero-content flex-col w-full xl:flex-row-reverse xl:w-fit ">
        <div className="text-center xl:text-left text-[#DFBB8E] select-none">
          <h1 className="text-5xl font-bold">Register</h1>
          <p className="py-6">Test</p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-[#B53C66]">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="text-md font-medium text-[#291E37]">
                  Username
                </span>
              </label>
              <input
                type="text"
                placeholder="Username"
                className="input input-ghost bg-[#291E37] focus:bg-[#DFBB8E] focus:text-[#291E37] text-[#EFF4E9] placeholder:text-[#DFBB8E]"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-md font-medium text-[#291E37]">
                  Password
                </span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-ghost bg-[#291E37] focus:bg-[#DFBB8E] focus:text-[#291E37] text-[#EFF4E9] placeholder:text-[#DFBB8E]"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-md font-medium text-[#291E37]">
                  Confirm Password
                </span>
              </label>
              <input
                type="password"
                placeholder="Confirm Password"
                className="input input-ghost bg-[#291E37] focus:bg-[#DFBB8E] focus:text-[#291E37] text-[#EFF4E9] placeholder:text-[#DFBB8E]"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-ghost bg-[#EFF4E9] hover:bg-[#DFBB8E] text-[#291E37] hover:text-white text-md ">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
