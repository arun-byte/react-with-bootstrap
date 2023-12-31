import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState();

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";

      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
      <Navbar
        title="Honestly By Arun Sharma"
        mode={mode}
        toggleMode={toggleMode}
      ></Navbar>
      <Alert alert={alert}></Alert>
      <div className="container my-3">
        <TextForm
          showAlert={showAlert}
          heading="Enter the text to analyze"
          mode={mode}
        ></TextForm>
      </div>
    </>
  );
}

export default App;
