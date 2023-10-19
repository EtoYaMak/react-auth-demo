import React from "react";

import { BiCheck, BiX, BiInfoCircle } from "react-icons/bi";
const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

function Register() {
  return (
    <div className="hero xl:mt-[10vh] mt-[5vh] bg-none">
      <div className="hero-content flex-col w-full xl:flex-row xl:w-fit xl:gap-32 gap-10 ">
        <div className="text-center xl:text-left text-[#DFBB8E] select-none">
          <h1 className="text-5xl font-bold">Register</h1>
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
              <p className="flex text-sm text-white py-2 select-none">
                <BiInfoCircle size={18} className="text-[#291E37] mr-1 w-8" />
                4 to 24 characters.
                <br />
                Must begin with a letter.
                <br />
                Letters, numbers, underscores, hyphens allowed.
              </p>
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
              <p className="flex text-sm text-white py-2 select-none">
                <BiInfoCircle size={18} className="text-[#291E37] mr-1 w-8" />
                8 to 24 characters.
                <br />
                Must include uppercase and lowercase letters, a number and a
                special character.
                <br />
                Allowed special characters: ! @ # $ %
              </p>
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
              <p className="flex text-sm text-white py-2 select-none">
                <BiInfoCircle size={18} className="text-[#291E37] mr-1 w-8" />
                Must match the first password input field.
              </p>
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
