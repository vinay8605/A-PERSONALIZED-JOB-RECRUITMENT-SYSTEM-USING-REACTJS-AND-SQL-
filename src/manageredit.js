import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./manageredit.css";
import { useNavigate } from "react-router-dom";

export default function Manageredit() {
  const [data, setData] = useState([]);
  const { mid } = useParams();
  const { id } = useParams();
  const usenav = useNavigate();

  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("file", file);
    console.log(formData);
    try {
      const response = await axios.post(
        `http://localhost:5000/upload/${id}`,
        formData
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    console.log("this is useeffect");
    axios.get(`http://localhost:5000/manageredit/${id}`).then((res) => {
      setData(res.data);
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

  const update = () => {
    const firstname = {
      jobtitle: data.jobtitle,
      jobdescription: data.jobdescription,
      experience: data.experience,
      noofpositions: data.noofpositions,
      jobstatus: data.jobstatus,
      managerid: data.managerid,
      managerreply: data.managerreply,
    };
    axios
      .post(`http://localhost:5000/managerupdate/${id}`, firstname)
      .then((res) => {
        console.log(res.data);

        data.firstname = "";
      });
    usenav(-1);
  };

  return (
    <div>
      <div id="me">
        <center>
          <h2>
            <em className="assignmanager1">Manager Edit</em>
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
            onChange={handler}
            readOnly
          />
          <label className="velabel">Job Description</label>
          <input
            type="text"
            className="veinput"
            name="jobdescription"
            value={data.jobdescription}
            onChange={handler}
            readOnly
          />
          <label className="velabel">Experience</label>
          <input
            type="text"
            className="veinput"
            name="experience"
            value={data.experience}
            onChange={handler}
            readOnly
          />
          <label className="velabel">No.Of.Positions</label>
          <input
            type="text"
            className="veinput"
            name="noofpositions"
            value={data.noofpositions}
            onChange={handler}
            readOnly
          />
          <br />
          <label className="velabel">Job Status</label>
          {/* <input type='text' className='veinput' name='jobstatus' value={data.jobstatus}/> */}
          <select id="status" name="jobstatus" onChange={handler}>
            <option>select</option>
            <option>new</option>
            <option>processing</option>
            <option>completed</option>
          </select>
          <label className="velabel">Reply To Client</label>
          <textarea
            className="veinput"
            name="managerreply"
            rows="10"
            cols="40"
            onChange={handler}
          ></textarea>
          <form onSubmit={handleSubmit}>
            <input
              type="file"
              name="file"
              className="file"
              onChange={handleFileChange}
            />
            <button type="submit">Upload</button>
          </form>
          <br />
        </div>
        <button id="vebtn" onClick={update}>
          Submit
        </button>
      </div>
    </div>
  );
}
