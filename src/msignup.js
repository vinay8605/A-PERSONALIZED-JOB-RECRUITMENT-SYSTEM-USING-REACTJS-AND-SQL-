import "bootstrap-icons/font/bootstrap-icons.css";
import "./msignup.css";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Msignup() {
  const [vendor,setVendor]=useState([]);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    phonenumber: "",
    vendorid: "",
  });
  useEffect(()=>{
    axios.get('http://localhost:5000/vendornames').then((res)=>{
      setVendor(res.data);
    })
  });
  

  const handler1 = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({ ...prevState, [name]: value }));
  };

  const SubmitHandler1 = () => {
    const username = {
      username: data.username,
      email: data.email,
      password: data.password,
      mobile: data.mobile,
      vendorid: data.vendorid,
    };
    axios.post("http://localhost:5000/msignup", username).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  };
  return (
    <>
      <div id="container1">
        <form>
          <center>
            <img
              src="https://i.pinimg.com/originals/d5/b0/4c/d5b04cc3dcd8c17702549ebc5f1acf1a.png"
              alt="noimg"
              height={"90px"}
            />
            <br />
            <h3>Manager Sign Up</h3>
          </center>
          <i id="personicon" class="bi bi-person-circle"></i>
          <input
            className="sin"
            type="tex"
            name="username"
            placeholder="Username..."
            value={data.username}
            onChange={handler1}
            required
          />
          <i id="mailicon" class="bi bi-envelope-at-fill"></i>
          <input
            className="sin"
            type="email"
            name="email"
            placeholder="Email..."
            value={data.email}
            onChange={handler1}
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
              onChange={handler1}
              required
            />
            <i id="mailicon" class="bi bi-telephone-plus-fill"></i>
            <input
              className="sin"
              type="text"
              name="mobile"
              placeholder="Phone number..."
              value={data.mobile}
              onChange={handler1}
              required
            />
          </div>
          <div id="div2">
            <i id="personicon" class="bi bi-buildings-fill"></i>
            <select
              className="sin"
              name="vendorid"
              onChange={handler1}
              required
            >
              <option>vendorid</option>
            {vendor.map((item) => (
              <>
                <option value={item.id}>{item.username}</option>
              </>
            ))}
            </select>
          </div>
          <center style={{ marginTop: "10px" }}>
            <button id="rbtn" onClick={SubmitHandler1}>
              <b>Register</b>
            </button>
            <p className="signn">
              Already have an account{" "}
              <Link to="/msignin" className="signin-link">
                Sign in
              </Link>
            </p>
          </center>
        </form>
      </div>
    </>
  );
}
