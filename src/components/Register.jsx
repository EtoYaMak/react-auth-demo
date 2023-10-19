import React from "react";
import { useRef, useState, useEffect } from "react";

import { BiCheck, BiX, BiInfoCircle } from "react-icons/bi";
import axios from "axios";
const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = "/register";
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    // if button enabled with JS hack
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }
    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({ user, pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      // TODO: remove console.logs before deployment
      console.log(JSON.stringify(response?.data));
      //console.log(JSON.stringify(response))
      setSuccess(true);
      //clear state and controlled inputs
      setUser("");
      setPwd("");
      setMatchPwd("");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("Username Taken");
      } else {
        setErrMsg("Registration Failed");
      }
      errRef.current.focus();
    }
  };
  return (
    <div className="hero xl:mt-[10vh] mt-[5vh] bg-none">
      <div className="hero-content flex-col w-full xl:flex-row xl:w-fit xl:gap-32 gap-10 ">
        <p
          ref={errRef}
          className={`text-sm select-none bg-[#EFF4E9] text-[#B53C66] rounded-lg ${
            errMsg ? "errmsg" : "offescreen"
          }`}
          aria-live="assertive"
        >
          {errMsg}
        </p>
        <div className="text-center xl:text-left text-[#DFBB8E] select-none">
          <h1 className="text-5xl font-bold">Register</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-[#B53C66]">
          <form className="card-body">
            <div className="form-control">
              <label htmlFor="username" className="label flex justify-start">
                <span className="text-md font-medium text-[#291E37]">
                  Username
                </span>
                <BiCheck
                  size={24}
                  className={`text-[#291E37] ${validName ? "valid" : "hide"}`}
                />
                <BiX
                  size={24}
                  className={`text-[#291E37] ${
                    validName || !user ? "hide" : "invalid"
                  } `}
                />
              </label>
              <input
                type="text"
                id="username"
                ref={userRef}
                placeholder="Username"
                className="input input-ghost bg-[#291E37] focus:bg-[#DFBB8E] focus:text-[#291E37] text-[#EFF4E9] placeholder:text-[#DFBB8E]"
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
                className={`flex text-sm text-white py-2 select-none ${
                  userFocus && user && !validName ? "instructions" : "offscreen"
                }`}
              >
                <BiInfoCircle size={18} className="text-[#291E37] mr-1 w-8" />
                4 to 24 characters.
                <br />
                Must begin with a letter.
                <br />
                Letters, numbers, underscores, hyphens allowed.
              </p>
            </div>
            <div className="form-control">
              <label className="label flex justify-start">
                <span className="text-md font-medium text-[#291E37]">
                  Password
                </span>
                <BiCheck
                  size={24}
                  className={`text-[#291E37] ${validPwd ? "valid" : "hide"}`}
                />
                <BiX
                  size={24}
                  className={`text-[#291E37] ${
                    validPwd || !pwd ? "hide" : "invalid"
                  } `}
                />
              </label>
              <input
                placeholder="Password"
                className="input input-ghost bg-[#291E37] focus:bg-[#DFBB8E] focus:text-[#291E37] text-[#EFF4E9] placeholder:text-[#DFBB8E]"
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
              <label htmlFor="confirm_pwd" className="label flex justify-start">
                <span className="text-md font-medium text-[#291E37]">
                  Confirm Password
                </span>
                <BiCheck
                  size={24}
                  className={`text-[#291E37] ${
                    validMatch && matchPwd ? "valid" : "hide"
                  }`}
                />
                <BiX
                  size={24}
                  className={`text-[#291E37] ${
                    validMatch || !matchPwd ? "hide" : "invalid"
                  } `}
                />
              </label>
              <input
                placeholder="Confirm Password"
                className="input input-ghost bg-[#291E37] focus:bg-[#DFBB8E] focus:text-[#291E37] text-[#EFF4E9] placeholder:text-[#DFBB8E]"
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
                className={`flex text-sm text-white py-2 select-none ${
                  matchFocus && !validMatch ? "instructions" : "offscreen"
                }`}
              >
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
