// components/withAuth.tsx
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';


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

    if (isChecking) return null; // ممكن تحط spinner هنا

    return <Component {...props} />;
  };
}
