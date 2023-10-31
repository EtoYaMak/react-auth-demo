import React from "react";
import { useRef, useState, useEffect } from "react";

import { BiCheck, BiX, BiInfoCircle } from "react-icons/bi";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

function Register() {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {}, []);

  useEffect(() => {
    setValidName(USER_REGEX.test(user));
  }, [user]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-2/3 min-w-fit my-10">
        <div className="text-center xl:text-left yellowtext select-none backdrop-blur-[1px] w-fit mx-auto rounded-xl p-2">
          <h1 className="text-5xl font-bold uppercase">Register</h1>
          <p className="text-white opacity-50 italic text-sm">
            This is a frontend demo and has no backend functionality!
          </p>
        </div>
      </div>
      <form className="rounded-xl white shadow-2xl p-8 space-y-4 h-fit w-full sm:w-[50vw]">
        <div className="form-control ">
          <label htmlFor="username" className="label flex justify-start">
            <span className="text-md font-medium text-[#202b42]">Username</span>
            <BiCheck
              size={24}
              className={`text-[#202b42] ${validName ? "valid" : "hide"}`}
            />
            <BiX
              size={24}
              className={`text-[#202b42] ${
                validName || !user ? "hide" : "invalid"
              } `}
            />
          </label>
          <input
            type="text"
            id="username"
            ref={userRef}
            placeholder="Username"
            className="input input-ghost blue1 focus:bg-[#202b42] focus:text-[#fdfafb] text-[#EFF4E9]
                placeholder:text-[#fdfafb] placeholder:opacity-70 focus:font-semibold focus:tracking-wide tracking-wide boxshadow2"
            autoComplete="off"
            onChange={(e) => setUser(e.target.value)}
            value={user}
            required
            aria-invalid={validName ? "false" : "true"}
            aria-describedby="uidnote"
            onFocus={() => setUserFocus(true)}
            onBlur={() => setUserFocus(false)}
          />
          <p
            className={`flex text-sm text-white py-2 select-none  ${
              userFocus && user && !validName ? "instructions" : "offscreen"
            }`}
          >
            <BiInfoCircle size={18} className="text-[#d9dc33] mr-1 w-8" />
            4 to 24 characters.
            <br />
            Must begin with a letter.
            <br />
            Letters, numbers, underscores, hyphens allowed.
          </p>
        </div>
        <div className="form-control">
          <label className="label flex justify-start">
            <span className="text-md font-medium text-[#291E37]">Password</span>
            <BiCheck
              size={24}
              className={`text-[#202b42] ${validPwd ? "valid" : "hide"}`}
            />
            <BiX
              size={24}
              className={`text-[#202b42] ${
                validPwd || !pwd ? "hide" : "invalid"
              } `}
            />
          </label>
          <input
            placeholder="Password"
            className="input input-ghost blue1 focus:bg-[#202b42] focus:text-[#fdfafb] text-[#EFF4E9]
                placeholder:text-[#fdfafb] placeholder:opacity-70 focus:font-semibold focus:tracking-wide tracking-wide boxshadow2 "
            type="password"
            id="password"
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            required
            aria-invalid={validPwd ? "false" : "true"}
            aria-describedby="pwdnote"
            onFocus={() => setPwdFocus(true)}
            onBlur={() => setPwdFocus(false)}
          />
          <p
            className={`flex text-sm text-white py-2 select-none ${
              pwdFocus && !validPwd ? "instructions" : "offscreen"
            }`}
          >
            <BiInfoCircle size={18} className="text-[#d9dc33] mr-1 w-8 " />
            8 to 24 characters.
            <br />
            Must include uppercase and lowercase letters, a number and a special
            character.
            <br />
            Allowed special characters: ! @ # $ %
          </p>
        </div>
        <div className="form-control">
          <label htmlFor="confirm_pwd" className="label flex justify-start">
            <span className="text-md font-medium text-[#291E37]">
              Confirm Password
            </span>
            <BiCheck
              size={24}
              className={`text-[#202b42] ${
                validMatch && matchPwd ? "valid" : "hide"
              }`}
            />
            <BiX
              size={24}
              className={`text-[#202b42] ${
                validMatch || !matchPwd ? "hide" : "invalid"
              } `}
            />
          </label>
          <input
            placeholder="Confirm Password"
            className="input input-ghost blue1 focus:bg-[#202b42] focus:text-[#fdfafb] text-[#EFF4E9]
                placeholder:text-[#fdfafb] placeholder:opacity-70 focus:font-semibold focus:tracking-wide tracking-wide boxshadow2"
            type="password"
            id="confirm_pwd"
            onChange={(e) => setMatchPwd(e.target.value)}
            value={matchPwd}
            required
            aria-invalid={validMatch ? "false" : "true"}
            aria-describedby="confirmnote"
            onFocus={() => setMatchFocus(true)}
            onBlur={() => setMatchFocus(false)}
          />
          <p
            className={`flex text-sm text-white py-2 select-none  ${
              matchFocus && !validMatch ? "instructions" : "offscreen"
            }`}
          >
            <BiInfoCircle size={18} className="text-[#d9dc33] mr-1 w-8" />
            Must match the first password input field.
          </p>
        </div>
        <div className="form-control w-fit mx-auto mt-6 boxshadow1 rounded-xl bg-transparent">
          <button className="btn btn-ghost bg-none hover:bg-[#202b42]  text-[#202b42] hover:text-[#fdfafb]  text-md p-4 ">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
