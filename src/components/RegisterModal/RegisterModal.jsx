import { useState } from "react";

const RegisterModal = ({ isOpen, onClose, onRegister, handleLoginClick }) => {
  const defaultValues = {
    name: "",
    avatar: "",
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

    onRegister(formData);
  };

  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content">
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
          <p className="modal__label">Name *</p>
          <input
            className="modal__input"
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
          <p className="modal__label">Avatar *</p>
          <input
            className="modal__input"
            type="text"
            name="avatar"
            placeholder="Avatar URL"
            value={formData.avatar}
            onChange={handleChange}
          />
          <button className="modal__submit" type="submit">
            Sign Up
          </button>
          <button
            className="modal__link-button"
            type="submit"
            onClick={handleLoginClick}
          >
            or Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterModal;
