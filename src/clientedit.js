import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./clientedit.css";
import { useNavigate } from "react-router-dom";

export default function Clientedit() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const usenav = useNavigate();

  useEffect(() => {
    console.log("this is useeffect");
    axios.get(`http://localhost:5000/clientedit/${id}`).then((res) => {
      setData(res.data);
      setData({
        jobtitle: res.data[0].jobtitle,
        jobdescription: res.data[0].jobdescription,
        experience: res.data[0].experience,
        noofpositions: res.data[0].noofpositions,
        jobstatus: res.data[0].jobstatus,
        vendorid: res.data[0].vendorid,
        managerreply: res.data[0].managerreply,
      });
    });
  }, [id]);

  const handler = (e) => {
    const { name, value } = e.target;

    setData((prevState) => ({ ...prevState, [name]: value }));
  };

  const update = () => {
    const firstname = {
      jobtitle: data.jobtitle,
      jobdescription: data.jobdescription,
      experience: data.experience,
      noofpositions: data.noofpositions,
      jobstatus: data.jobstatus,
      vendorid: data.vendorid,
      managerreply: data.managerreply,
    };
    axios
      .post(`http://localhost:5000/clientupdate/${id}`, firstname)
      .then((res) => {
        console.log(res.data);

        data.firstname = "";
      });
    usenav(-1);
  };

  return (
    <div>
      <div id="me2">
        <center>
          <h2>
            <em className="Client2">Client Edit</em>
          </h2>
          <hr />
        </center>
        <div id="labeldiv2">
          <label className="velabel2">Job Title</label>
          <input
            type="text"
            className="veinput2"
            name="jobtitle"
            value={data.jobtitle}
            onChange={handler}
          />
          <label className="velabel2">Job Description</label>
          <input
            type="text"
            className="veinput2"
            name="jobdescription"
            value={data.jobdescription}
            onChange={handler}
          />
          <label className="velabel2">Experience</label>
          <input
            type="text"
            className="veinput2"
            name="experience"
            value={data.experience}
            onChange={handler}
          />
          <label className="velabel2">No.Of.Positions</label>
          <input
            type="text"
            className="veinput2"
            name="noofpositions"
            value={data.noofpositions}
            onChange={handler}
          />
          <br />
          <label className="velabel2">Job Status</label>
          <input
            type="text"
            className="veinput2"
            name="jobstatus"
            value={data.jobstatus}
            onChange={handler}
            readOnly
          />
          <label className="velabel2">Assign to Vendor</label>
          <input
            type="text"
            className="veinput2"
            name="vendorid"
            value={data.vendorid}
            onChange={handler}
            readOnly
          />
          <label className="velabel2">Reply from Manager</label>
          <input
            type="text"
            className="veinput2"
            name="managerreply"
            value={data.managerreply}
            onChange={handler}
            readOnly
          />
        </div>
        <button id="vebtn2" onClick={update}>
          Update
        </button>
      </div>
    </div>
  );
}
