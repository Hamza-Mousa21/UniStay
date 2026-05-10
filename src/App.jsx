import { BrowserRouter, Routes, Route } from "react-router-dom";

<<<<<<< HEAD
import Home from "./pages/Home/Home";
import Student from "./pages/Student/student";
import Owner from "./pages/Owner/owner";

import StudentRegister from "./pages/Student/studentRegister";
import OwnerRegister from "./pages/Owner/ownerRegister";
import AddProperty from "./pages/Owner/AddProperty";
import AllResidence from "./pages/Residence/AllResedintPage";
import ResDetails from "./pages/Residence/ResDetailsPage";
import WishList from "./pages/Residence/wishList";
=======
import DashHome from "./pages/dashboard/DashHome";
import OwnersPage from "./pages/owners/ownersPages";
import PropertiesPage from "./pages/properties/Propertiespage";
import StudentsPage from "./pages/students/Studentspage";
import RequestsPage from "./pages/requests/Requestspage";
import DashboardLayout from "./components/layout/DashboardLayout";
>>>>>>> Ba-Sh

function App() {
  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
        
        <Route path="/" element={<Home />} />
        <Route path="/student" element={<Student />} />
        <Route path="/owner" element={<Owner />} />
        <Route path="/student-register" element={<StudentRegister />} />
        <Route path="/owner-register" element={<OwnerRegister />} />
        <Route path="/add-property" element={<AddProperty />} />
        <Route path="/all-residence" element={<AllResidence />} />
        <Route path="/wishlist" element={<WishList></WishList>}></Route>
        <Route path="/details/:id" element={<ResDetails />} />
=======
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<DashHome />} />
          <Route path="properties" element={<PropertiesPage />} />
          <Route path="students" element={<StudentsPage />} />
          <Route path="owners" element={<OwnersPage />} />
          <Route path="requests" element={<RequestsPage />} />
        </Route>
>>>>>>> Ba-Sh
      </Routes>
    </BrowserRouter>
  );
}

export default App;