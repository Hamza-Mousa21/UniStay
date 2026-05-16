import { useState } from "react";

const SideBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const [price, setPrice] = useState("")
  const [distance, setDistance] = useState("")
  const [wifi, setWifi] = useState(false)
  const [security, setSecurity] = useState(false)
  const [parking, setParking] = useState(false)

  const handleSearch = async () => {
    if (!query.trim()) return;
    setLoading(true);
    try {
      const res = await fetch("http://localhost:3000/residence/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      });
      const data = await res.json();
      onSearch(data.residences);
    } catch (err) {
      console.error("AI Search Error:", err);
    } finally {
      setLoading(false);
    }
  };

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
    } catch (err) {
      console.error("Filter error:", err)
    }
  }

  const handleClearFilter = async () => {
    setPrice("")
    setDistance("")
    setWifi(false)
    setSecurity(false)
    setParking(false)

    try {
      const res = await fetch("http://localhost:3000/residence")
      const data = await res.json()
      onSearch(data.residences)
    } catch (err) {
      console.error("Clear filter error:", err)
    }
  }

  return (
    <>
      <div className="col-7 col-md-3 col-lg-3 p-4" style={{ position: "sticky", top: 0, height: "fit-content", alignSelf: "flex-start", flex: "none" }}>
        <h4 className="mb-3"><b>نظام اقتراحات</b></h4>
        <div className="bg-light p-4" style={{ borderRadius: 5 }}>
          <h4><b>فلترة النتائج</b></h4>

          <h5>السعر</h5>
          <select className="form-select form-select-sm w-80" value={price} onChange={(e) => setPrice(e.target.value)}>
            <option value="">اي سعر</option>
            <option value="1">100-200 JD</option>
            <option value="2">200-400 JD</option>
            <option value="3">+400 JD</option>
          </select>

          <h5 className="mt-4">المسافة</h5>
          <select className="form-select form-select-sm w-100" value={distance} onChange={(e) => setDistance(e.target.value)}>
            <option value="">اي مسافة</option>
            <option value="1">10 د</option>
            <option value="2">20 د</option>
            <option value="3">+30 د</option>
          </select>

          <h5 className="mt-4">الميزات</h5>
          <div className="form-check" style={{ color: "#1b2a41" }}>
            <input className="form-check-input" type="checkbox" id="wifi" checked={wifi} onChange={(e) => setWifi(e.target.checked)} />
            <label className="form-check-label" htmlFor="wifi">واي فاي</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="ac" checked={security} onChange={(e) => setSecurity(e.target.checked)} />
            <label className="form-check-label" htmlFor="ac">حماية</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="parking" checked={parking} onChange={(e) => setParking(e.target.checked)} />
            <label className="form-check-label" htmlFor="parking">مصف سيارات</label>
          </div>

          <button
            className="btn text-center mt-4 w-100"
            style={{ backgroundColor: "#1b2a41", color: "white" }}
            onClick={handleFilter}
          >
            Apply filter
          </button>

          <button
            className="btn text-center mt-2 w-100"
            style={{ backgroundColor: "white", color: "#1b2a41", border: "1.5px solid #1b2a41" }}
            onClick={handleClearFilter}
          >
            مسح الفلتر
          </button>

        </div>

        {/* AI SEARCH */}
        <div className="mt-4">
          <h4 className="mb-3"><b>Ask AI</b></h4>
          <div className="position-relative">
            <textarea
              className="form-control"
              rows="3"
              placeholder="بدي سكن كذا كذا ..."
              style={{ resize: "none", paddingLeft: "45px", fontSize: "16px" }}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              className="btn position-absolute"
              style={{
                bottom: "8px",
                left: "1.5rem",
                width: "30px",
                height: "30px",
                borderRadius: "8px",
                backgroundColor: loading ? "gray" : "#1b2a41",
                padding: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={handleSearch}
              disabled={loading}
            >
              {loading
                ? <span style={{ fontSize: "10px", color: "white" }}>...</span>
                : (
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                )
              }
            </button>
          </div>
          <p className="text-muted mt-1" style={{ fontSize: "11px" }}>Powered by AI</p>
        </div>
      </div>
    </>
  );
};

export default SideBar;