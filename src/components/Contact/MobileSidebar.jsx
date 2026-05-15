import { useState } from "react";

const MobileSidebar = () => {

  const [open, setOpen] = useState(false);

  const handleOnClick = () => {
    setOpen(!open);
  };

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
          marginBottom:"50px"
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

          <h4
            style={{
              margin: 0,
              color: "#1b2a41"
            }}
          >
            <b>Filters</b>
          </h4>

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
        <div
          className="bg-light"
          style={{
            borderRadius: "18px",
            padding: "18px"
          }}
        >

          <h5 style={{ color: "#1b2a41" }}>
            Price Range
          </h5>

          <select
            className="form-select mb-3"
            style={{
              height: "48px",
              borderRadius: "12px"
            }}
          >
            <option>Any Price</option>
            <option value="1">100 - 200 JD</option>
            <option value="2">200 - 400 JD</option>
            <option value="3">400+ JD</option>
          </select>

          <h5 style={{ color: "#1b2a41" }}>
            Distance
          </h5>

          <select
            className="form-select mb-3"
            style={{
              height: "48px",
              borderRadius: "12px"
            }}
          >
            <option>Any Distance</option>
            <option value="1">1 KM</option>
            <option value="2">3 KM</option>
            <option value="3">5 KM</option>
          </select>

          <h5 style={{ color: "#1b2a41" }}>
            Amenities
          </h5>

          <div className="mt-3">

            {[
              "Wi-fi",
              "Air conditioning",
              "Parking",
              "Laundry"
            ].map((item, index) => (

              <div
                key={index}
                className="d-flex align-items-center justify-content-between mb-3"
              >

                <label
                  style={{
                    fontSize: "15px",
                    color: "#1b2a41"
                  }}
                >
                  {item}
                </label>

                <input
                  type="checkbox"
                  style={{
                    width: "18px",
                    height: "18px"
                  }}
                />

              </div>
            ))}

          </div>

          <button
            className="btn w-100 mt-3"
            style={{
              backgroundColor: "#1b2a41",
              color: "white",
              borderRadius: "14px",
              height: "48px",
              fontWeight: "600"
            }}
          >
            Apply Filter
          </button>

        </div>

        {/* AI SECTION */}
        <div className="mt-4">

          <h4
            className="mb-3"
            style={{
              color: "#1b2a41"
            }}
          >
            <b>Ask AI</b>
          </h4>

          <div className="position-relative">

            <textarea
              className="form-control"
              rows="4"
              placeholder="e.g. a residence with 2 rooms and less than 300 per month..."
              style={{
                resize: "none",
                paddingRight: "55px",
                borderRadius: "14px",
                fontSize: "14px"
              }}
            />

            <button
              className="btn position-absolute"
              style={{
                bottom: "12px",
                right: "12px",
                width: "38px",
                height: "38px",
                borderRadius: "12px",
                backgroundColor: "#1b2a41",
                padding: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >

              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>

            </button>

          </div>

          <p
            style={{
              fontSize: "11px",
              color: "gray",
              marginTop: "8px"
            }}
          >
            Powered by AI
          </p>

        </div>

      </div>

      {/* ANIMATIONS */}
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @media (max-width: 768px) {

            h4 {
              font-size: 20px;
            }

            h5 {
              font-size: 15px;
            }

            input,
            textarea,
            select {
              font-size: 14px !important;
            }
          }
        `}
      </style>

    </>
  );
};

export default MobileSidebar;