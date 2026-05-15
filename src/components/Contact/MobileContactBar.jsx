import { useState, useEffect } from "react";

const MobileContactBar = () => {
  const [clicked, setClicked] = useState(false);
  const [data, setData] = useState({});
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const getOwnerData = async () => {
      const owner = await fetch(`http://localhost:3000/owner/1/info`);
      const info = await owner.json();
      setData(info);
    };
    getOwnerData();
  }, []);

  const handleOnClick = () => {
    setClicked(!clicked);
  };

  const handleWhatsApp = () => {
    if (!userName || !userPhone || !message) {
      alert("يرجى تعبئة جميع الحقول");
      return;
    }

    const ownerPhone = data.phone_num;
    const fullMessage = `مرحبا، أنا ${userName}.\n${message}`;
    const url = `https://wa.me/${ownerPhone}?text=${encodeURIComponent(fullMessage)}`;
    window.open(url, "_blank");
  };

  return (
    <>

      {/* BACKDROP */}
      {clicked && (
        <div
          onClick={handleOnClick}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.45)",
            zIndex: 999,
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
          bottom: clicked ? "0" : "-100%",
          left: 0,
          right: 0,
          background: "white",
          zIndex: 1000,
          borderTopLeftRadius: "22px",
          borderTopRightRadius: "22px",
          padding: "22px",
          transition: "all 0.35s ease",
          boxShadow: "0 -8px 30px rgba(0,0,0,0.18)",
          maxHeight: "85vh",
          overflowY: "auto"
        }}
      >

        {/* TOP BAR */}
        <div
          style={{
            width: "55px",
            height: "5px",
            backgroundColor: "#d1d1d1",
            borderRadius: "50px",
            margin: "0 auto 20px auto"
          }}
        />

        {/* HEADER */}
        <div className="d-flex justify-content-between align-items-center mb-3">

          <h4
            style={{
              color: "#1b2a41",
              margin: 0
            }}
          >
            <b>تواصل مع المالك</b>
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

        <p
          style={{
            color: "gray",
            marginBottom: "20px"
          }}
        >
          {data.first_name} {data.last_name}
        </p>

        {/* NAME */}
        <h6 style={{ color: "#1b2a41" }}>
          اسمك
        </h6>

        <input
          type="text"
          className="form-control mb-3"
          placeholder="حمزة موسى.."
          style={{
            height: "48px",
            borderRadius: "12px"
          }}
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />

        {/* PHONE */}
        <h6 style={{ color: "#1b2a41" }}>
          رقم جوالك
        </h6>

        <input
          className="form-control mb-3"
          type="tel"
          placeholder="970123456789"
          style={{
            height: "48px",
            borderRadius: "12px"
          }}
          value={userPhone}
          onChange={(e) => setUserPhone(e.target.value)}
        />

        {/* MESSAGE */}
        <h6 style={{ color: "#1b2a41" }}>
          نص الرسالة
        </h6>

        <div className="position-relative">

          <textarea
            className="form-control"
            rows="4"
            placeholder="بدي سكن كذا كذا"
            style={{
              resize: "none",
              paddingRight: "55px",
              borderRadius: "14px",
              fontSize: "14px"
            }}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button
            className="btn position-absolute"
            onClick={handleWhatsApp}
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

      </div>

      {/* BOTTOM BUTTON */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "12px",
          background: "white",
          zIndex: 998,
          borderTop: "1px solid #ececec"
        }}
      >

        <button
          className="w-100"
          onClick={handleOnClick}
          style={{
            backgroundColor: "#1b2a41",
            color: "white",
            borderRadius: "14px",
            border: "none",
            height: "52px",
            fontSize: "16px",
            fontWeight: "600"
          }}
        >
          تواصل مع المالك
        </button>

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

          @media (max-width: 576px) {

            h4 {
              font-size: 20px;
            }

            h6 {
              font-size: 14px;
            }

            input,
            textarea {
              font-size: 14px !important;
            }
          }
        `}
      </style>

    </>
  );
};

export default MobileContactBar;