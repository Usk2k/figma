import "./../styles/header.css";
import Body from "./Body";
import Logo from "./Icons/Logo";
export default function Header() {
  return (
    <div className="container">
      <div className="header">
        <div className="header-logo">
          <img src="./imgs/Leap.svg" />
          <img src="./imgs/Hire Me.svg" />
        </div>
        <div className="header-li">
          <ul>
            <li>PORTFOLIO</li>
            <li className="purple">BLOG</li>
            <li>CV</li>
            <li>STORE</li>
            <li>FREELANCE</li>
            <li>ABOUT ME</li>
            <li>CONTACT</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
