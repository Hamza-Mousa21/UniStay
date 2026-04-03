import { useState } from "react";
import "./AddProperty.css";
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";
import heroImage from "../assets/images/478239244_1021199110043927_4451689171410494361_n.jpg";
import {
  FaLocationDot,
  FaBed,
  FaPaperclip,
  FaWifi,
  FaCar,
  FaShieldHalved,
  FaImages,
} from "react-icons/fa6";

function AddProperty() {
  const [formData, setFormData] = useState({
    address: "",
    neighborhood: "",
    monthlyPrice: "",
    capacity: "",
    rooms: "",
    bathrooms: "",
  });

  const [services, setServices] = useState({
    wifi: false,
    parking: false,
    security: false,
  });

  const [selectedFiles, setSelectedFiles] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const toggleService = (serviceName) => {
    setServices((prev) => ({
      ...prev,
      [serviceName]: !prev[serviceName],
    }));
  };

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files || []);
    setSelectedFiles(files);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrorMessage("");

    if (!formData.address.trim() || !formData.monthlyPrice.trim()) {
      setErrorMessage("يرجى تعبئة العنوان والسعر قبل النشر");
      return;
    }

    alert("تم تجهيز البيانات للنشر");
  };

  return (
    <>
      <Header />

      <main className="add-property-page">
        <section className="add-property-hero">
          <img src={heroImage} alt="خلفية إضافة العقار" className="hero-bg" />
          <div className="add-property-hero-overlay"></div>

          <div className="add-property-hero-content">
            <span className="hero-badge">لوحة إضافة عقار</span>
            <h1>أضف عقارك وابدأ استقبال الطلبات</h1>
            <p>
              املأ البيانات التالية لعرض السكن للطلاب بطريقة احترافية وسهلة
              وواضحة
            </p>
          </div>
        </section>

        <div className="add-property-container">
          <form onSubmit={handleSubmit} className="add-property-form">
            <section className="property-section">
              <h2 className="section-title">
                <FaLocationDot />
                <span>الموقع والسعر</span>
              </h2>

              <div className="property-grid">
                <input
                  type="text"
                  name="address"
                  placeholder="العنوان الكامل"
                  value={formData.address}
                  onChange={handleInputChange}
                />

                <input
                  type="text"
                  name="neighborhood"
                  placeholder="الحي"
                  value={formData.neighborhood}
                  onChange={handleInputChange}
                />

                <input
                  type="number"
                  name="monthlyPrice"
                  placeholder="السعر الشهري"
                  min="1"
                  value={formData.monthlyPrice}
                  onChange={handleInputChange}
                />
              </div>
            </section>

            <section className="property-section">
              <h2 className="section-title">
                <FaBed />
                <span>المواصفات</span>
              </h2>

              <div className="property-grid">
                <div className="spec-card">
                  <label>سعة السكن</label>
                  <input
                    type="number"
                    name="capacity"
                    placeholder="أدخل السعة"
                    min="1"
                    value={formData.capacity}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="spec-card">
                  <label>عدد الغرف</label>
                  <input
                    type="number"
                    name="rooms"
                    placeholder="أدخل عدد الغرف"
                    min="1"
                    value={formData.rooms}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="spec-card">
                  <label>عدد الحمامات</label>
                  <input
                    type="number"
                    name="bathrooms"
                    placeholder="أدخل عدد الحمامات"
                    min="1"
                    value={formData.bathrooms}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </section>

            <section className="property-section">
              <h2 className="section-title">
                <FaPaperclip />
                <span>المرفقات والخدمات</span>
              </h2>

              <div className="services-grid">
                <button
                  type="button"
                  className={`service-card ${services.wifi ? "active" : ""}`}
                  onClick={() => toggleService("wifi")}
                >
                  <FaWifi />
                  <p>إنترنت WiFi</p>
                </button>

                <button
                  type="button"
                  className={`service-card ${services.parking ? "active" : ""}`}
                  onClick={() => toggleService("parking")}
                >
                  <FaCar />
                  <p>موقف سيارات</p>
                </button>

                <button
                  type="button"
                  className={`service-card ${services.security ? "active" : ""}`}
                  onClick={() => toggleService("security")}
                >
                  <FaShieldHalved />
                  <p>أمن وحراسة</p>
                </button>
              </div>
            </section>

            <section className="property-section">
              <h2 className="section-title">
                <FaImages />
                <span>صور العقار</span>
              </h2>

              <label className="upload-box">
                <FaImages className="upload-icon" />
                <p>اضغط لتحميل الصور أو اسحبها هنا</p>
                <small>PNG, JPG حتى 5MB</small>
                <input type="file" multiple onChange={handleFileChange} />
                {selectedFiles.length > 0 && (
                  <p id="file-name">تم اختيار {selectedFiles.length} صورة</p>
                )}
              </label>
            </section>

            {errorMessage && <p id="error-message">{errorMessage}</p>}

            <button type="submit" className="publish-btn">
              نشر الإعلان
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default AddProperty;