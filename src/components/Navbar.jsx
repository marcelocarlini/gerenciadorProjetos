import { Link } from "react-router-dom";
import "../partials/componentsCss/_navbar.scss";
import logo from "../assets/logo-white.svg";

function Navbar() {
  return (
    <>
      <div>
        <Link to="/">
          <img className="logo" src={logo} alt="logo" />{" "}
        </Link>
      </div>

      <nav className="navbar">
        <ul className="list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projetos">Projetos</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
