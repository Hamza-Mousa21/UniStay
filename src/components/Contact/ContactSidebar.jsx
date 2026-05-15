import { useEffect, useState } from "react";

const ContactSidebar = () => {
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
      <div
        className="bg-light p-4 col-md-12 col-lg-12"
        style={{ height: "fit-content", borderRadius: "5px", color: "#1b2a41" }}
      >
        <h4><b>تواصل مع المالك</b></h4>
        <p className="mb-3">{data.first_name} {data.last_name}</p>

        <h5>اسمك</h5>
        <input
          type="text"
          className="form-control"
          placeholder="حمزة موسى.."
          style={{ width: "100%" }}
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />

        <h5 className="mt-3">رقم جوالك</h5>
        <input
          className="form-control"
          placeholder="970123456789"
          type="tel"
          style={{ width: "100%" }}
          value={userPhone}
          onChange={(e) => setUserPhone(e.target.value)}
        />

        <h5 className="mt-3">نص الرسالة</h5>
        <div className="position-relative">
          <textarea
            className="form-control"
            rows="3"
            placeholder="بدي سكن كذا كذا"
            style={{ resize: "none", paddingLeft: "45px", fontSize: "16px" }}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          {/* Original send button */}
          {/* <button
            className="btn position-absolute"
            style={{
              bottom: "12px",
              left: "1rem",
              width: "30px",
              height: "30px",
              borderRadius: "8px",
              backgroundColor: "#1b2a41",
              padding: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button> */}
        </div>

        {/* WhatsApp button in navy */}
        <button
          onClick={handleWhatsApp}
          className="btn mt-3 w-100"
          style={{
            backgroundColor: "#1b2a41",
            color: "white",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            fontWeight: "500",
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12.004 2C6.478 2 2 6.477 2 12c0 1.821.479 3.532 1.317 5.014L2.05 21.949l5.066-1.328A9.935 9.935 0 0012.004 22C17.529 22 22 17.523 22 12S17.529 2 12.004 2zm0 18.198a8.19 8.19 0 01-4.175-1.143l-.299-.178-3.008.788.802-2.93-.195-.301A8.146 8.146 0 013.83 12c0-4.513 3.672-8.185 8.174-8.185 4.503 0 8.175 3.672 8.175 8.185 0 4.514-3.672 8.198-8.175 8.198z" />
          </svg>
          تواصل عبر واتساب
        </button>

      </div>
    </>
  );
};

export default ContactSidebar;