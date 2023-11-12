import "./signin.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link,useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";


export default function Signin() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const usenav = useNavigate();
  const [show, setShow] = useState(false);

  const handler9 = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({ ...prevState, [name]: value }));
  };

  const SubmitHandler9 = () => {
    setShow(true);
    const username = {
      email: data.email,
      password: data.password,
    };
    axios
      .post("http://localhost:5000/signin", username)
      .then((res) => {
        if (res.data && res.data.length > 0) {
          console.log(res.data[0].role, res.data[0].username,res.data[0].status);
          localStorage.setItem("id",res.data[0].id);
          localStorage.setItem("Role", res.data[0].role);
          localStorage.setItem("username", res.data[0].username);
          localStorage.setItem("status", res.data[0].status);
          setData(res.data);
          if (res.data[0].role === "Vendor" &&  res.data[0].status==='Active') {
            alert("Logged in successfully as Vendor");
            usenav(`/vendor/${res.data[0].id}`);
          } else if (res.data[0].role === "Client" &&  res.data[0].status==='Active') {
            alert("Logged in successfully as Client");
            usenav(`/client/${res.data[0].id}`);
          } 
          else {
            alert("Please wait until Admin approves try again later");
          }
        } else {
          alert("Invalid response from the server");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred. Please try again later.");
      });
  };
  return (
    <div className="container2">
      
        <center>
          <img
            src="https://i.pinimg.com/originals/d5/b0/4c/d5b04cc3dcd8c17702549ebc5f1acf1a.png"
            alt="noimg"
            height={"90px"}
          />
          <br />
          <h1>Sign in</h1>
        </center>
        <center>
        <i id="personicon1" class="bi bi-envelope-at-fill"></i>
        <input
          className="sin1"
          type="email"
          name="email"
          placeholder="Email..."
          value={data.email}
          onChange={handler9}
          required
        /><br></br>
        <i id="personicon1" class="bi bi-person-fill-lock"></i>
        <input
          className="sin1"
          type="password"
          name="password"
          placeholder="Password..."
          value={data.password}
          onChange={handler9}
          required
        />
        </center>
        <center style={{ marginTop: "10px" }}>
          {" "}
          <button id="rbtn1" onClick={SubmitHandler9}>
            <b>Sign in </b>
          </button>
          <p className="sign1">
            Don`t have an account{" "}
            <Link to="/signup" className="signin-link1">
              Sign up
            </Link>
          </p>
          <Link to="/Asignup" id="admin">
            Admin 
          </Link>
          <Link to="/msignin" id="admin1">
            Manager Signin
          </Link>
        </center>
      
    </div>
  );
};

