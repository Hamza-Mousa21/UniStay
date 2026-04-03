import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default function AddHousing() {
  return (
    <div className="container mt-5 mb-5">

      {/* العنوان */}
      <div className="text-center mb-5">
        <h1 className="fw-bold">إضافة سكن جديد</h1>
        <p className="text-muted">
          أضف معلومات السكن المتاح لطلاب وطالبات جامعة النجاح الوطنية
        </p>
      </div>

      {/* المعلومات الأساسية */}
      <div className="card p-4 mb-4">
        <h5 className="mb-3">المعلومات الأساسية</h5>

        <div className="mb-3">
          <label className="form-label">عنوان الإعلان</label>
          <input type="text" className="form-control" placeholder="مثال: شقة مفروشة قريبة من الجامعة" />
        </div>

        <div className="mb-3">
          <label className="form-label">الوصف</label>
          <textarea className="form-control" rows="3" placeholder="اكتب وصف تفصيلي للسكن..."></textarea>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label">نوع السكن</label>
            <select className="form-select">
              <option>اختر نوع السكن</option>
              <option>شقة</option>
              <option>غرفة</option>
              <option>سكن مشترك</option>
            </select>
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">متاح</label>
            <select className="form-select">
              <option>اختر</option>
              <option>نعم</option>
              <option>لا</option>
            </select>
          </div>
        </div>
      </div>

      {/* الموقع والسعر */}
      <div className="card p-4 mb-4">
        <h5 className="mb-3">الموقع والسعر</h5>

        <div className="mb-3">
          <label className="form-label">العنوان الكامل</label>
          <input type="text" className="form-control" placeholder="مثال: نابلس، رفيديا، مقابل الحرم الجديد" />
        </div>

        <div className="mb-3">
          <label className="form-label">الحي</label>
          <input type="text" className="form-control" placeholder="مثال: رفيديا" />
        </div>

        <div className="mb-3">
          <label className="form-label">السعر الشهري (ILS ₪)</label>
          <input type="number" className="form-control" placeholder="300" />
        </div>
      </div>

      {/* المواصفات */}
      <div className="card p-4 mb-4">
        <h5 className="mb-3">المواصفات</h5>

        <div className="row">
          <div className="col-md-4 mb-3">
            <label className="form-label">سعة السكن</label>
            <input type="number" className="form-control" placeholder="4" />
          </div>

          <div className="col-md-4 mb-3">
            <label className="form-label">عدد الغرف</label>
            <input type="number" className="form-control" placeholder="2" />
          </div>

          <div className="col-md-4 mb-3">
            <label className="form-label">عدد الحمامات</label>
            <input type="number" className="form-control" placeholder="1" />
          </div>
        </div>
      </div>

      {/* المرافق */}
      <div className="card p-4 mb-4">
        <h5 className="mb-3">المرافق والخدمات</h5>

        <div className="row">
          <div className="col-md-4 form-check mb-2">
            <input className="form-check-input" type="checkbox" id="wifi" />
            <label className="form-check-label" htmlFor="wifi">إنترنت WiFi</label>
          </div>

          <div className="col-md-4 form-check mb-2">
            <input className="form-check-input" type="checkbox" id="parking" />
            <label className="form-check-label" htmlFor="parking">موقف سيارات</label>
          </div>

          <div className="col-md-4 form-check mb-2">
            <input className="form-check-input" type="checkbox" id="security" />
            <label className="form-check-label" htmlFor="security">أمن وحراسة</label>
          </div>
        </div>
      </div>

      {/* الصور */}
      <div className="card p-4 mb-4 text-center">
        <h5 className="mb-3">صور السكن</h5>

        <div className="upload-box">
          <p className="text-muted">اضغط لتحميل الصور أو اسحبها هنا</p>
          <input type="file" className="form-control" multiple />
        </div>
      </div>

      {/* الأزرار */}
      <div className="d-flex justify-content-between mt-4">
        <button className="btn btn-secondary px-4">إلغاء</button>
        <button className="btn btn-publish px-4">نشر الإعلان</button>
      </div>

    </div>
  );
}