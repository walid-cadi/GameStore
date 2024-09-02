import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className="py-4 flex items-center justify-center gap-x-4 text-white  bg-gray-600">
      <h1 onClick={() => { navigate("/");}} className="cursor-pointer">Home</h1>
      <Link to={"/todo"}>ToDo</Link>
    </div>
  );
};
