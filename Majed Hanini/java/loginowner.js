window.addEventListener("DOMContentLoaded", function () {
  const studentBtn = document.getElementById("studentBtn");
  const ownerBtn = document.getElementById("ownerBtn");
  const loginForm = document.getElementById("ownerLoginForm");
  const createAccountLink = document.getElementById("createAccountLink");
  const togglePasswordBtn = document.querySelector(".toggle-password");

  if (studentBtn) {
    studentBtn.onclick = function () {
      window.location.href = "loginstudent.html";
    };
  }

  if (ownerBtn) {
    ownerBtn.onclick = function () {
      window.location.href = "loginowner.html";
    };
  }

  if (createAccountLink) {
    createAccountLink.onclick = function (e) {
      e.preventDefault();
      window.location.href = "owner register Page.html";
    };
  }

  if (togglePasswordBtn) {
    togglePasswordBtn.onclick = function () {
      const passwordInput = document.getElementById("password");
      const icon = this.querySelector("i");

      if (passwordInput.type === "password") {
        passwordInput.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
      } else {
        passwordInput.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
      }
    };
  }

  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();

      if (email === "" || password === "") {
        alert("يرجى تعبئة البريد الإلكتروني وكلمة المرور");
        return;
      }

      alert("تم تسجيل دخول صاحب السكن بنجاح");
    });
  }
});
