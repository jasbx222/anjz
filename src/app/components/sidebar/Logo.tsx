import Image from 'next/image';
import logo from '../../../../public/icons/logo.png';
export const Logo = () => {
  return (

    <div className="absolute -bottom-32 left-0 w-full p-4 bg-[#01228b] text-center text-gray-200">
        {
      logo
      ? <Image src={logo.src} alt="Logo" width={200} height={200} className=" rounded-2xl  mx-auto mt-2" />
      : <p className="text-sm">شعار التطبيق</p>
    }
      <p className="text-sm">تطبيق  انجز </p>
      <p className="text-sm"> تم التطوير بواسطة  &copy; <span className='text-amber-500'>Band</span><span className='text-gray-900'>Tech</span></p>
  
    </div>
  );
};
