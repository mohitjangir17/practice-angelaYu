import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Form2 from "./components/Form2";
import Time from "./components/Time";
import Contact from "./components/Contact";
import Todo from "./components/Todo";
function App() {
  const isLoggedIn = false;
  return (
    <div className="App">
      <Header />
      <Time />
      {/* {isLoggedIn === true ? <h1>Hello Mohit</h1> : <Form />} */}
      {/* <Form2 /> */}
      {/* <Contact /> */}
      <Todo />
      <Footer />
    </div>
  );
}

export default App;
