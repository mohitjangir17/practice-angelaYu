import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";

function Form2() {
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");

  const handleFChange = (e) => {
    setFName(e.target.value);
  };
  const handleLChange = (e) => {
    setLName(e.target.value);
  };

  const handleClick = () => {
    setFName(fname);
    setLName(lname);
  };

  return (
    <form className="form2">
      <h1>
        Hello {fname} {lname}
      </h1>
      <Input
        value={fname}
        onChange={handleFChange}
        type="text"
        placeholder="Firstname?"
      />
      <Input
        value={lname}
        onChange={handleLChange}
        type="text"
        placeholder="Lastname?"
      />

      <Button onClick={handleClick} text="Submit" />
    </form>
  );
}
export default Form2;
