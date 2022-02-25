import React, { useContext } from "react";
import "./App.css";
import HomeScreen from "./pages/HomeScreen";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Context } from "./context/Context";
import Login from "./pages/Login";
import Favourites from "./pages/Favourites";

function App() {
  const user = useContext(Context);
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={user ? <HomeScreen /> : <Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route
            path="/login"
            element={user ? <Login /> : <HomeScreen />}
          ></Route>
          <Route path="/favourites" element={<Favourites />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
