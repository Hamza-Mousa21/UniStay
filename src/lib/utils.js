/**
 * تحويل مسار الصورة لـ URL كامل
 * image_url من الباك بيكون: /uploads/residences/123.jpg
 * نحتاج: http://localhost:3000/uploads/residences/123.jpg
 */
export const getImageUrl = (path) => {
  if (!path) return "/placeholder.jpg";
  return `http://localhost:3000${path}`;
};