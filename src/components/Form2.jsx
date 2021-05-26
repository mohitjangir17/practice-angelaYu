import React from "react";
import Input from "./Input";
import Button from "./Button";

function Form2() {
  return (
    <form className="form">
      <Input type="text" name="username" placeholder="Username" />
      <Input type="password" name="password" placeholder="Password" />
      <Button type="submit" text="Login" />
    </form>
  );
}
export default Form2;
