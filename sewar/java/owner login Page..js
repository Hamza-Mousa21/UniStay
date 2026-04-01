const studentBtn = document.getElementById("studentBtn");
const ownerBtn = document.getElementById("ownerBtn");
const ownerForm = document.getElementById("ownerForm");

studentBtn.addEventListener("click", function () {
  window.location.href = "student login Page.html";
});

ownerBtn.addEventListener("click", function () {
  window.location.href = "owner login Page.html";
});

function togglePassword(inputId, element) {
  const input = document.getElementById(inputId);
  const icon = element.querySelector("i");

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

ownerForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const fullName = document.getElementById("fullName").value.trim();
  const identityNumber = document.getElementById("identityNumber").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const housingAddress = document.getElementById("housingAddress").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document.getElementById("confirmPassword").value.trim();

  if (
    fullName === "" ||
    identityNumber === "" ||
    email === "" ||
    phone === "" ||
    housingAddress === "" ||
    password === "" ||
    confirmPassword === ""
  ) {
    alert("يرجى تعبئة جميع الحقول");
    return;
  }

  if (password !== confirmPassword) {
    alert("كلمتا المرور غير متطابقتين");
    return;
  }

  alert("تم إنشاء حساب صاحب السكن بنجاح");
});