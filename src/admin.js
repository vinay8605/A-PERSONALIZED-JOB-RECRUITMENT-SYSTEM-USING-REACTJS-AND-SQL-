import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const tableStyle1 = {
  border: "3px solid #0ef",
  borderCollapse: "collapse",
  backgroundColor: "black",
  width: "100%",
  marginTop: "20px",
  color: "white",
  textAlign: "center",
};
const tableStyle2 = {
  border: "3px solid #0ef",
  borderCollapse: "collapse",
  backgroundColor: "black",
  color: "#0ef",
};
const tableStyle3 = {
  border: "3px solid #0ef",
  borderCollapse: "collapse",
  backgroundColor: "black",
  color: "white",
};
const buttonStyle = {
  borderRadius: "5px",
  border: "none",
  backgroundColor: "#0ef",
  boxShadow: "0 0 5px #0ef",
  cursor: "pointer",
};
const linkstyle = {
  textDecoration: 'none',
  color:"black"
}
export default function Admin() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/admin").then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <div className="table-container">
      <table style={tableStyle1}>
        <thead>
          <th style={tableStyle2}>ID</th>
          <th style={tableStyle2}>Username</th>
          <th style={tableStyle2}>Email</th>
          <th style={tableStyle2}>MOBILE</th>
          <th style={tableStyle2}>organization</th>
          <th style={tableStyle2}>Role</th>
          <th style={tableStyle2}>Status</th>
          <th style={tableStyle2}>Edit</th>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr style={tableStyle1}>
              <td style={tableStyle3}>{item.id}</td>
              <td style={tableStyle3}>{item.username}</td>
              <td style={tableStyle3}>{item.email}</td>
              <td style={tableStyle3}>{item.mobile}</td>
              <td style={tableStyle3}>{item.organization}</td>
              <td style={tableStyle3}>{item.role}</td>
              <td style={tableStyle3}>{item.status}</td>
              <td>
                <button style={buttonStyle}>
                  <Link to={`/adminform/${item.id}`} style={linkstyle}> Edit</Link>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
