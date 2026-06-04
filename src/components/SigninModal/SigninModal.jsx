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
        <input
          email="text"
          password="password"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          email="email"
          password="password"
          placeholder=""
          value={formData.avatar}
          onChange={handleChange}
        />

        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};
