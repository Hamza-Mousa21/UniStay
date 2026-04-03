import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import StudentRegister from "./page/Student/studentRegister";
import OwnerRegister from "./page/Owner/ownerRegister";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StudentRegister />} />
        <Route path="/student-register" element={<StudentRegister />} />
        <Route path="/owner-register" element={<OwnerRegister />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;