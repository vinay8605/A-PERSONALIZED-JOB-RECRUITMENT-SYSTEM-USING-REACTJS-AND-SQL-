import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Navbar from "./navbar";
import About from "./about";
import Signup from "./signup";
import Signin from "./signin";
import Msignup from "./msignup";
import Msignin from "./msignin";
import Admin from "./admin";
import Manager from "./manager";
import Vendor from "./vendor";
import Client from "./client";
import Adminform from "./adminform";
import Vendoredit from "./vendoredit";
import Asignup from "./asignup";
import Asignin from "./asignin";
import Addjob from "./addjob";
import Manageredit from "./manageredit";
import Clientedit from "./clientedit";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path="/" element={<App/>}></Route>
      <Route path="/about" element={<About />} ></Route>
      <Route path="/signup" element={<Signup/>} ></Route>
      <Route path="/signin" element={<Signin/>} ></Route>
      <Route path="/msignup" element={<Msignup/>} ></Route>
      <Route path="/msignin" element={<Msignin/>}></Route>
      <Route path="/asignin" element={<Asignin/>} ></Route>
      <Route path="/asignup" element={<Asignup/>} ></Route>
      <Route path="/admin" element={<Admin/>}></Route>
      <Route path="/manager/:id" element={<Manager/>}></Route>
      <Route path="/vendor/:id" element={<Vendor/>}></Route>
      <Route path="/client/:id" element={<Client/>}></Route>
      <Route path="/adminform/:id" element={<Adminform/>}></Route>
      <Route path="/vendor/:vid/vendoredit/:id" element={<Vendoredit/>}></Route>
      <Route path="addjob/:id" element={<Addjob/>}></Route>
      <Route path="manageredit/:id" element={<Manageredit/>}></Route>
      <Route path="clientedit/:id" element={<Clientedit/>}></Route>
     
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
