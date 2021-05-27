import React from "react";

function Input({ onChange, type, name, placeholder }) {
  return (
    <input
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      name={name}
    />
  );
}

export default Input;
