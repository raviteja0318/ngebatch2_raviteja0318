//import React from "react";
import { useNavigate } from "react-router-dom";

export default function Aboutus() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home");
  };
  return (
    <>
      <div>Aboutus</div>
      <button onClick={handleClick}>Home</button>
    </>
  );
}
