import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Student from "./pages/Student/Student";
import Owner from "./pages/Owner/Owner";

import StudentRegister from "./page/Student/studentRegister";
import OwnerRegister from "./page/Owner/ownerRegister";
import AddProperty from "./page/Owner/addProperty"; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student" element={<Student />} />
        <Route path="/owner" element={<Owner />} />
        <Route path="/student-register" element={<StudentRegister />} />
        <Route path="/owner-register" element={<OwnerRegister />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;