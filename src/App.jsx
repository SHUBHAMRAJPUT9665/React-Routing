import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Card from "./components/Card";
import Login from "./components/Login";
import { useState } from "react";
import Nav from "./components/Nav";
function App() {

  return (
    <>
      <BrowserRouter>
      <Nav />
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/Card" element={<Card />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;