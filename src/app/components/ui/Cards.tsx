import { StaticImageData } from 'next/dist/shared/lib/get-img-props';
import './Ui.css'
interface CardsProps {
    title?: string;
    description?: string;
    icon?:StaticImageData | string | undefined;
    
    href?: string;
  }
  
  export const CardHome = ({ title, description, icon, href }: CardsProps) => {
    return (
      <div className=" drop-shadow-2xl border border-blue-200 shadow-md  rounded-2xl p-5 hover:shadow-lg transition duration-300 text-right">
    
    <div className=" rounded-full w-10 h-10 ">
       {typeof icon === 'string' ? (
        <img src={icon} alt={title} className="w-full h-full object-cover rounded-full" />
        ) : (
        <img src={icon?.src} alt={title} className="w-full h-full object-cover rounded-full" />
        )}
      </div>
        <h2 className="text-xl font-bold mt-4">{title}</h2>
        <p className="text-gray-600 mt-2">{description}</p>
        <div className="mt-4">
      
    </div>

      
      </div>
    );
  };
  