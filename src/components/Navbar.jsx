import React from "react";

function Navbar() {
  return (
    <div className="navbar blue yellowtext">
      <div className="flex-1">
        <a
          className="btn btn-ghost normal-case text-2xl  hover:text-[#fdfafb] hover:bg-transparent"
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
              className="text-lg font-semibold  hover:text-[#fdfafb] "
            >
              Login
            </a>
          </li>
          <li>
            <a
              href="/register"
              className="text-lg font-semibold  hover:text-[#fdfafb]  "
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
