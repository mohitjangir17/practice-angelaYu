import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
function Todo() {
  const [todo, setTodo] = useState("");
  const [items, setItems] = useState([]);
  const [isDone, setIsDone] = useState(false);
  const handleChange = (e) => {
    const value = e.target.value;

    setTodo(value);
  };

  const handleClick = (e) => {
    e.preventDefault();

    // eslint-disable-next-line eqeqeq
    if (todo == 0) {
      alert("Type a Todo");
      return;
    } else {
      setItems((prevItems) => {
        return [...prevItems, [todo, isDone]];
      });
      setTodo("");
    }
  };

  const handleisDone = (index) => {
    // console.log(index);
    // setIsDone((prevValue) => {
    //   return (id) => !prevValue;
    // });
    const arrow = (index) => {
      console.log(index);
    };
  };

  return (
    <div className="Todo">
      <form>
        {/* <Input placeholder="Todo" value={todo} onChange={handleChange} /> */}
        <input placeholder="Todo" value={todo} onChange={handleChange} />
        <Button text="Add" onClick={handleClick} />
      </form>
      <section>
        {items.map((item, index) => (
          <li
            // id={index}
            onClick={() => {
              handleisDone(index);
            }}
            style={{
              textDecoration: isDone === true ? "line-through" : "none",
            }}
            // key={Math.floor(Math.random() * 10000)}
            key={index}
          >
            {item}
          </li>
        ))}
      </section>
    </div>
  );
}
export default Todo;
