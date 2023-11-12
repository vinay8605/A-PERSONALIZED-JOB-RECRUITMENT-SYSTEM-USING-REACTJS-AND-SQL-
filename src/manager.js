import { useState, useEffect } from "react";
import axios from "axios";
import "./manager.css";
import { useParams, Link } from "react-router-dom";

export default function Manager() {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    console.log("this is useeffect");
    axios.get(`http://localhost:5000/managerjobs/${id}`).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  }, [id]);
  return (
    <div>
      <div className="managerhead">
      <center>
        <h2>
          <em>Assigned Jobs</em>
        </h2>
        <hr />
      </center>
      </div>

      {data.map((item) => (
        <>
          <div className="managerdiv">
            <table className="mtable">
              <tr>
                <th>JOB TITLE</th>
                <td className="mtd">{item.jobtitle}</td>
              </tr>
              <tr>
                <th>JOB DESCRIPTION</th>
                <td className="mtd">{item.jobdescription}</td>
              </tr>
              <tr>
                <th>EXPERIENCE</th>
                <td className="mtd">{item.experience}</td>
              </tr>
              <tr>
                <th>JOB STATUS</th>
                <td className="mtd">{item.jobstatus}</td>
              </tr>
              <tr>
                <th>NO.OF.POSITIONS</th>
                <td className="mtd">{item.noofpositions}</td>
              </tr>
              <tr>
                <th>ASSIGN TO MANAGER</th>
                <td className="mtd">{item.managerid}</td>
              </tr>
            </table>
            <button className="medit">
              <Link to={`/manageredit/${item.id}`} className="medit5">Edit</Link>
            </button>
          </div>
        </>
      ))}
    </div>
  );
}
