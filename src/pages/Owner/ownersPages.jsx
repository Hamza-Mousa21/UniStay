import { useState } from "react";

const initialOwners = [
  { id: 1, name: "خالد أبو الرب", phone: "059-111-2233", properties: 3, income: "3,600 ₪", status: "نشط" },
  { id: 2, name: "منى الجعفري",  phone: "059-444-5566", properties: 2, income: "2,100 ₪", status: "نشط" },
  { id: 3, name: "عمر الزيدي",   phone: "059-777-8899", properties: 1, income: "1,500 ₪", status: "معلق" },
  { id: 4, name: "هناء سمارة",   phone: "059-222-3344", properties: 4, income: "4,800 ₪", status: "نشط" },
  { id: 5, name: "طارق عودة",    phone: "059-555-6677", properties: 2, income: "1,900 ₪", status: "محظور" },
  { id: 6, name: "نور الدين",    phone: "059-888-9900", properties: 1, income: "950 ₪",   status: "نشط" },
];

const statusStyle = {
  "نشط":    { background: "#ecfdf5", color: "#065f46" },
  "معلق":   { background: "#fef3c7", color: "#92400e" },
  "محظور":  { background: "#fef2f2", color: "#991b1b" },
};

export default function OwnersPage() {
  const [search, setSearch] = useState("");
  const [owners] = useState(initialOwners);

  const filtered = owners.filter(
    (o) =>
      o.name.includes(search) ||
      o.phone.includes(search) ||
      o.status.includes(search)
  );

  return (
    <div style={{ direction: "rtl", fontFamily: "'Segoe UI', Arial, sans-serif" }}>
      {/* Stats */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gap: 18,
          marginBottom: 28,
        }}
      >
        {[
          { label: "إجمالي الملاك",  value: 89, change: "+5%", up: true, bg: "#fef3c7", icon: "👥" },
          { label: "ملاك نشطون",     value: 76, change: "+3%", up: true, bg: "#ecfdf5", icon: "✅" },
          { label: "ملاك جدد",       value: 13, change: "+8%", up: true, bg: "#eff6ff", icon: "🆕" },
        ].map((s) => (
          <div
            key={s.label}
            style={{
              background: "#fff",
              border: "0.5px solid #e2e8f0",
              borderRadius: 14,
              padding: "20px 22px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
              <span style={{ fontSize: 15, color: "#64748b" }}>{s.label}</span>
              <div style={{ width: 42, height: 42, borderRadius: 10, background: s.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>
                {s.icon}
              </div>
            </div>
            <div style={{ fontSize: 32, fontWeight: 500, color: "#0f172a", marginBottom: 8 }}>{s.value}</div>
            <div style={{ fontSize: 13, display: "flex", alignItems: "center", gap: 5 }}>
              <span style={{ color: s.up ? "#10b981" : "#ef4444" }}>{s.change}</span>
              <span style={{ color: "#94a3b8" }}>من الشهر الماضي</span>
            </div>
          </div>
        ))}
      </div>

      {/* Table Card */}
      <div style={{ background: "#fff", border: "0.5px solid #e2e8f0", borderRadius: 14, overflow: "hidden" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 22px", borderBottom: "0.5px solid #e2e8f0" }}>
          <span style={{ fontSize: 16, fontWeight: 500, color: "#0f172a" }}>قائمة أصحاب السكن</span>
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="ابحث عن مالك..."
              style={{
                padding: "8px 14px",
                border: "0.5px solid #e2e8f0",
                borderRadius: 8,
                fontSize: 14,
                background: "#f8fafc",
                color: "#0f172a",
                outline: "none",
                width: 220,
              }}
            />
            <button
              style={{
                padding: "9px 18px",
                border: "none",
                borderRadius: 8,
                fontSize: 14,
                cursor: "pointer",
                background: "#1d9e75",
                color: "#fff",
                fontWeight: 500,
              }}
            >
              + إضافة مالك
            </button>
          </div>
        </div>

        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: "#f8fafc" }}>
              {["الاسم", "رقم الهاتف", "عدد العقارات", "إجمالي الدخل", "الحالة", "الإجراءات"].map((h) => (
                <th key={h} style={{ textAlign: "right", padding: "12px 22px", fontSize: 13, fontWeight: 500, color: "#64748b", borderBottom: "0.5px solid #e2e8f0" }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((o) => (
              <tr key={o.id} style={{ borderBottom: "0.5px solid #e2e8f0" }}>
                <td style={{ padding: "13px 22px", fontSize: 14, color: "#0f172a", fontWeight: 500 }}>{o.name}</td>
                <td style={{ padding: "13px 22px", fontSize: 14, color: "#64748b" }}>{o.phone}</td>
                <td style={{ padding: "13px 22px", fontSize: 14, color: "#0f172a" }}>{o.properties}</td>
                <td style={{ padding: "13px 22px", fontSize: 14, color: "#0f172a" }}>{o.income}</td>
                <td style={{ padding: "13px 22px" }}>
                  <span style={{ ...statusStyle[o.status], display: "inline-flex", alignItems: "center", padding: "3px 10px", borderRadius: 20, fontSize: 12, fontWeight: 500 }}>
                    {o.status}
                  </span>
                </td>
                <td style={{ padding: "13px 22px" }}>
                  <button style={{ padding: "6px 14px", border: "0.5px solid #e2e8f0", borderRadius: 8, fontSize: 13, cursor: "pointer", background: "transparent", color: "#0f172a" }}>
                    عرض
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
