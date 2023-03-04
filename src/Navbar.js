import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="col-md-6">
      <Link to="/mission">Address-Log</Link>
      <Link to="/gallery">Services</Link>
      <Link to="/contact">Worksheet</Link>
    </nav>
  );
}

export default Navbar;
