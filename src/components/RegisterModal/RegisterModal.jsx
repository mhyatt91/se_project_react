import { useState } from "react";
import { useForm } from "../../hooks/useForm";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const RegisterModal = ({ isOpen, onClose, onRegister, handleLoginClick }) => {
  const defaultValues = {
    name: "",
    avatar: "",
    email: "",
    password: "",
  };

  const { values, handleChange, setValues } = useForm(defaultValues);

  const handleSubmit = (e) => {
    e.preventDefault();

    onRegister(values);
  };

  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      title="Sign Up"
    >
      <p className="modal__label">Email *</p>
      <input
        className="modal__input"
        type="email"
        name="email"
        placeholder="Email"
        value={values.email}
        onChange={handleChange}
      />
      <p className="modal__label">Password *</p>
      <input
        className="modal__input"
        type="password"
        name="password"
        placeholder="Password"
        value={values.password}
        onChange={handleChange}
      />
      <p className="modal__label">Name *</p>
      <input
        className="modal__input"
        type="text"
        name="name"
        placeholder="Name"
        value={values.name}
        onChange={handleChange}
      />
      <p className="modal__label">Avatar *</p>
      <input
        className="modal__input"
        type="text"
        name="avatar"
        placeholder="Avatar URL"
        value={values.avatar}
        onChange={handleChange}
      />
      <div className="modal__buttons">
        <button className="modal__submit" type="submit">
          Sign Up
        </button>
        <button
          className="modal__link-button"
          type="button"
          onClick={handleLoginClick}
        >
          or Log in
        </button>
      </div>
    </ModalWithForm>
  );
};

export default RegisterModal;
