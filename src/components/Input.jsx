import React from "react";

function Input({ type, name, placeholder }) {
  return <input type={type} placeholder={placeholder} name={name} />;
}

export default Input;
