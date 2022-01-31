import "./App.css";
import Login from "./pages/Login/Login";
import Tab1 from "./pages/tab1/Tab1";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Tab1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
