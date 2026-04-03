import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddProperty from "./page/AddProperty";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddProperty />} />
        <Route path="/add-property" element={<AddProperty />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;