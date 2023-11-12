import "bootstrap-icons/font/bootstrap-icons.css";
import "./asignup.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Asignup() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    Role:"Admin",
  });
  const [show, setShow] = useState(false);

  const handler2 = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({ ...prevState, [name]: value }));
  };

  const SubmitHandler2 = () => {
    setShow(true);
    const username = {
      username: data.username,
      email: data.email,
      password: data.password,
      Role:"Admin",
    };
    axios.post("http://localhost:5000/asignup", username).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  };

  return (
    <>
      <div id="jar">
        <form>
          <center>
            <img
              src="https://i.pinimg.com/originals/d5/b0/4c/d5b04cc3dcd8c17702549ebc5f1acf1a.png"
              alt="noimg"
              height={"90px"}
            />
            <br />
            <h4>Admin Sign Up</h4>
          </center>
          <div className="inputc">
          <i  class="bi bi-person-circle"></i>
          <input
            className="hello"
            type="tex"
            name="username"
            placeholder="Username..."
            value={data.username}
            onChange={handler2}
            required
          />
          </div>
          <div className="inputc">
          <i  class="bi bi-envelope-at-fill"></i>
          <input
            className="hello"
            type="email"
            name="email"
            placeholder="Email..."
            value={data.email}
            onChange={handler2}
            required
          />
          </div>
          
          <div className="inputc" >
            <i id="person" class="bi bi-person-fill-lock "></i>
            <input
              className="hello"
              type="password"
              name="password"
              placeholder="Password..."
              value={data.password}
              onChange={handler2}
              required
            />
          </div>
          <center style={{ marginTop: "10px" }}>
            <button id="registerb" onClick={SubmitHandler2}>
              <b>Register</b>
            </button>
            <div className="asl">
            <Link to="/asignin" className="asl1">
              Admin Login
            </Link>
            </div>
          </center>
        </form>
      </div>
    </>
  );
}
