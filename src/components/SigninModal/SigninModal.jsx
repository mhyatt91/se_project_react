import { useState } from "react";

const SigninModal = ({ isOpen, onSignin, onClose, handleRegisterClick }) => {
  const defaultValues = {
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(defaultValues);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSignin(formData);
  };

  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content modal__content_type_signin">
        <h2 className="modal__title">Log In</h2>
        <form className="modal__form" onSubmit={handleSubmit}>
          <button
            onClick={onClose}
            type="button"
            className="modal__close"
          ></button>
          <p className="modal__label">Email *</p>
          <input
            className="modal__input"
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <p className="modal__label">Password *</p>
          <input
            className="modal__input"
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <div className="modal__buttons">
            <button className="modal__submit" type="submit">
              Log In
            </button>
            <button
              className="modal__link-button"
              type="button"
              onClick={handleRegisterClick}
            >
              or Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SigninModal;
