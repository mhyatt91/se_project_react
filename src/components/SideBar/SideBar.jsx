import "./SideBar.css";
import avatar from "../../assets/avatar.png";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useContext } from "react";

const SideBar = ({ onProfileChange, onLogout }) => {
  const currentUser = useContext(CurrentUserContext);
  return (
    <aside className="sidebar">
      <div className="sidebar__profile">
        <p className="sidebar__username">Terrence Tegegne</p>
        <img src={avatar} alt="Terrence Tegegne" className="sidebar__avatar" />
      </div>
      <ul className="sidebar__nav">
        <li className="sidebar__nav-item">
          <button onClick={onProfileChange}>Change Profile Data</button>
        </li>
        <li className="sidebar__nav-item">
          <button onClick={onLogout}>Logout</button>
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;
