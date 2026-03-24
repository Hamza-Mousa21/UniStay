import { BrowserRouter, Routes, Route } from "react-router-dom"
import AllResidence from "./Component/allResedince"  // Note: filename still has typo, but component name fixed
import ResDetails from "./Component/ResDetails"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllResidence />} />
        <Route path="/details/:id" element={<ResDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App