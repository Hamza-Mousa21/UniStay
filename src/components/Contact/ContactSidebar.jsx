const ContactSidebar = () => {
  return (
    <>
      <div
        className="
          bg-light
          p-3 p-md-4
          col-12
          col-md-12
          col-lg-12
        "
        style={{
          height: "fit-content",
          borderRadius: "8px",
          color: "#1b2a41",
        }}
      >
        <h4><b>تواصل مع المالك</b></h4>

        <p className="mb-3">اسم المالك</p>

        <h5>اسمك</h5>
        <input
          type="text"
          className="form-control mb-2"
        />

        <h5 className="mt-3">رقم جوالك</h5>
        <input
          className="form-control mb-2"
          type="tel"
        />

        <h5 className="mt-3">نص الرسالة</h5>

        <div className="position-relative">
          <textarea
            className="form-control"
            rows="3"
            placeholder="بدي سكن كذا كذا"
            style={{
              resize: "none",
              fontSize: "16px",
              paddingRight: "45px",
            }}
          ></textarea>

          <button
            className="btn position-absolute"
            style={{
              bottom: "10px",
              right: "10px",
              width: "32px",
              height: "32px",
              borderRadius: "8px",
              backgroundColor: "#1b2a41",
              padding: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              width="13"
              height="13"
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

      {/* Responsive Fix */}
      <style>
        {`
          @media (max-width: 768px) {
            h4 {
              font-size: 18px;
            }

            h5 {
              font-size: 15px;
            }

            input, textarea {
              font-size: 14px !important;
            }
          }

          @media (max-width: 576px) {
            .bg-light {
              padding: 12px !important;
            }

            textarea {
              min-height: 90px;
            }
          }
        `}
      </style>
    </>
  );
};

export default ContactSidebar;