import "./signup.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Signup() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    phonenumber: "",
    organisation: "",
    role: "undefine",
    status: "inactive",
  })
  const [show, setShow] = useState(false);
  
  const handler = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({ ...prevState, [name]: value }))
  }
  
  const SubmitHandler = () => {
    setShow(true);
    const username = {
      username: data.username,
      email: data.email,
      password: data.password,
      mobile: data.mobile,
      organization: data.organization,
      role: "undefine",
      status: "inactive",
    }
    axios.post("http://localhost:5000/signup", username).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  };

  
  return (
    <>
      <div id="container">
          <form>
            <center>
              <img
                src="https://i.pinimg.com/originals/d5/b0/4c/d5b04cc3dcd8c17702549ebc5f1acf1a.png"
                alt="noimg"
                height={"90px"}
              />
              <br />
              <h3>Sign up</h3>
            </center>
            <i id="personicon" class="bi bi-person-circle"></i>
            <input
              className="sin"
              type="text"
              name="username"
              placeholder="Username..."
              value={data.username}
              onChange={handler}
              required
            />

            <i id="mailicon" class="bi bi-envelope-at-fill"></i>
            <input
              className="sin"
              type="email"
              name="email"
              placeholder="Email..."
              value={data.email}
              onChange={handler}
              required
            />
            <br />
            <div id="div2">
              <i id="personicon" class="bi bi-person-fill-lock"></i>
              <input
                className="sin"
                type="password"
                name="password"
                placeholder="Password..."
                value={data.password}
                onChange={handler}
                required
              />
              <i id="mailicon" class="bi bi-telephone-plus-fill"></i>
              <input
                className="sin"
                type="tel"
                name="mobile"
                placeholder="Phone number..."
                value={data.mobile}
                onChange={handler}
                required
              />
            </div>
            <div id="div2">
              <i id="personicon" class="bi bi-buildings-fill"></i>
              <input
                className="sin"
                type="text"
                id="organization"
                name="organization"
                placeholder="organization.."
                value={data.organization}
                onChange={handler}
                required
              />
            </div>
            <center style={{ marginTop: "10px" }}>
              {" "}
              <button id="rbtn" onClick={SubmitHandler}>
                <b>Register</b>
              </button>
              <p className="sign">
                Already have an account{" "}
                <Link to="/signin" className="signin-link">
                  Sign in
                </Link>
              </p>
              <Link to="/msignup" id="manager">
                Manager Signup
              </Link>
            </center>
          </form>
      
      </div>
    </>
  )
}

