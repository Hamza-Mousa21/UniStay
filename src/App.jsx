// import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Student from "./pages/Student/student";
import Owner from "./pages/Owner/owner";

import StudentRegister from "./pages/Student/studentRegister";
import OwnerRegister from "./pages/Owner/ownerRegister";
import AddProperty from "./pages/Owner/AddProperty";
import AllResidence from "./pages/Residence/AllResedintPage";
import ResDetails from "./pages/Residence/ResDetailsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/student" element={<Student />} />
        <Route path="/owner" element={<Owner />} />
        <Route path="/student-register" element={<StudentRegister />} />
        <Route path="/owner-register" element={<OwnerRegister />} />
        <Route path="/add-property" element={<AddProperty />} />
        <Route path="/all-residence" element={<AllResidence />} />
        <Route path="/details/:id" element={<ResDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;