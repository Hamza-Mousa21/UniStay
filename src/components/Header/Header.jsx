import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="nav-right">
          <div className="logo-box">
            <Link
              to="/"
              className="logo"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              UniStay
            </Link>
          </div>
        </div>

        <nav className="nav-center">
          <ul className="nav-links">
            <li>
              <Link
                to="/"
                onClick={() =>
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }
              >
                الرئيسية
              </Link>
            </li>
            <li>
              <a href="/#search-section">ابحث عن سكن</a>
            </li>
            <li>
              <a href="/#why-us">لماذا تختار منصتنا</a>
            </li>
            <li>
              <a href="/#how-it-works">كيف تعمل منصتنا</a>
            </li>
          </ul>
        </nav>

        <div className="nav-left">
          <Link to="/student" className="login-link">
            تسجيل الدخول
          </Link>
          <Link to="/add-property" className="add-btn">
            أضف عقارك
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;