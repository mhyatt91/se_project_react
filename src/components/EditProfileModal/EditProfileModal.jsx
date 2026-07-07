import { useContext, useState, useEffect } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "../../hooks/useForm";

function EditProfileModal({ isOpen, onClose, onUpdateUser }) {
  const { values, handleChange, setValues } = useForm({ name: "", avatar: "" });
  const currentUser = useContext(CurrentUserContext);
  useEffect(() => {
    if (isOpen && currentUser) {
      setValues({
        name: currentUser.name || "",
        avatar: currentUser.avatar || "",
      });
    }
  }, [isOpen, currentUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateUser(values);
  };

  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText="Save Changes"
      title="Change Profile Data"
    >
      <p className="modal__label">Name *</p>
      <input
        className="modal__input"
        type="name"
        name="name"
        placeholder="name"
        value={values.name}
        onChange={handleChange}
      />
      <p className="modal__label">Avatar *</p>
      <input
        className="modal__input"
        type="avatar"
        name="avatar"
        placeholder="avatar"
        value={values.avatar}
        onChange={handleChange}
      />
    </ModalWithForm>
  );
}

export default EditProfileModal;
