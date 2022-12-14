import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
