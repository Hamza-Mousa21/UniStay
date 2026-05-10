import { BrowserRouter, Routes, Route } from "react-router-dom";

import DashHome from "./pages/dashboard/DashHome";
import OwnersPage from "./pages/owners/ownersPages";
import PropertiesPage from "./pages/properties/Propertiespage";
import StudentsPage from "./pages/students/Studentspage";
import RequestsPage from "./pages/requests/Requestspage";
import DashboardLayout from "./components/layout/DashboardLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<DashHome />} />
          <Route path="properties" element={<PropertiesPage />} />
          <Route path="students" element={<StudentsPage />} />
          <Route path="owners" element={<OwnersPage />} />
          <Route path="requests" element={<RequestsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;