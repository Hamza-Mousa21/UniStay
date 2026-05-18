import { useState } from "react";

const MobileSidebar = ({ onSearch }) => {

  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  // filter state
  const [price, setPrice] = useState("")
  const [distance, setDistance] = useState("")
  const [wifi, setWifi] = useState(false)
  const [security, setSecurity] = useState(false)
  const [parking, setParking] = useState(false)

  const handleOnClick = () => setOpen(!open);

  const handleFilter = async () => {
    try {
      const params = new URLSearchParams()

      if (price === "1") { params.append("minPrice", 100); params.append("maxPrice", 200) }
      if (price === "2") { params.append("minPrice", 200); params.append("maxPrice", 400) }
      if (price === "3") { params.append("minPrice", 400) }

      if (distance === "1") params.append("maxDistance", 200)
      if (distance === "2") params.append("maxDistance", 500)
      if (distance === "3") params.append("maxDistance", 1000)

      if (wifi)     params.append("wifi", true)
      if (security) params.append("security", true)
      if (parking)  params.append("parking", true)

      const res = await fetch(`http://localhost:3000/residence?${params.toString()}`)
      const data = await res.json()
      onSearch(data.residences)
      setOpen(false) // close drawer after applying
    } catch (err) {
      console.error("Filter error:", err)
    }
  }

  const handleClearFilter = async () => {
    // reset all filter state
    setPrice("")
    setDistance("")
    setWifi(false)
    setSecurity(false)
    setParking(false)

    // re-fetch all residences
    try {
      const res = await fetch("http://localhost:3000/residence")
      const data = await res.json()
      onSearch(data.residences)
      setOpen(false)
    } catch (err) {
      console.error("Clear filter error:", err)
    }
  }

  const handleAISearch = async () => {
    if (!query.trim()) return
    setLoading(true)
    try {
      const res = await fetch("http://localhost:3000/residence/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      })
      const data = await res.json()
      onSearch(data.residences)
      setOpen(false)
    } catch (err) {
      console.error("AI Search Error:", err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>

      {/* FILTER BUTTON */}
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 20,
          background: "white",
          padding: "10px 0",
          marginBottom: "50px"
        }}
      >
        <button
          onClick={handleOnClick}
          style={{
            width: "100%",
            height: "48px",
            borderRadius: "14px",
            backgroundColor: "#1b2a41",
            color: "white",
            border: "none",
            fontWeight: "600",
            fontSize: "15px"
          }}
        >
          Filter
        </button>
      </div>

      {/* BACKDROP */}
      {open && (
        <div
          onClick={handleOnClick}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.45)",
            zIndex: 998,
            backdropFilter: "blur(3px)",
            WebkitBackdropFilter: "blur(3px)",
            animation: "fadeIn 0.25s ease"
          }}
        />
      )}

      {/* POPUP */}
      <div
        style={{
          position: "fixed",
          bottom: open ? "0" : "-100%",
          left: 0,
          right: 0,
          background: "white",
          zIndex: 999,
          borderTopLeftRadius: "24px",
          borderTopRightRadius: "24px",
          padding: "22px",
          transition: "all 0.35s ease",
          boxShadow: "0 -8px 30px rgba(0,0,0,0.18)",
          maxHeight: "88vh",
          overflowY: "auto"
        }}
      >

        {/* TOP HANDLE */}
        <div
          style={{
            width: "55px",
            height: "5px",
            backgroundColor: "#d5d5d5",
            borderRadius: "50px",
            margin: "0 auto 18px auto"
          }}
        />

        {/* HEADER */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4 style={{ margin: 0, color: "#1b2a41" }}><b>فلتر</b></h4>
          <button
            onClick={handleOnClick}
            style={{
              border: "none",
              background: "#f1f1f1",
              width: "35px",
              height: "35px",
              borderRadius: "50%",
              fontSize: "18px",
              cursor: "pointer"
            }}
          >
            ×
          </button>
        </div>

        {/* FILTERS SECTION */}
        <div className="bg-light" style={{ borderRadius: "18px", padding: "18px" }}>

          <h5 style={{ color: "#1b2a41" }}>السعر</h5>
          <select
            className="form-select mb-3"
            style={{ height: "48px", borderRadius: "12px" }}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          >
            <option value="">اي سعر</option>
            <option value="1">100 - 200 JD</option>
            <option value="2">200 - 400 JD</option>
            <option value="3">400+ JD</option>
          </select>

          <h5 style={{ color: "#1b2a41" }}>مسافة</h5>
          <select
            className="form-select mb-3"
            style={{ height: "48px", borderRadius: "12px" }}
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
          >
            <option value="">اي مسافة</option>
            <option value="1">200 متر</option>
            <option value="2">500 متر</option>
            <option value="3">1 كم</option>
          </select>

          <h3 style={{ color: "#1b2a41" }}>ميزات</h3>
          <div className="mt-3">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <label style={{ fontSize: "15px", color: "#1b2a41" }}>واي فاي</label>
              <input type="checkbox" style={{ width: "18px", height: "18px" }} checked={wifi} onChange={(e) => setWifi(e.target.checked)} />
            </div>
            <div className="d-flex align-items-center justify-content-between mb-3">
              <label style={{ fontSize: "15px", color: "#1b2a41" }}>حماية</label>
              <input type="checkbox" style={{ width: "18px", height: "18px" }} checked={security} onChange={(e) => setSecurity(e.target.checked)} />
            </div>
            <div className="d-flex align-items-center justify-content-between mb-3">
              <label style={{ fontSize: "15px", color: "#1b2a41" }}>مصف سيارات</label>
              <input type="checkbox" style={{ width: "18px", height: "18px" }} checked={parking} onChange={(e) => setParking(e.target.checked)} />
            </div>
          </div>

          {/* APPLY + CLEAR BUTTONS */}
          <button
            className="btn w-100 mt-3"
            style={{
              backgroundColor: "#1b2a41",
              color: "white",
              borderRadius: "14px",
              height: "48px",
              fontWeight: "600"
            }}
            onClick={handleFilter}
          >
            Apply Filter
          </button>

          <button
            className="btn w-100 mt-2"
            style={{
              backgroundColor: "white",
              color: "#1b2a41",
              borderRadius: "14px",
              height: "48px",
              fontWeight: "600",
              border: "1.5px solid #1b2a41"
            }}
            onClick={handleClearFilter}
          >
            مسح الفلتر
          </button>

        </div>

        {/* AI SECTION */}
        <div className="mt-4">
          <h4 className="mb-3" style={{ color: "#1b2a41" }}><b>Ask AI</b></h4>
          <div className="position-relative">
            <textarea
              className="form-control"
              rows="4"
              placeholder="بدي سكن كذا كذا ..."
              style={{
                resize: "none",
                paddingRight: "55px",
                borderRadius: "14px",
                fontSize: "14px"
              }}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              className="btn position-absolute"
              style={{
                bottom: "12px",
                left: "12px",
                width: "38px",
                height: "38px",
                borderRadius: "12px",
                backgroundColor: loading ? "gray" : "#1b2a41",
                padding: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={handleAISearch}
              disabled={loading}
            >
              {loading
                ? <span style={{ fontSize: "10px", color: "white" }}>...</span>
                : (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                )
              }
            </button>
          </div>
          <p style={{ fontSize: "11px", color: "gray", marginTop: "8px" }}>Powered by AI</p>
        </div>

      </div>

      {/* ANIMATIONS */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @media (max-width: 768px) {
            h4 { font-size: 20px; }
            h5 { font-size: 15px; }
            input, textarea, select { font-size: 14px !important; }
          }
        `}
      </style>

    </>
  );
};

export default MobileSidebar;