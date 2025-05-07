import logo from '../../../../public/icons/logo.png';
export const Logo = () => {
  return (
 
    <div className="absolute bottom-0 left-0 w-full p-4 bg-[#0177FB] text-center text-gray-200">
      <p className="text-sm">تطبيق  انجز </p>
      <p className="text-sm">جميع الحقوق محفوظة &copy; 2025</p>
    {
      logo
      ? <img src={logo.src} alt="Logo" className=" rounded-2xl  mx-auto mt-2" />
      : <p className="text-sm">شعار التطبيق</p>
    }
    </div>
  );
};
