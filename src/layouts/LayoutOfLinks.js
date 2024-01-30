import { Link, Outlet } from "react-router-dom";

const LayoutLink = () => {
  return (
    <div>
      <nav className="navbar">
        <Link to={"/"}>Home</Link> | <Link to={"/about"}>About</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default LayoutLink;
