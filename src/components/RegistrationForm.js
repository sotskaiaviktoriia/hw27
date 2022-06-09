import { useState } from "react";

const RegistrationForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = ({ target: { value, name } }) => {
    switch (name) {
      case "email": {
        setEmail(value);
        break;
      }
      case "password": {
        setPassword(value);
        break;
      }
      case "confirmPassword": {
        setConfirmPassword(value);
        break;
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrorMessage("");

    if (email.trim().length === 0) {
      setErrorMessage("Email is a required field");
      return;
    }

    if (password.trim().length === 0) {
      setErrorMessage("Password is a required field");
      return;
    }

    if (confirmPassword.trim().length === 0) {
      setErrorMessage("Confirm password is a required field");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Error!Confirm password and password must match");
    }

    console.log("Email", email);
    console.log("Password", password);
    console.log("Confirm password", confirmPassword);
  };

  const handleReset = () => {
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:{" "}
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </label>

      <label>
        Password:{" "}
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </label>

      <label>
        Confirm password:{" "}
        <input
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
        />
      </label>

      {errorMessage && <div>{errorMessage}</div>}

      <button type="submit">Submit</button>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </form>
  );
};

export default RegistrationForm;
