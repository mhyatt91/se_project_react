import { useState } from "react";

const RegisterModal = ({ isOpen, onClose, onRegister }) => {
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
          <p className="modal__title">Email *</p>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <p className="modal__title">Password *</p>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <p className="modal__title">Name *</p>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
          <p className="modal__title">Avatar *</p>
          <input
            type="text"
            name="avatar"
            placeholder="Avatar URL"
            value={formData.avatar}
            onChange={handleChange}
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterModal;
