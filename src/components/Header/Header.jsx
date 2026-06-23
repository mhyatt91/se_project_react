import "./Header.css";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.png";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link, NavLink } from "react-router-dom";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useContext } from "react";

function Header({
  handleAddClick,
  weatherData,
  isLoggedIn,
  handleLoginClick,
  handleRegisterClick,
}) {
  const currentUser = useContext(CurrentUserContext);
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="App logo" />
      </Link>
      <p className="header__date-and-location">
        {currentDate}, {weatherData.city}
      </p>
      <p className="header__username">{currentUser?.name}</p>
      <img
        className="header__avatar"
        src={currentUser?.avatar || avatar}
        alt={currentUser?.name || ""}
      />
      <ToggleSwitch />
      {!isLoggedIn ? (
        <>
          <button
            onClick={handleRegisterClick}
            type="button"
            className="header__add-clothes-btn"
          >
            Sign Up
          </button>
          <button
            onClick={handleLoginClick}
            type="button"
            className="header__add-clothes-btn"
          >
            Log In
          </button>
        </>
      ) : (
        <>
          <button
            onClick={handleAddClick}
            type="button"
            className="header__add-clothes-btn"
          >
            + Add Clothes
          </button>
          <NavLink className="header__nav-link" to="/profile">
            <div className="header__user-container">
              <p className="header__username">{currentUser.name}</p>
              <img
                src={currentUser.avatar}
                alt={currentUser.name}
                className="header__avatar"
              />
            </div>
          </NavLink>
        </>
      )}
    </header>
  );
}

export default Header;
