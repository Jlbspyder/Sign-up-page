import { useState } from "react";
import Form from "./components/Form";
import Success from "./components/Success";

function App() {
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleDismiss = () => {
    setSuccess(false);
    setEmail("")
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const regEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (regEx.test(email)) {
      setEmail(email);
      setError("");
      setSuccess(true);
    } else if (!regEx.test(email)) {
      setError("Valid email required");

      setTimeout(() => {
        setError("");
      }, 3000);
    }
  };

  return (
    <div className="container">
      {!success && (
        <Form
          email={email}
          setEmail={setEmail}
          error={error}
          setError={setError}
          handleSubmit={handleSubmit}
        />
      )}
      {success && <Success dismiss={handleDismiss} email={email} />}
    </div>
  );
}

export default App;
