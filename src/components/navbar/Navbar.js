import logo from "../images/icon.png";
export default function Navbar() {
  return (
    <div>
      <nav>
        <img src={logo} alt="icon" className="nav-img" />
        <h3 className="nav-h3">ReactFacts</h3>
        <h4 className="nav-h4">React Course - Project 1</h4>
      </nav>
    </div>
  );
}
