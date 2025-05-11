"use server";
export const AddStaff = async (formData: FormData) => {
  const permissions = formData.getAll("permision");
  const email = formData.get("email"); // الحصول على جميع القيم المختارة
  const name = formData.get("name");
  const phone = formData.get("phone");
  const department = formData.get("department");
  const data = {
    permissions: permissions,
    email: email,
    name: name,
    phone: phone,
    department: department,
  };
  console.log(data); // عرض جميع القيم المختارة
};
