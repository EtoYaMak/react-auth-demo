import React from "react";

function Navbar() {
  return (
    <div className="navbar bg-[#B53C66]">
      <div className="flex-1">
        <a
          className="btn btn-ghost normal-case text-2xl text-[#EFF4E9] hover:text-[#291E37]/90 hover:bg-transparent"
          href="/"
        >
          react-auth-demo
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a
              href="/login"
              className="text-lg font-semibold text-[#EFF4E9] hover:text-[#291E37] hover:bg-[#DFBB8E]"
            >
              Login
            </a>
          </li>
          <li>
            <a
              href="/register"
              className="text-lg font-semibold text-[#EFF4E9] hover:text-[#291E37] hover:bg-[#DFBB8E]"
            >
              Register
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
