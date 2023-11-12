import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./client.css";
import { Link } from "react-router-dom";
import axios from "axios";
import resume from "./Resume2.pdf";

export default function Client() {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    console.log("this is useeffect");
    axios.get(`http://localhost:5000/postedjobs/${id}`).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  }, [id]);

  const deleteHandler = (id) => {
    const recordid = { id: id };
    axios.post("http://localhost:5000/delrecord", recordid).then((res) => {
      console.log(res);
    });
  };
  
  

  return (
    <div>
      <button id="addjob">
        <Link
          to={`/addjob/${id}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          Add Job +
        </Link>
      </button>
      {data.map((item) => (
        <>
          <div id="clientdiv">
            <table className="ctable">
              <tr>
                <th> JOB TITLE</th>
                <td className="ctd">{item.jobtitle}</td>
              </tr>
              <tr>
                <th> JOB DESCRIPTION</th>
                <td className="ctd">{item.jobdescription}</td>
              </tr>
              <tr>
                <th> EXPERINCE</th>
                <td className="ctd">{item.experience}</td>
              </tr>
              <tr>
                <th> JOB STATUS</th>
                <td className="ctd">{item.jobstatus}</td>
              </tr>
              <tr>
                <th> NO.OF.POSITIONS</th>
                <td className="ctd">{item.noofpositions}</td>
              </tr>
              <tr>
                <th> ASSIGN TO VENDOR COMPANY</th>
                <td className="ctd">{item.vendorid}</td>
              </tr>
              <tr>
                <th> REPLY FROM MANAGER</th>
                <td className="ctd">{item.managerreply}</td>
              </tr>
              <tr>
                <th> DOWNLOAD RESUME</th>
                <td>
                  <button className="downloadresume"><a href={resume} download="Downloaded" className="downloadresume1">Download</a>
                  </button>
                 
                </td>
              </tr>
            </table>
            <button id="cedit">
              <Link to={`/clientedit/${item.id}`} className="medit5">
                Edit
              </Link>
            </button>
            <button id="cdelete" onClick={() => deleteHandler(item.id)}>
              Delete
            </button>
          </div>
        </>
      ))}
    </div>
  );
}
