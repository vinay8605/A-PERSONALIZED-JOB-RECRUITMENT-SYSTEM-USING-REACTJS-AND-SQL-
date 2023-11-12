import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./vendor.css";

export default function Vendor() {
  const [data, setData] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    console.log("this is use effect");
    axios.get(`http://localhost:5000/vendorjobs/${id}`).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  }, [id]);

  return (
    <div>
      <div className="bar">
      <center>
        <h2>
          <em>Assigned Jobs</em>
        </h2>
        <hr />
      </center>
      </div>

      {data.map((item) => (
        <>
          <div id="vendordiv">
            <table id="vtable">
              <tr>
                <th>JOB TITLE</th>
                <td className="vtd">{item.jobtitle}</td>
              </tr>
              <tr>
                <th>JOB DESCRIPTION</th>
                <td className="vtd">{item.jobdescription}</td>
              </tr>
              <tr>
                <th>EXPERIENCE</th>
                <td className="vtd">{item.experience}</td>
              </tr>
              <tr>
                <th>JOB STATUS</th>
                <td className="vtd">{item.jobstatus}</td>
              </tr>
              <tr>
                <th>NO.OF.POSITIONS</th>
                <td className="vtd">{item.noofpositions}</td>
              </tr>
              <tr>
                <th>ASSIGN TO MANAGER </th>
                <td className="vtd">{item.managerid}</td>
              </tr>
            </table>
            <button className="vedit">
              <Link to={`/vendor/${id}/vendoredit/${item.id}`} className="veditlink">Edit</Link>
            </button>
          </div>
        </>
      ))}
    </div>
  );
}
