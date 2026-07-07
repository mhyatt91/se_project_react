import { useState } from "react";
import { useForm } from "../../hooks/useForm";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const SigninModal = ({ isOpen, onSignin, onClose, handleRegisterClick }) => {
  const defaultValues = {
    email: "",
    password: "",
  };

  const { values, handleChange, setValues } = useForm(defaultValues);

  const handleSubmit = (e) => {
    e.preventDefault();

    onSignin(values);
  };

  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      title="Sign In"
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
    </ModalWithForm>
  );
};

export default SigninModal;
