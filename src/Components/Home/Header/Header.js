import "./Header.css";
import logo from "./../../../images/viscareo-logo1.svg";

const Header = () => {
  return (
    <div className="header-container">
      <img src={logo} alt="" width="200px" />
      <h1>
        The best hospital <br /> and doctors
      </h1>
    </div>
  );
};

export default Header;
