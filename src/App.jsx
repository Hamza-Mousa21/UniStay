import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

/* ================= HOME ================= */

import Home from "./pages/Home/Home.jsx";

/* ================= STUDENT ================= */

import StudentRegister from "./pages/Student/studentRegister.jsx";

import StudentLogin from "./pages/Student/StudenLogin.jsx";

/* ================= OWNER ================= */

import OwnerRegister from "./pages/Owner/ownerRegister.jsx";

import OwnerLogin from "./pages/Owner/owner.jsx";

import AddProperty from "./pages/Owner/AddProperty.jsx";

/* ================= RESIDENCE ================= */

import AllResidence from "./pages/Residence/AllResedintPage.jsx";

import ResDetailsPage from "./pages/Residence/ResDetailsPage.jsx";

import WishList from "./pages/Residence/wishList.jsx";

/* ================= DASHBOARD ================= */

import DashboardLayout from "./components/layout/DashboardLayout.jsx";

import DashHome from "./pages/dashboard/DashHome.jsx";

import PropertiesPage from "./pages/properties/Propertiespage.jsx";

import RequestsPage from "./pages/requests/Requestspage.jsx";

import OwnersPage from "./pages/Owner/ownersPages.jsx";

import StudentsPage from "./pages/Student/Studentspage.jsx";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* ================= MAIN ROUTES ================= */}

        <Route
          path="/"
          element={<Home />}
        />

        {/* ================= STUDENT ROUTES ================= */}

        <Route
          path="/student-register"
          element={<StudentRegister />}
        />

        <Route
          path="/student-login"
          element={<StudentLogin />}
        />

        {/* ================= OWNER ROUTES ================= */}

        <Route
          path="/owner-register"
          element={<OwnerRegister />}
        />

        <Route
          path="/owner-login"
          element={<OwnerLogin />}
        />

        <Route
          path="/add-property"
          element={<AddProperty />}
        />

        {/* ================= RESIDENCE ROUTES ================= */}

        <Route
          path="/all-residence"
          element={<AllResidence />}
        />

        <Route
          path="/wishlist"
          element={<WishList />}
        />

        <Route
          path="/details/:id"
          element={<ResDetailsPage />}
        />

        {/* ================= DASHBOARD ROUTES ================= */}

        <Route
          path="/dashboard"
          element={<DashboardLayout />}
        >

          <Route
            index
            element={<DashHome />}
          />

          <Route
            path="properties"
            element={<PropertiesPage />}
          />

          <Route
            path="students"
            element={<StudentsPage />}
          />

          <Route
            path="owners"
            element={<OwnersPage />}
          />

          <Route
            path="requests"
            element={<RequestsPage />}
          />

        </Route>

      </Routes>

    </BrowserRouter>

  );

}

export default App;