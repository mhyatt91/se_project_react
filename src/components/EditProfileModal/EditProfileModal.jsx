import { useContext, useState, useEffect } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function EditProfileModal({ isOpen, onClose, onUpdateUser }) {
  const [formData, setFormData] = useState({ name: "", avatar: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateUser(formData);
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
          <p className="modal__title">Change Profile Data *</p>
          <p className="modal__title">Name *</p>
          <input
            type="name"
            name="name"
            placeholder="name"
            value={formData.name}
            onChange={handleChange}
          />
          <p className="modal__title">Avatar *</p>
          <input
            type="avatar"
            name="avatar"
            placeholder="avatar"
            value={formData.avatar}
            onChange={handleChange}
          />
          <button type="submit">Save Changes</button>
        </form>
      </div>
    </div>
  );
}

export default EditProfileModal;
