import "./Footer.css";
import logoImage from "../../../dist/assets/images/5409f3b3-b085-4d42-8652-580678be8b8f.jpg";
import footerBg from "../../../dist/assets/images/IMG_6971.jpg";

function Footer() {
  return (
    <footer className="footer">
      <div
        className="footer-bg"
        style={{ backgroundImage: `url(${footerBg})` }}
      ></div>

      <div className="footer-overlay"></div>

      <div className="footer-container" id="footer">
        <div className="footer-main">
          <div className="footer-brand">
            <div className="footer-logo-box">
              <img src={logoImage} alt="UniStay Logo" />
              <div className="footer-brand-text">
                <h2>UniStay</h2>
                <span>سكن طلاب جامعة النجاح</span>
              </div>
            </div>

            <p className="footer-description">
              منصة تساعدك في العثور على السكن الطلابي المناسب بالقرب من الجامعة
              بسهولة ووضوح وتجربة أكثر أمانًا.
            </p>
          </div>

          <div className="footer-links-box">
            <h3>روابط سريعة</h3>
            <ul>
              <li>
                <a href="#">الرئيسية</a>
              </li>
              <li>
                <a href="#search-section">ابحث عن سكن</a>
              </li>
              <li>
                <a href="#why-us">لماذا نحن</a>
              </li>
              <li>
                <a href="/owner">أضف عقارك</a>
              </li>
            </ul>
          </div>

          <div className="footer-contact-box">
            <h3>معلومات التواصل</h3>
            <ul>
              <li>نابلس، فلسطين</li>
              <li>+970 599 123 456</li>
              <li>info@unistay.ps</li>
            </ul>
          </div>

          <div className="footer-social-box">
            <h3>تابعنا</h3>
            <div className="footer-social">
              <a href="#footer">Instagram</a>
              <a href="#footer">Facebook</a>
              <a href="#footer">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 UniStay . جميع الحقوق محفوظة</p>
          <p>صُمم بعناية لطلاب جامعة النجاح الوطنية</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;