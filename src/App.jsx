import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Student from "./pages/student/student";
import Owner from "./pages/owner/owner";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student" element={<Student />} />
        <Route path="/owner" element={<Owner />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;