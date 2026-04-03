import "./Header.css";
import { Link } from "react-router-dom";
import logoImage from "../../assets/images/5409f3b3-b085-4d42-8652-580678be8b8f.jpg";

function Header() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="nav-right">
          <Link to="/" className="logo-box">
            <img src={logoImage} alt="logo" className="logo-image" />
            <span className="logo">UniStay</span>
          </Link>
        </div>

        <nav className="nav-center">
          <ul className="nav-links">
            <li><Link to="/">الرئيسية</Link></li>
            <li><a href="/#search-section">ابحث عن سكن</a></li>
            <li><a href="/#why-us">لماذا تختار منصتنا</a></li>
            <li><a href="/#how-it-works">كيف تعمل منصتنا</a></li>
          </ul>
        </nav>

        <div className="nav-left">
          <Link to="/student" className="login-link">تسجيل الدخول</Link>
          <Link to="/owner" className="add-btn">أضف عقارك</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;