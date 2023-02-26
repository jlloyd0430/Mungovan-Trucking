import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="col-md-6">
      <h1>
        <Link to="/">Mungovan.land</Link>
      </h1>
    </header>
  );
}

export default Header;
