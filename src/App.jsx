import { BrowserRouter, Routes, Route } from "react-router-dom";

import DashHome from "./Container/DashHome";
import OwnersPage from "./Container/ownersPages";
import PropertiesPage from "./Container/Propertiespage";
import StudentsPage from "./Container/Studentspage";
import RequestsPage from "./Container/Requestspage";
import DashboardLayout from "./Container/DashboardLayout";

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