import "./asignin.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Asignin() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const usenav = useNavigate();
  const [show, setShow] = useState(false);

  const handler3 = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({ ...prevState, [name]: value }));
  };

  const SubmitHandler3 = () => {
    setShow(true);
    const username = {
      email: data.email,
      password: data.password,
    };
    axios
      .post("http://localhost:5000/asignin", username)
      .then((res) => {
        if (res.data && res.data.length > 0) {
          console.log(res.data[0].Role, res.data[0].username);
          localStorage.setItem("Role", res.data[0].Role);
          localStorage.setItem("username", res.data[0].username);
          setData(res.data);
          if (res.data[0].id !== "") {
            alert("Logged in successfully as Admin");
            usenav("/admin");
          } else {
            alert("Invalid login. Please try again.");
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
    <div className="container3">
      <center>
        <img
          src="https://i.pinimg.com/originals/d5/b0/4c/d5b04cc3dcd8c17702549ebc5f1acf1a.png"
          alt="noimg"
          height={"90px"}
        />
        <br />
        <h1>Admin Login</h1>
      </center>
      <br />
      <center>
        <i id="personicon2" class="bi bi-person-circle"></i>
        <input
          className="sin2"
          type="email"
          name="email"
          placeholder="Email..."
          value={data.email}
          onChange={handler3}
          required/>
        <br></br>
        <i id="personicon2" class="bi bi-person-fill-lock"></i>
        <input
          className="sin2"
          type="password"
          name="password"
          placeholder="Password..."
          value={data.password}
          onChange={handler3}
          required/>
      </center>
      <button id="rbtn2" onClick={SubmitHandler3} >
        <b>Sign in</b>
      </button>
    </div>
  );
}