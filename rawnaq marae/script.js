function toggle(el) {
  el.classList.toggle("active");
}

function submitForm() {
  const address = document.querySelector("input[placeholder='العنوان الكامل']").value.trim();
  const price = document.querySelector("input[placeholder='السعر الشهري']").value.trim();
  const errorMessage = document.getElementById("error-message");

  errorMessage.textContent = "";

  if (address === "" || price === "") {
    errorMessage.textContent = "يرجى تعبئة العنوان والسعر قبل النشر";
    return;
  }

  alert("تم تجهيز البيانات للنشر");
}

const fileInput = document.querySelector("input[type='file']");
const fileName = document.getElementById("file-name");

if (fileInput) {
  fileInput.addEventListener("change", function () {
    if (fileInput.files.length > 0) {
      fileName.textContent = `تم اختيار ${fileInput.files.length} صورة`;
    } else {
      fileName.textContent = "";
    }
  });
}