import { useState } from "react";
import "../Student/Register.css";
import Header from "../../component/Header/Header";
import FooterPages from "../../component/Footer/Footer";
import heroImage from "../../assets/images/login-bg.jpg";

function StudentRegister() {
  const [fullName, setFullName] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleStudentClick = () => {
    window.location.href = "/student-register";
  };

  const handleOwnerClick = () => {
    window.location.href = "/owner-register";
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !fullName.trim() ||
      !idNumber.trim() ||
      !email.trim() ||
      !phone.trim() ||
      !password.trim() ||
      !confirmPassword.trim()
    ) {
      alert("يرجى تعبئة جميع الحقول");
      return;
    }

    if (fullName.trim().length < 4) {
      alert("يرجى إدخال اسم كامل صحيح");
      return;
    }

    if (!/^[0-9]+$/.test(idNumber) || idNumber.trim().length < 6) {
      alert("يرجى إدخال رقم جامعي صحيح");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      alert("يرجى إدخال بريد إلكتروني صحيح");
      return;
    }

    if (!/^[0-9]+$/.test(phone) || phone.trim().length < 10) {
      alert("يرجى إدخال رقم هاتف صحيح");
      return;
    }

    if (password.trim().length < 6) {
      alert("كلمة المرور يجب أن تكون 6 خانات على الأقل");
      return;
    }

    if (password !== confirmPassword) {
      alert("كلمتا المرور غير متطابقتين");
      return;
    }

    alert("تم إنشاء حساب الطالب بنجاح");

    setFullName("");
    setIdNumber("");
    setEmail("");
    setPhone("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <>
      <section className="student-hero">
        <div className="student-hero-background">
          <img src={heroImage} alt="صورة سكن طلابي" />
        </div>

        <div className="student-hero-overlay"></div>

        <div className="student-hero-content">
          <Header />

          <main className="login-wrapper">
            <section className="login-card">
              <h2>إنشاء حساب طالب</h2>
              <p className="subtitle">
                أكمل بياناتك للبدء باستخدام منصة UniStay بسهولة ووضوح
              </p>

              <div className="user-type">
                <button
                  type="button"
                  className="type-btn active"
                  onClick={handleStudentClick}
                >
                  طالب
                </button>

                <button
                  type="button"
                  className="type-btn"
                  onClick={handleOwnerClick}
                >
                  صاحب سكن
                </button>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="input-group">
                  <label htmlFor="fullName">الاسم الكامل</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="أدخل اسمك الكامل"
                    value={fullName}
                    onChange={(event) => setFullName(event.target.value)}
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="idNumber">الرقم الجامعي</label>
                  <input
                    type="text"
                    id="idNumber"
                    name="idNumber"
                    placeholder="مثال: 11912345"
                    value={idNumber}
                    onChange={(event) => setIdNumber(event.target.value)}
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="email">البريد الإلكتروني الجامعي</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="example@student.najah.edu"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="phone">رقم الهاتف</label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="0599123456"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="password">كلمة المرور</label>
                  <div className="password-box">
                    <button
                      type="button"
                      className="toggle-password"
                      onClick={() => setShowPassword((prev) => !prev)}
                    >
                      {showPassword ? "إخفاء" : "إظهار"}
                    </button>

                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      placeholder="أدخل كلمة المرور"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                    />
                  </div>
                </div>

                <div className="input-group">
                  <label htmlFor="confirmPassword">تأكيد كلمة المرور</label>
                  <div className="password-box">
                    <button
                      type="button"
                      className="toggle-password"
                      onClick={() =>
                        setShowConfirmPassword((prev) => !prev)
                      }
                    >
                      {showConfirmPassword ? "إخفاء" : "إظهار"}
                    </button>

                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      id="confirmPassword"
                      name="confirmPassword"
                      placeholder="أعد إدخال كلمة المرور"
                      value={confirmPassword}
                      onChange={(event) =>
                        setConfirmPassword(event.target.value)
                      }
                    />
                  </div>
                </div>

                <button type="submit" className="submit-btn">
                  إنشاء حساب طالب
                </button>
              </form>
            </section>
          </main>
        </div>
      </section>

      <FooterPages />
    </>
  );
}

export default StudentRegister;