import React, { useState, useEffect } from "react";
import "./adminform.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function UserForm() {
  const [data, setData] = useState({
    username: "",
    email: "",
    mobile: "",
    organization: "",
    role: "",
    status: "",
  });
  const { id } = useParams();
  const usenav = useNavigate();

  useEffect(() => {
    console.log("this is use effect");
    axios.get(`http://localhost:5000/adminedit/${id}`).then((res) => {
      console.log(res.data);
      setData({
        username: res.data[0].username,
        email: res.data[0].email,
        mobile: res.data[0].mobile,
        organization: res.data[0].organization,
        role: res.data[0].role,
        status: res.data[0].status,
      });
    });
  }, [id]);

  const handler8 = (e) => {
    const { name, value } = e.target;

    setData((prevState) => ({ ...prevState, [name]: value }));
  };

  const submitHandler8 = () => {
    const firstname = {
      username: data.username,
      email: data.email,
      mobile: data.mobile,
      organization: data.organization,
      role: data.role,
      status: data.status,
    };
    axios
      .post(`http://localhost:5000/adminupdate/${id}`, firstname)
      .then((res) => {
        console.log(res.data);
      });
    usenav("/admin");
  };

  return (
    <div className="user-form-container">
      <h2>Admin Edit Form</h2>
      <form className="user-form">
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            className="inbuilt"
            name="username"
            value={data.username}
            onChange={handler8}
            readOnly
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            className="inbuilt"
            name="email"
            value={data.email}
            onChange={handler8}
            readOnly
          />
        </div>
        <div className="form-group">
          <label>Mobile:</label>
          <input
            type="text"
            className="inbuilt"
            name="mobile"
            value={data.mobile}
            onChange={handler8}
            readOnly
          />
        </div>
        <div className="form-group">
          <label>Organization:</label>
          <input
            type="text"
            className="custom-input"
            name="organization"
            value={data.organization}
            onChange={handler8}
            readOnly
          />
        </div>
        <div className="form-group">
          <label>Role:</label>&emsp;&emsp;&nbsp;&nbsp;
          <div className="dropdown-container">
            <input
              className="cusin"
              type="text"
              value={data.role}
              readOnly
              placeholder="Select Role"
            />

            <select name="role" onChange={handler8}>
              <option>Select Role</option>
              <option value={data.client}>Client</option>
              <option value={data.vendor}>Vendor</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label>Status:</label>
          <div className="dropdown-container">
            <input
              className="cusin"
              type="text"
              value={data.status}
              readOnly
              placeholder="Select Status"
            />

            <select name="status" onChange={handler8}>
              <option value="">Select Status</option>
              <option value={data.active}>Active</option>
              <option value={data.inactive}>Inactive</option>
            </select>
          </div>
        </div>
        <button onClick={submitHandler8} className="sbtn">
          Update
        </button>
      </form>
    </div>
  );
}
