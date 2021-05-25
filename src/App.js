import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Form from "./components/Form";
function App() {
  const isLoggedIn = false;
  return (
    <div className="App">
      <Header />
      {isLoggedIn === true ? <h1>Hello Mohit</h1> : <Form />}
      <Footer />
    </div>
  );
}

export default App;
