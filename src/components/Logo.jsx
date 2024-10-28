import logo from "../assets/logo-white.svg";
import "..//partials/componentsCss/_logo.scss";

function Logo() {
  return (
    <div className="logo">
      <img src={logo} alt="logo" />
    </div>
  );
}

export default Logo;
