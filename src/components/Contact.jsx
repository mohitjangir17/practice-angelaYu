import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";

function Contact() {
  const [contact, setContact] = useState({
    fname: "",
    lname: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setContact((prevValue) => {
      if (name === "fname") {
        return {
          fname: value,
          lname: prevValue.lname,
          email: prevValue.email,
        };
      }
      if (name === "lname") {
        return {
          fname: prevValue.fname,
          lname: value,
          email: prevValue.email,
        };
      }
      if (name === "email") {
        return {
          fname: prevValue.fname,
          lname: prevValue.lname,
          email: value,
        };
      }
    });
  };

  return (
    <form className="form2">
      <h1>
        Hello {contact.fname} {contact.lname}
      </h1>
      <p>Email: {contact.email}</p>
      <Input
        name="fname"
        value={contact.fname}
        onChange={handleChange}
        type="text"
        placeholder="Firstname?"
      />
      <Input
        name="lname"
        value={contact.lname}
        onChange={handleChange}
        type="text"
        placeholder="Lastname?"
      />
      <Input
        name="email"
        value={contact.email}
        onChange={handleChange}
        type="text"
        placeholder="Email"
      />

      {/* <Button onClick={handleClick} text="Submit" /> */}
    </form>
  );
}
export default Contact;
