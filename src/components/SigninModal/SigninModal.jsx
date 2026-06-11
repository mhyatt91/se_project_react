import { useState } from "react";

const SigninModal = ({ isOpen, onSignin, onClose }) => {
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

    onRegisterUser(formData);
  };

  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <form className="modal__form" onSubmit={handleSubmit}>
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

        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default SigninModal;
