import "./App.css";
import Login from "./pages/Login/Login";
import TabOne from "./pages/tabOne/TabOne";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import TabTwo from "./pages/tabTwo/TabTwo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/tabOne" element={<TabOne />} />
        <Route path="/tabTwo" element={<TabTwo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
