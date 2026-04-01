import { BrowserRouter, Routes, Route } from "react-router-dom"
import AllResidence from "./Container/AllResedintPage"
import ResDetails from "./Container/ResDetailsPage"

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