import { Link } from "react-router-dom";

// import {Link} from 'react-router-dom'
const Header = () => {
  const navContainerStyles= {
    display: "flex",
    alignItems: "center",
    gap: "30px",
    justifyContent: "space-around",
    width: "500px",
    margin: "auto",
  }
  const navStyles = {
    display: "flex",
    gap:"20px"
  }
  const navLinkStyles ={
    textDecoration: "none"
  }
  return (
    <div style={navContainerStyles}>
      <h3>NavBar</h3>
      <nav style={navStyles}>
        <Link style={navLinkStyles} to="/about">About</Link>
        <Link style={navLinkStyles} to="/contact">Contact</Link>
        {/* <a  href="/about">About</a>
        <a style={navLinkStyles} href="/contact">Contact</a> */}
      </nav>
    </div>
  );
};

export default Header;