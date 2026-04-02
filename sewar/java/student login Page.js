const form = document.getElementById("registerForm");

function togglePassword(inputId, element) {
  const input = document.getElementById(inputId);
  const icon = element.querySelector("i");

  if (!input || !icon) return;

  if (input.type === "password") {
    input.type = "text";
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  } else {
    input.type = "password";
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  }
}

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();
    const idNumber = document.getElementById("idNumber").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document
      .getElementById("confirmPassword")
      .value.trim();

    if (
      fullName === "" ||
      idNumber === "" ||
      email === "" ||
      phone === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      alert("يرجى تعبئة جميع الحقول");
      return;
    }

    if (fullName.length < 4) {
      alert("يرجى إدخال اسم كامل صحيح");
      return;
    }

    if (!/^[0-9]+$/.test(idNumber) || idNumber.length < 6) {
      alert("يرجى إدخال رقم جامعي صحيح");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      alert("يرجى إدخال بريد إلكتروني صحيح");
      return;
    }

    if (!/^[0-9]+$/.test(phone) || phone.length < 10) {
      alert("يرجى إدخال رقم هاتف صحيح");
      return;
    }

    if (password.length < 6) {
      alert("كلمة المرور يجب أن تكون 6 خانات على الأقل");
      return;
    }

    if (password !== confirmPassword) {
      alert("كلمتا المرور غير متطابقتين");
      return;
    }

    alert("تم إنشاء حساب الطالب بنجاح");
    form.reset();
  });
}
