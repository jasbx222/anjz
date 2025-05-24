// components/withAuth.tsx
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

// هنا ناخذ البيج ك برور ونجيك اذا في توكن او لا 
export function withAuth(Component: React.ComponentType<any>) {
  return function ProtectedComponent(props: any) {
    const router = useRouter();
    const [isChecking, setIsChecking] = useState(true);

    useEffect(() => {
      const token = localStorage.getItem('token');
      if (!token) {
        router.replace('/login');
      } else {
        setIsChecking(false);
      }
    }, []);

    if (isChecking) return null; 

    return <Component {...props} />;
  };
}
