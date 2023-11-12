import { NavLink, useNavigate } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  const usenave = useNavigate();
  const logout = () => {
    localStorage.clear();
    usenave("/");
  };
  const username = localStorage.getItem("username");

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        {localStorage.getItem("username") == null ? (
          <li>
            <NavLink to="/signin">Sign In</NavLink>
          </li>
        ) : (
          ""
        )}
        {localStorage.getItem("username") == null ? (
          <li>
            <NavLink to="/signup">Sign Up</NavLink>
          </li>
        ) : (
          ""
        )}
        {localStorage.getItem("Role") == "Admin" ? (
          <li>
            <NavLink to="/admin">Users</NavLink>
          </li>
        ) : (
          ""
        )}
        <li>
          <NavLink to="/about">About</NavLink>
        </li>

        {localStorage.getItem("username") !== null ? (
          <li>
            <a href="" onClick={logout}>
              Logout
            </a>
          </li>
        ) : (
          ""
        )}
        {localStorage.getItem("username") !== null ? (
          <li className="msg">
            <p>Welcome, {username}!</p>
          </li>
        ) : (
          ""
        )}
      </ul>  
      <div className="logo">
        <img
          src="https://www.liblogo.com/img-logo/ri2375r11f-rise-logo-rise-nsp-illinois.png"
          alt="Logo"
        />
      </div>
    </nav>
  );
};
export default Navbar;
