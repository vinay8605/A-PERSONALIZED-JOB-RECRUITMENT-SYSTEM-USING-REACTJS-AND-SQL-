import React from "react";
import "./vendoredit.css";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function Vendoredit() {
  const [data, setData] = useState({
    jobtitle: "",
    jobdescription: "",
    experience: "",
    noofpositions: "",
    jobstatus: "",
    managerid: "",
  });
  const [drop, setDrop] = useState([]);
  const {vid} = useParams();
  const { id } = useParams();
  const usenav = useNavigate();
  console.log(vid);

  useEffect(() => {
    console.log("this is useeffect");
    axios.get(`http://localhost:5000/managerid/${vid}`).then((res) => {
      setDrop(res.data);
      console.log(res.data);
    });
  }, [vid]);

  useEffect(() => {
    console.log("this is use effect");
    axios.get(`http://localhost:5000/singlemanager/${id}`).then((res) => {
      // console.log(res.data);
      setData({
        jobtitle: res.data[0].jobtitle,
        jobdescription: res.data[0].jobdescription,
        experience: res.data[0].experience,
        noofpositions: res.data[0].noofpositions,
        jobstatus: res.data[0].jobstatus,
      });
    });
  }, [id]);

  const handler = (e) => {
    const { name, value } = e.target;

    setData((prevState) => ({ ...prevState, [name]: value }));
  };

  const Update = () => {
    const firstname = {
      jobtitle: data.jobtitle,
      jobdescription: data.jobdescription,
      experience: data.experience,
      noofpositions: data.noofpositions,
      jobstatus: data.jobstatus,
      managerid: data.managerid,
    };
    axios
      .post(`http://localhost:5000/managerassign/${id}`, firstname)
      .then((res) => {
        console.log(res.data);

        data.firstname = "";
      });
    usenav(`/vendor/${vid}`);
  };

  return (
    <div id="ve">
      <center>
        <h2>
          <em className="head">Assign Manager</em>
        </h2>
        <hr />
      </center>
      <div id="labeldiv">
        <label className="velabel">Job Title</label>
        <input
          type="text"
          className="veinput"
          name="jobtitle"
          value={data.jobtitle}
        />
        <label className="velabel">Job Description</label>
        <input
          type="text"
          className="veinput"
          name="jobdescription"
          value={data.jobdescription}
        />
        <label className="velabel">Experience</label>
        <input
          type="text"
          className="veinput"
          name="experience"
          value={data.experience}
        />
        <label className="velabel">No.Of.Positions</label>
        <input
          type="text"
          className="veinput"
          name="noofpositions"
          value={data.noofpositions}
        />
        <label className="velabel">Job Status</label>
        <input
          type="text"
          className="veinput"
          name="jobstatus"
          value={data.jobstatus}
        />
        <label className="velabel">Assign To Manager</label>
        <select
          name="managerid"
          id="drop"
          className="veinput"
          onChange={handler}
        >
          <option>select</option>
          {drop.map((item) => (
            <option value={item.id}>{item.username}</option>
          ))}
        </select>
      </div>
      <button className="vebtn" onClick={Update}>
        Submit
      </button>
    </div>
  );
}
