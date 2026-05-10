import { Outlet, useNavigate, useLocation } from "react-router-dom";

const navItems = [
  { icon: "🏠", label: "الرئيسية", path: "/" },
  { icon: "🏢", label: "إدارة العقارات", path: "/properties" },
  { icon: "🎓", label: "إدارة الطلاب", path: "/students" },
  { icon: "👥", label: "إدارة أصحاب السكن", path: "/owners" },
  { icon: "📋", label: "الطلبات", path: "/requests" },
];

export default function DashboardLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  const ADMIN_NAME = "Bara Shurab";
  const ADMIN_INITIAL = ADMIN_NAME.charAt(0).toUpperCase();

  return (
    <div style={{ display: "flex", minHeight: "100vh", direction: "rtl" }}>
      
      {/* Sidebar */}
      <aside style={{ width: 240, background: "#0f172a", color: "#fff" }}>
        <div style={{ padding: 20 }}>UniStay</div>

        {navItems.map((item) => {
          const isActive = location.pathname === item.path;

          return (
            <div
              key={item.label}
              onClick={() => navigate(item.path)}
              style={{
                padding: "12px 18px",
                cursor: "pointer",
                background: isActive ? "rgba(255,255,255,0.1)" : "transparent",
              }}
            >
              {item.icon} {item.label}
            </div>
          );
        })}
      </aside>

      {/* Main */}
      <div style={{ flex: 1 }}>
        
        {/* Topbar */}
        <header style={{
          background: "#fff",
          padding: 20,
          display: "flex",
          justifyContent: "space-between"
        }}>
          <h2>لوحة التحكم</h2>

          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span>{ADMIN_NAME}</span>

            <div style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              background: "#3b82f6",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              {ADMIN_INITIAL}
            </div>
          </div>
        </header>

        {/* Content (هون الصفحات تتغير) */}
        <main style={{ padding: 20 }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}