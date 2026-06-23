import "./SideBar.css";
import avatar from "../../assets/avatar.png";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useContext } from "react";

const SideBar = ({ onProfileChange, onLogout }) => {
  const currentUser = useContext(CurrentUserContext);
  return (
    <aside className="sidebar">
      <div className="sidebar__profile">
        <p className="sidebar__username">{currentUser?.name}</p>
        <img
          className="sidebar__avatar"
          src={currentUser?.avatar || avatar}
          alt={currentUser?.name || ""}
        />
      </div>
      <ul className="sidebar__nav">
        <li className="sidebar__nav-item">
          <button className="sidebar__nav-item" onClick={onProfileChange}>
            Change profile data
          </button>
        </li>
        <li className="sidebar__nav-item">
          <button className="sidebar__nav-item" onClick={onLogout}>
            Log out
          </button>
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;
